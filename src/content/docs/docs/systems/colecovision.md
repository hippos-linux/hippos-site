---
title: "ColecoVision"
description: "ROM folder, file types, emulators and BIOS files for ColecoVision on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/colecovision.webp)"><img src="/docs/art/logos/colecovision.svg" alt="ColecoVision"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Coleco</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/colecovision/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.col</code> <code>.rom</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1982</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The ColecoVision is a console by Coleco. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/colecovision/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `bluemsx`, `gearcoleco` ★, `jollycv`, `openmsx`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ |  |
| **[openMSX](https://openmsx.org/)** | Accurate MSX, MSX2, MSX2+ and turbo R emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `colecovision.rom`<br><small>MD5 `2c66f5911e5b42b8ebe113403548eee7`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Coleco</p>
