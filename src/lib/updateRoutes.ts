import type { APIRoute } from 'astro';
import { validateBetaToken, validateDevToken, extractBearerToken } from './betaAuth';

export type Channel = 'stable' | 'dev';
type PayloadKind = 'emulator' | 'frontend';

const ARCHES = new Set(['amd64', 'arm64']);
const PAYLOAD_FOLDERS: Record<PayloadKind, string> = { emulator: 'emulators', frontend: 'frontend' };

function r2Prefix(channel: Channel): string {
  return channel === 'dev' ? 'update/dev' : 'update';
}

async function authorized(request: Request, env: any, channel: Channel, tokenOptional: boolean): Promise<boolean> {
  const token = extractBearerToken(request);
  if (token === null) {
    return tokenOptional;
  }
  const kv = env.BETA_TOKENS as KVNamespace | undefined;
  if (!kv) {
    return false;
  }
  return channel === 'dev' ? validateDevToken(token, kv) : validateBetaToken(token, kv);
}

function json(body: unknown, status: number, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

export function manifestRoute(channel: Channel, fixedArch?: string): APIRoute {
  return async ({ request, params, locals }) => {
    const env = locals.runtime.env as any;
    const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
    if (!bucket) {
      return json({ error: 'not_configured' }, 503);
    }
    if (!await authorized(request, env, channel, channel === 'stable')) {
      return json({ error: 'unauthorized' }, 401);
    }
    const arch = fixedArch ?? params.arch ?? '';
    if (!ARCHES.has(arch)) {
      return json({ error: 'not_found' }, 404);
    }
    const obj = await bucket.get(`${r2Prefix(channel)}/manifest-${arch}.json`);
    if (!obj) {
      return json({ error: 'not_found' }, 404);
    }
    return new Response(await obj.text(), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
    });
  };
}

export function payloadRoute(channel: Channel, kind: PayloadKind): APIRoute {
  return async ({ request, params, locals }) => {
    const { arch, name, version } = params;
    if (!name || !version || (arch !== undefined && !ARCHES.has(arch))) {
      return new Response('Bad Request', { status: 400 });
    }
    const env = locals.runtime.env as any;
    if (!await authorized(request, env, channel, false)) {
      return new Response('Unauthorized', { status: 401 });
    }
    const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
    if (!bucket) {
      return new Response('Service unavailable', { status: 503 });
    }
    const filename = `hippos-${kind}-${name}-${version}.tar.zst`;
    const archFolder = arch === undefined ? '' : `${arch}/`;
    const obj = await bucket.get(`${r2Prefix(channel)}/${PAYLOAD_FOLDERS[kind]}/${archFolder}${filename}`);
    if (!obj) {
      return new Response('Not found', { status: 404 });
    }
    return new Response(obj.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/zstd',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(obj.size),
      },
    });
  };
}
