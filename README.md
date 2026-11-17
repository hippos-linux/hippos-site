# hippos-site

The official website for [HippOS](https://hippos-linux.org) — a gaming OS for x86 PCs and Raspberry Pi 4/5.

Built with [Astro](https://astro.build) and deployed on Cloudflare Pages + Workers.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/install` | Installation guide |
| `/hardware` | Supported hardware |
| `/changelog` | Per-version release notes |
| `/gallery` | Screenshots |
| `/faq` | Frequently asked questions |
| `/about` | About HippOS |
| `/discord` | Discord invite redirect |

---

## API

### Downloads

| Endpoint | Description |
|---|---|
| `GET /api/download` | Redirects to the latest HippOS image in R2 |

### OTA updates (`hippos-upgrade` on-device)

| Endpoint | Description |
|---|---|
| `GET /api/update/manifest-amd64.json` | Update manifest for x86-64 |
| `GET /api/update/manifest-arm64.json` | Update manifest for Raspberry Pi |
| `GET /api/update/manifest-amd64-dev.json` | Dev channel manifest for x86-64 |
| `GET /api/update/manifest-arm64-dev.json` | Dev channel manifest for Raspberry Pi |
| `GET /api/update/rootfs` | Latest rootfs payload |
| `GET /api/update/frontend` | Latest EmulationStation build |
| `GET /api/update/emulator` | Latest emulator artifacts |
| `GET /api/update/kernel` | Latest kernel package |
| `GET /api/update/build-kit` | Build kit archive |

### Auth (Discord OAuth)

| Endpoint | Description |
|---|---|
| `GET /api/auth/discord` | Initiates Discord OAuth flow |
| `GET /api/auth/callback` | OAuth callback — validates role, sets access token cookie |

Download access requires a valid Early Access or Dev Access token. Tokens are issued on Discord role verification and stored in the `BETA_TOKENS` KV namespace.

### Tools

| Endpoint | Description |
|---|---|
| `GET /api/tools/hippos-upgrade` | Serves the latest `hippos-upgrade` installer script |

---

## Infrastructure

Deployed on **Cloudflare Pages + Workers**. Images and update payloads are served from **Cloudflare R2**.

| Binding | Type | Purpose |
|---|---|---|
| `HIPPOS_IMAGES` | R2 bucket | OS images and update payloads |
| `BETA_TOKENS` | KV namespace | Early Access token store |
| `DISCORD_*` | Vars | OAuth app credentials and allowed role IDs |

---

## Development

```sh
npm install
npm run dev
```

Requires a `.dev.vars` file with:

```
DISCORD_CLIENT_SECRET=...
```

---

## Contributing

Issues and PRs welcome. For OS bugs or emulator issues, use the [main HippOS repo](https://github.com/hippos-linux/hippos-linux).
