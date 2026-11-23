---
title: "Atari 5200"
description: "ROM folder, file types, emulators and BIOS files for Atari 5200 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atari5200.webp)"><img src="/docs/art/logos/atari5200.svg" alt="Atari 5200"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/atari5200/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.a52</code> <code>.atr</code> <code>.atx</code> <code>.bin</code> <code>.car</code> <code>.cas</code> <code>.cdm</code> <code>.rom</code> <code>.xex</code> <code>.xfd</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1982</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Atari 5200 is a console by Atari. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/atari5200/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `atari800`, `a5200` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `5200.rom`<br><small>MD5 `281f20ea4320404ec820fb7ec0693b38`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Atari</p>
