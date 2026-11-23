---
title: "BS-X Satellaview"
description: "ROM folder, file types, emulators and BIOS files for BS-X Satellaview on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/satellaview.webp)"><img src="/docs/art/logos/satellaview.svg" alt="BS-X Satellaview"></div>
<table><tr><th>Type</th><td>add-on</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/satellaview/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bs</code> <code>.sfc</code> <code>.smc</code> <code>.squashfs</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1995</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The BS-X Satellaview is an add-on by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/satellaview/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `snes9x` ★, `mesen-s`, `bsnes-jg`, `mednafen_supafaust`, `snes9x2005_plus`, `snes9x2010`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `BS-X.bin`<br><small>MD5 `96cf17bf589fcbfa6f8de2dc84f19fa2`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#add-ons">Add-ons</a> · Nintendo</p>
