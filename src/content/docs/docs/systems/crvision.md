---
title: "CreatiVision"
description: "ROM folder, file types, emulators and BIOS files for CreatiVision on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/creativision.webp)"><img src="/docs/art/logos/creativision.svg" alt="CreatiVision"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>VTech</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/crvision/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.rom</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1982</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The CreatiVision is a console by VTech. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/crvision/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `jollycv`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `crvision.zip` |
| `crvision.zip (containing `crvision.u20`)`<br><small>MD5 `3b1ef759d8e3fb4071582efd33dd05f9`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · VTech</p>
