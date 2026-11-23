---
title: "Super Nintendo Entertainment System"
description: "ROM folder, file types, emulators and BIOS files for Super Nintendo Entertainment System on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/snes.webp)"><img src="/docs/art/logos/snes.svg" alt="Super Nintendo Entertainment System"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/snes/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bsx</code> <code>.dx2</code> <code>.fig</code> <code>.gd3</code> <code>.gd7</code> <code>.sfc</code> <code>.smc</code> <code>.swc</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1990</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

Nintendo's 16-bit console, released in Japan as the Super Famicom in 1990 and worldwide as the SNES from 1991. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/snes/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `snes9x` ★, `bsnes`, `mesen-s`, `bsnes-jg`, `mednafen_supafaust`, `snes9x2005_plus`, `snes9x2010`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |
| **[Snes9x](https://www.snes9x.com/)** | Standalone SNES emulator.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## Formats

`.sfc` and `.smc` files both work, as do zipped games. Games with extra chips (Super FX, SA-1, DSP) run without extra files.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
