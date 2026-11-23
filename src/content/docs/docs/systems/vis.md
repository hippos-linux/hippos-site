---
title: "Tandy Video Information System"
description: "ROM folder, file types, emulators and BIOS files for Tandy Video Information System on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/vis.webp)"><img src="/docs/art/logos/vis.svg" alt="Tandy Video Information System"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Tandy</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/vis/</code></td></tr><tr><th>File types</th><td><code>.cdr</code> <code>.chd</code> <code>.cue</code> <code>.gdi</code> <code>.iso</code> <code>.nrg</code> <code>.toc</code></td></tr><tr><th>Released</th><td>1992</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Tandy Video Information System is a console by Tandy. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/vis/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mame` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `vis.zip` |
| `vis.zip (containing `p513bk0b.bin`)`<br><small>MD5 `ebf432d3b09f694db1c62018eb2ab471`</small> |
| `vis.zip (containing `p513bk1b.bin`)`<br><small>MD5 `758f8fec271fbf526bb22b36e88f154b`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.gdi**: Dreamcast GD-ROM track list.
- **.iso**: Uncompressed disc image.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Tandy</p>
