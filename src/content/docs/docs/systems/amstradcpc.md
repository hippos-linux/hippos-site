---
title: "Amstrad CPC"
description: "ROM folder, file types, emulators and BIOS files for Amstrad CPC on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/amstradcpc.webp)"><img src="/docs/art/logos/amstradcpc.svg" alt="Amstrad CPC"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Amstrad</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/amstradcpc/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.cdt</code> <code>.dsk</code> <code>.m3u</code> <code>.sna</code> <code>.tap</code> <code>.voc</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1984</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Amstrad CPC is a computer by Amstrad. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/amstradcpc/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `cap32` ★.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` `.m3u` · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Amstrad</p>
