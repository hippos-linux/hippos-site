---
title: "Super Game Boy"
description: "ROM folder, file types, emulators and BIOS files for Super Game Boy on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/sgb.webp)"><img src="/docs/art/logos/sgb.svg" alt="Super Game Boy"></div>
<table><tr><th>Type</th><td>add-on</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/sgb/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.gb</code> <code>.gbc</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1994</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Super Game Boy is an add-on by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/sgb/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mgba` ★, `mesen-s`, `bsnes-jg`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `sgb_boot.bin`<br><small>MD5 `d574d4f9c12f305074798f54c091a8b4`</small> |
| `sgb2_boot.bin`<br><small>MD5 `e0430bca9925fb9882148fd2dc2418c1`</small> |
| `SGB1.sfc`<br><small>MD5 `b15ddb15721c657d82c5bab6db982ee9`</small> |
| `SGB2.sfc`<br><small>MD5 `8ecd73eb4edf7ed7e81aef1be80031d5`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#add-ons">Add-ons</a> · Nintendo</p>
