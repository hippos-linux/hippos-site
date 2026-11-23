---
title: "Mega Drive MSU-MD"
description: "ROM folder, file types, emulators and BIOS files for Mega Drive MSU-MD on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/megadrive.webp)"><img src="/docs/art/logos/megadrive.svg" alt="Mega Drive MSU-MD"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/megadrive-msu/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.md</code> <code>.squashfs</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1988</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Mega Drive MSU-MD is a console by Sega. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/megadrive-msu/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `genesis_plus_gx` ★, `genesis_plus_gx-wide`, `clownmdemu`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `bios_CD_E.bin`<br><small>MD5 `e66fa1dc5820d254611fdcdba0662372`</small> |
| `bios_CD_U.bin`<br><small>MD5 `854b9150240a198070150e4566ae1290`</small> |
| `bios_CD_J.bin`<br><small>MD5 `278a9397d192149e84e820ac621a8edd`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sega</p>
