---
title: "Wenquxing"
description: "ROM folder, file types, emulators and BIOS files for Wenquxing on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/wenquxing.webp)"><img src="/docs/art/logos/wenquxing.svg" alt="Wenquxing"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Golden Global View</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/wenquxing/</code></td></tr><tr><th>File types</th><td><code>.libretro</code></td></tr><tr><th>Released</th><td>1991</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Wenquxing is a handheld by Golden Global View. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/wenquxing/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `wqxemu` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.
Any one of these files is enough.

| File |
|---|
| `WQXEmu/nc1020/obj_lu.bin` |
| `WQXEmu/pc1000/pc1000.rom` |
| `WQXEmu/cc800/obj.bin` |
| `WQXEmu/nc2000/nc2000.nor` |
| `WQXEmu/nc3000/nc3000.nor` |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Golden Global View</p>
