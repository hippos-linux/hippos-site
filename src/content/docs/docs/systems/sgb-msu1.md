---
title: "Super Game Boy MSU1"
description: "ROM folder, file types, emulators and BIOS files for Super Game Boy MSU1 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/sgb-msu1.webp)"><img src="/docs/art/logos/sgb-msu1.svg" alt="Super Game Boy MSU1"></div>
<table><tr><th>Type</th><td>add-on</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/sgb-msu1/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.gb</code> <code>.gbc</code> <code>.squashfs</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1994</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Super Game Boy MSU1 is an add-on by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/sgb-msu1/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `bsnes` ★, `bsnes_hd` (PC), `bsnes-jg`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#add-ons">Add-ons</a> · Nintendo</p>
