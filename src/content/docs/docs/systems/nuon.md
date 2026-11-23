---
title: "NUON"
description: "ROM folder, file types, emulators and BIOS files for NUON on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/nuon.webp)"><img src="/docs/art/logos/nuon.svg" alt="NUON"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>VM Labs</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/nuon/</code></td></tr><tr><th>File types</th><td><code>.cd</code> <code>.chd</code> <code>.cof</code> <code>.img</code> <code>.iso</code> <code>.nuon</code> <code>.run</code></td></tr><tr><th>Released</th><td>2000</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The NUON is a console by VM Labs. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/nuon/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `nuance` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `nuance/bios.cof` |
| `nuance/minibios.cof` |
| `nuance/minibiosX.cof` |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.iso**: Uncompressed disc image.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · VM Labs</p>
