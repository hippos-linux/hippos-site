---
title: "Odyssey 2"
description: "ROM folder, file types, emulators and BIOS files for Odyssey 2 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/odyssey2.webp)"><img src="/docs/art/logos/odyssey2.svg" alt="Odyssey 2"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Magnavox</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/odyssey2/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1978</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Odyssey 2 is a console by Magnavox. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/odyssey2/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `o2em` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `o2rom.bin`<br><small>MD5 `562d5ebf9e030a40d6fabfc2f33139fd`</small> |
| `c52.bin`<br><small>MD5 `f1071cdb0b6b10dde94d3bc8a6146387`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Magnavox</p>
