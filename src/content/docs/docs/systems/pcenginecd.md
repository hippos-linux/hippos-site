---
title: "PC Engine CD"
description: "ROM folder, file types, emulators and BIOS files for PC Engine CD on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/pce-cd.webp)"><img src="/docs/art/logos/pce-cd.svg" alt="PC Engine CD"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>NEC</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/pcenginecd/</code></td></tr><tr><th>File types</th><td><code>.ccd</code> <code>.chd</code> <code>.cue</code> <code>.img</code> <code>.iso</code> <code>.pce</code></td></tr><tr><th>Released</th><td>1988</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The PC Engine CD is a console by NEC. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/pcenginecd/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `pce` ★, `pce_fast`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · NEC</p>
