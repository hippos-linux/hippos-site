---
title: "Amiga CD32"
description: "ROM folder, file types, emulators and BIOS files for Amiga CD32 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/amigacd32.webp)"><img src="/docs/art/logos/amigacd32.svg" alt="Amiga CD32"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Commodore</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/amigacd32/</code></td></tr><tr><th>File types</th><td><code>.bin</code> <code>.chd</code> <code>.cue</code> <code>.iso</code></td></tr><tr><th>Released</th><td>1993</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Amiberry</td></tr></table>
</aside>

## About

The Amiga CD32 is a console by Commodore. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Amiberry as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/amigacd32/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

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
| `amiga/kick40060.CD32`<br><small>MD5 `5f8924d013dd57a89cf349f4cdedc6b1`</small> |
| `amiga/kick40060.CD32.ext`<br><small>MD5 `bb72565701b1b6faece07d68ea5da639`</small> |
| `amiga/amiga-os-310-cd32.rom`<br><small>MD5 `5f8924d013dd57a89cf349f4cdedc6b1`</small> |
| `amiga/amiga-ext-310-cd32.rom`<br><small>MD5 `bb72565701b1b6faece07d68ea5da639`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Commodore</p>
