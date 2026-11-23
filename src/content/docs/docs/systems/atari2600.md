---
title: "Atari 2600"
description: "ROM folder, file types, emulators and BIOS files for Atari 2600 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atari2600.webp)"><img src="/docs/art/logos/atari2600.svg" alt="Atari 2600"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/atari2600/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.a26</code> <code>.bin</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1977</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

Atari's cartridge console, released in September 1977 as the Video Computer System and later renamed the 2600. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/atari2600/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `stella` ★, `stella2014`, `tia`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[Stella](https://stella-emu.github.io/)** | Atari 2600 emulator.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Atari</p>
