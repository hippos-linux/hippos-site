---
title: "Atari 800"
description: "ROM folder, file types, emulators and BIOS files for Atari 800 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atari800.webp)"><img src="/docs/art/logos/atari800.svg" alt="Atari 800"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/atari800/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.a52</code> <code>.atr</code> <code>.atx</code> <code>.bin</code> <code>.car</code> <code>.cas</code> <code>.cdm</code> <code>.m3u</code> <code>.rom</code> <code>.xex</code> <code>.xfd</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1979</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Atari 800 is a computer by Atari. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/atari800/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `atari800` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `ATARIOSA.ROM`<br><small>MD5 `eb1f32f5d9f382db1bbfb8d7f9cb343a`</small> |
| `ATARIOSB.ROM`<br><small>MD5 `4177f386a3bac989a981d3fe3388cb6c`</small> |
| `ATARIXL.ROM`<br><small>MD5 `06daac977823773a3eea3422fd26a703`</small> |
| `ATARIBAS.ROM`<br><small>MD5 `0bac0c6a50104045d902df4503a4c30b`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Atari</p>
