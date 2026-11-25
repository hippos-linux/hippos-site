---
title: "BBC Micro"
description: "ROM folder, file types, emulators and BIOS files for BBC Micro on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/bbcmicro.webp)"><img src="/docs/art/logos/bbcmicro.svg" alt="BBC Micro"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Acorn Computers</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/bbcmicro/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.360</code> <code>.7z</code> <code>.adf</code> <code>.adl</code> <code>.adm</code> <code>.ads</code> <code>.bbc</code> <code>.bin</code> <code>.cqi</code> <code>.cqm</code> <code>.d77</code> <code>.d88</code> <code>.dfi</code> <code>.dsd</code> <code>.dsk</code> <code>.fsd</code> <code>.hfe</code> <code>.ima</code> <code>.imd</code> <code>.img</code> <code>.ipf</code> <code>.mfi</code> <code>.mfm</code> <code>.ssd</code> <code>.tap</code> <code>.td0</code> <code>.ufi</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1981</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Clock Signal</td></tr></table>
</aside>

## About

The BBC Micro is a computer by Acorn Computers. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Clock Signal as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/bbcmicro/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `b2`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.adf**: Amiga floppy disk image.
- **.dsk**: Floppy disk image.
- **.tap**: Tape image.
- **.wav**: Audio recording of a tape.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Acorn Computers</p>
