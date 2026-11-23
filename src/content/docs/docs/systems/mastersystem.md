---
title: "Master System"
description: "ROM folder, file types, emulators and BIOS files for Master System on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/mastersystem.webp)"><img src="/docs/art/logos/mastersystem.svg" alt="Master System"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/mastersystem/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.sms</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1985</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

Sega's 8-bit console, released in Japan as the Mark III in 1985 and worldwide as the Master System from 1986. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/mastersystem/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `genesis_plus_gx` ★, `picodrive`, `smsplus`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** none</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sega</p>
