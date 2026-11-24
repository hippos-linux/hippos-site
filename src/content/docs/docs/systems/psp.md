---
title: "PlayStation Portable"
description: "ROM folder, file types, emulators and BIOS files for PlayStation Portable on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/psp.webp)"><img src="/docs/art/logos/psp.svg" alt="PlayStation Portable"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Sony</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/psp/</code></td></tr><tr><th>File types</th><td><code>.chd</code> <code>.cso</code> <code>.iso</code> <code>.pbp</code></td></tr><tr><th>Released</th><td>2004</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>PPSSPP</td></tr></table>
</aside>

## About

Sony's first handheld, released in Japan in December 2004, with UMD discs and games close to PS2 quality. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with PPSSPP as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/psp/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[PPSSPP](https://www.ppsspp.org/)** | PlayStation Portable emulator with upscaling.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `ppsspp`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cso**: Compressed ISO.
- **.iso**: Uncompressed disc image.
- **.pbp**: PSP EBOOT format, also used for converted PlayStation discs.


## Formats

`.cso` and `.chd` are compressed and load as quickly as `.iso`. PPSSPP needs no BIOS.

## Netplay

PPSSPP's ad hoc multiplayer works online through the [netplay lobby](/docs/netplay/). Host or join there, then use the game's own multiplayer menu.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Sony</p>
