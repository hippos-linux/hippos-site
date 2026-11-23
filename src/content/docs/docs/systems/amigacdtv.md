---
title: "Amiga CDTV"
description: "ROM folder, file types, emulators and BIOS files for Amiga CDTV on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/amigacdtv.webp)"><img src="/docs/art/logos/amigacdtv.svg" alt="Amiga CDTV"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Commodore</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/amigacdtv/</code></td></tr><tr><th>File types</th><td><code>.bin</code> <code>.chd</code> <code>.cue</code> <code>.iso</code> <code>.m3u</code></td></tr><tr><th>Released</th><td>1991</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Amiberry</td></tr></table>
</aside>

## About

The Amiga CDTV is a console by Commodore. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Amiberry as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/amigacdtv/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Amiberry](https://amiberry.com/)** | Amiga emulator based on WinUAE, tuned for Linux and ARM, with WHDLoad support.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `puae`, `amiberry`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[FS-UAE](https://fs-uae.net/)** | Amiga emulator focused on games, with CD32 and CDTV support.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `amiga/kick34005.A500`<br><small>MD5 `82a21c1890cae844b3df741f2762d48d`</small> |
| `amiga/kick34005.CDTV`<br><small>MD5 `89da1838a24460e4b93f4f0c5d92d48d`</small> |
| `amiga/amiga-os-130.rom`<br><small>MD5 `82a21c1890cae844b3df741f2762d48d`</small> |
| `amiga/amiga-ext-130-cdtv.rom`<br><small>MD5 `89da1838a24460e4b93f4f0c5d92d48d`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Commodore</p>
