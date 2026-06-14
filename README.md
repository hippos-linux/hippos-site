# HippOS Site

The official website for [HippOS](https://hippos-linux.org) — a Linux-based retro gaming OS.

Built with [Astro](https://astro.build) and deployed on Cloudflare Pages + Workers.

---

## What's in here

- **Landing page** — [hippos-linux.org](https://hippos-linux.org)
- **Download API** — serves the latest HippOS flash image
- **OTA update API** — manifest and payload endpoints consumed by `hippos-upgrade` on-device
- **Beta auth** — token-gated access for Early Access members

---

## Development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

Cloudflare bindings (R2 bucket, KV namespace) are not available in local dev. API routes that depend on them will return `503` locally — this is expected.

---

## Deploying

Pushes to `main` deploy automatically via Cloudflare Pages. No manual action needed.

---

## Contributing

Issues and PRs welcome. If you're reporting a bug with the website or update system, open an issue here. For OS bugs or emulator issues, use the [main HippOS repo](https://github.com/hippos-linux/hippos).
