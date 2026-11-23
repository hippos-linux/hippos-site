---
title: "Game Boy Advance"
description: "ROM folder, file types, emulators and BIOS files for Game Boy Advance on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/gba.webp)"><img src="/docs/art/logos/gba.svg" alt="Game Boy Advance"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/gba/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.gba</code> <code>.zip</code></td></tr><tr><th>Released</th><td>2001</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

Nintendo's 32-bit handheld, released in Japan in March 2001. It also plays Game Boy and Game Boy Color games. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/gba/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mgba` ★, `vba-m`, `gpsp`, `skyemu`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[ares](https://ares-emu.net/)** | Multi-system emulator focused on accuracy, from the authors of higan.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Mesen 2](https://www.mesen.ca/)** | Accurate multi-system emulator for NES, SNES, Game Boy, GBA, PC Engine, Master System and more, with strong debugging tools.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ |  |
| **[NanoBoyAdvance](https://github.com/nba-emu/NanoBoyAdvance)** | Cycle-accurate Game Boy Advance emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `gba_bios.bin`<br><small>MD5 `a860e8c0b6d573d191e4ec7db1b1e4f6`</small> | Game Boy Advance BIOS. Optional; emulators have a built-in replacement, but a few games run better with it. |
| `gb_bios.bin`<br><small>MD5 `32fbbd84168d3482956eb3c5051637f5`</small> | Game Boy boot ROM. Optional. |
| `gbc_bios.bin`<br><small>MD5 `dbfce9db9deaa2567f6a84fde55f9680`</small> | Game Boy Color boot ROM. Optional. |
| `sgb_bios.bin`<br><small>MD5 `d574d4f9c12f305074798f54c091a8b4`</small> | Super Game Boy BIOS. Optional. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Nintendo</p>
