---
title: "SuperGrafx"
description: "ROM folder, file types, emulators and BIOS files for SuperGrafx on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/supergrafx.webp)"><img src="/docs/art/logos/supergrafx.svg" alt="SuperGrafx"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>NEC</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/supergrafx/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.ccd</code> <code>.chd</code> <code>.cue</code> <code>.pce</code> <code>.sgx</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1989</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The SuperGrafx is a console by NEC. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/supergrafx/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mednafen_supergrafx` ★, `geargrafx`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ |  |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `syscard3.pce`<br><small>MD5 `38179df8f4ac870017db21ebcbf53114`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · NEC</p>
