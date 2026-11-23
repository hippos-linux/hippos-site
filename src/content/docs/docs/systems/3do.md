---
title: "3DO"
description: "ROM folder, file types, emulators and BIOS files for 3DO on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/3do.webp)"><img src="/docs/art/logos/3do.svg" alt="3DO"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Panasonic / Sanyo / Goldstar</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/3do/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.chd</code> <code>.cue</code> <code>.iso</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1993</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

A CD console design licensed to several makers (Panasonic, GoldStar, Sanyo), released in October 1993. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/3do/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `opera` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `panafz1.bin`<br><small>MD5 `f47264dd47fe30f73ab3c010015c155b`</small> | Panasonic FZ-1 BIOS |
| `panafz10.bin`<br><small>MD5 `51f2f43ae2f3508a14d9f56597e2d3ce`</small> | Panasonic FZ-10 BIOS |
| `goldstar.bin`<br><small>MD5 `8639fd5e549bd6238cfee79e3e749114`</small> | GoldStar BIOS |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Panasonic / Sanyo / Goldstar</p>
