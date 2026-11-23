---
title: "MSX2"
description: "ROM folder, file types, emulators and BIOS files for MSX2 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/msx2.webp)"><img src="/docs/art/logos/msx2.svg" alt="MSX2"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/msx2/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.cas</code> <code>.dsk</code> <code>.m3u</code> <code>.mx2</code> <code>.ogv</code> <code>.openmsx</code> <code>.rom</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1985</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>openMSX</td></tr></table>
</aside>

## About

The MSX2 is a computer by Microsoft. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with openMSX as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/msx2/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[openMSX](https://openmsx.org/)** | Accurate MSX, MSX2, MSX2+ and turbo R emulator.<br><small>**Formats:** all except `.m3u` · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `bluemsx`, `fmsx`, `openmsx`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `openmsx/NMS8245SystemROM1.08.bin` |
| `openmsx/fmpac.rom`<br><small>MD5 `6f69cc8b5ed761b03afd78000dfb0e19`</small> |
| `openmsx/phc-70fd2_basickun.rom`<br><small>MD5 `2ce20986da024e9a0e271961c6bc9f01`</small> |
| `openmsx/yrw801.rom`<br><small>MD5 `42af93619160ef2116416f74a6cb12f2`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Microsoft</p>
