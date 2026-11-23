---
title: "Videopac+"
description: "ROM folder, file types, emulators and BIOS files for Videopac+ on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/videopacplus.webp)"><img src="/docs/art/logos/videopacplus.svg" alt="Videopac+"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Philips</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/videopacplus/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1983</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Videopac+ is a console by Philips. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/videopacplus/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `o2em` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `g7400.bin`<br><small>MD5 `c500ff71236068e0dc0d0603d265ae76`</small> |
| `jopac.bin`<br><small>MD5 `279008e4a0db2dc5f1c048853b033828`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Philips</p>
