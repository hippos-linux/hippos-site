---
title: "Atari Lynx"
description: "ROM folder, file types, emulators and BIOS files for Atari Lynx on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atarilynx.webp)"><img src="/docs/art/logos/atarilynx.svg" alt="Atari Lynx"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/lynx/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bll</code> <code>.lnx</code> <code>.lyx</code> <code>.o</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1989</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

Atari's colour handheld, released in September 1989, one of the first handhelds with a colour screen. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/lynx/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `handy` ★, `gearlynx`, `holani`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `lynxboot.img`<br><small>MD5 `fcd403db69f54290b51035d82f835e7b`</small> | The Lynx boot ROM. Required. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Atari</p>
