---
title: "ZX Spectrum"
description: "ROM folder, file types, emulators and BIOS files for ZX Spectrum on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/zxspectrum.webp)"><img src="/docs/art/logos/zxspectrum.svg" alt="ZX Spectrum"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Sinclair</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/zxspectrum/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.dsk</code> <code>.rzx</code> <code>.scl</code> <code>.tap</code> <code>.trd</code> <code>.tzx</code> <code>.z80</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1982</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The ZX Spectrum is a computer by Sinclair. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/zxspectrum/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `fuse` ★.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Sinclair</p>
