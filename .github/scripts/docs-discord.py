import difflib
import json
import os
import re
import subprocess
import sys
import urllib.request

DOCS_ROOT = 'src/content/docs/'
SITE_URL = 'https://hippos-linux.org'
COLORS = {'created': 0x7c35ff, 'updated': 0x5865f2, 'deleted': 0xed4245}
MAX_PAGE_EMBEDS = 10
MAX_DIFF_CHARS = 900


def git(*args):
    return subprocess.run(['git', *args], capture_output=True, text=True, check=True).stdout


def file_at(rev, path):
    result = subprocess.run(['git', 'show', f'{rev}:{path}'], capture_output=True, text=True)
    return result.stdout if result.returncode == 0 else ''


def page_title(text, path):
    match = re.search(r'^title:\s*(.+)$', text, re.MULTILINE)
    if match:
        return match.group(1).strip().strip('"\'')
    return os.path.splitext(os.path.basename(path))[0]


def page_url(path):
    slug = os.path.splitext(path[len(DOCS_ROOT):])[0].lower()
    slug = re.sub(r'(^|/)index$', '', slug)
    slug = re.sub(r'[^a-z0-9/_-]', '', slug)
    return f'{SITE_URL}/{slug}/'


def page_diff(old, new):
    lines = [line for line in list(difflib.unified_diff(old.splitlines(), new.splitlines(), lineterm='', n=0))[2:]
             if line[:1] in '+-']
    if not lines:
        return None
    text = '\n'.join(lines)
    if len(text) > MAX_DIFF_CHARS:
        text = text[:MAX_DIFF_CHARS] + '\n...'
    return f'```diff\n{text}\n```'


def changed_pages(before, after):
    pages = []
    for line in git('diff', '--name-status', '--no-renames', before, after, '--', DOCS_ROOT).splitlines():
        status, path = line.split('\t', 1)
        if not path.endswith(('.md', '.mdx')):
            continue
        action = {'A': 'created', 'D': 'deleted'}.get(status[0], 'updated')
        old = file_at(before, path)
        new = file_at(after, path)
        pages.append({'action': action, 'path': path, 'old': old, 'new': new,
                      'title': page_title(new or old, path)})
    return pages


def page_embed(page, author):
    embed = {
        'title': page['title'],
        'url': page_url(page['path']) if page['action'] != 'deleted' else f'{SITE_URL}/docs/',
        'color': COLORS[page['action']],
        'author': {'name': f"Page {page['action']}"},
        'footer': {'text': f'by {author}'},
    }
    if page['action'] == 'updated':
        diff = page_diff(page['old'], page['new'])
        if diff:
            embed['description'] = diff
    return embed


def summary_embed(pages, author, message):
    counts = {action: sum(p['action'] == action for p in pages) for action in COLORS}
    parts = [f'{n} {action}' for action, n in counts.items() if n]
    return {
        'title': f'{len(pages)} docs pages changed',
        'url': f'{SITE_URL}/docs/',
        'color': COLORS['updated'],
        'author': {'name': 'Docs updated'},
        'description': f"{', '.join(parts)}\n\n{message}"[:4000],
        'footer': {'text': f'by {author}'},
    }


def post(webhook, embeds):
    for start in range(0, len(embeds), 10):
        body = json.dumps({'embeds': embeds[start:start + 10]}).encode()
        request = urllib.request.Request(webhook, data=body, method='POST', headers={
            'Content-Type': 'application/json', 'User-Agent': 'hippos-docs-notifier'})
        urllib.request.urlopen(request, timeout=15)


def main():
    before, after, author = sys.argv[1:4]
    message = git('log', '-1', '--format=%s', after).strip()
    if re.fullmatch('0+', before):
        before = git('rev-list', '--max-parents=0', after).split()[0]
    pages = changed_pages(before, after)
    if not pages:
        print('no docs pages changed')
        return
    if len(pages) > MAX_PAGE_EMBEDS:
        embeds = [summary_embed(pages, author, message)]
    else:
        embeds = [page_embed(page, author) for page in pages]
    post(os.environ['DOCS_DISCORD_WEBHOOK'], embeds)
    print(f'posted {len(pages)} page change(s)')


if __name__ == '__main__':
    main()
