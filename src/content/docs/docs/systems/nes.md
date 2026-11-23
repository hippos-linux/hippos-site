---
title: "Nintendo Entertainment System"
description: "ROM folder, file types, emulators and BIOS files for Nintendo Entertainment System on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/nes.webp)"><img src="/docs/art/logos/nes.svg" alt="Nintendo Entertainment System"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/nes/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.nes</code> <code>.unf</code> <code>.unif</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1983</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

Nintendo's first home console, released in Japan as the Famicom in 1983 and worldwide as the NES from 1985. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/nes/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `fceumm` ★, `nestopia`, `mesen2`, `quicknes`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## Formats

`.nes` files with an iNES header work everywhere. Zipped games (`.zip`, `.7z`) work too. No BIOS is needed; the Famicom Disk System has its own [page](/docs/systems/fds/).


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
