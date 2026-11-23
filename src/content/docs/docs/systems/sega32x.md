---
title: "Sega 32X"
description: "ROM folder, file types, emulators and BIOS files for Sega 32X on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/sega32x.webp)"><img src="/docs/art/logos/sega32x.svg" alt="Sega 32X"></div>
<table><tr><th>Type</th><td>add-on</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/sega32x/</code></td></tr><tr><th>File types</th><td><code>.32x</code> <code>.7z</code> <code>.bin</code> <code>.chd</code> <code>.md</code> <code>.smd</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1994</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

A 32-bit cartridge add-on for the Mega Drive, released in November 1994. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/sega32x/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `picodrive` ★, `clownmdemu`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#add-ons">Add-ons</a> · Sega</p>
