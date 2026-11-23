---
title: "Sega System SP"
description: "ROM folder, file types, emulators and BIOS files for Sega System SP on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/systemsp.webp)"><img src="/docs/art/logos/systemsp.svg" alt="Sega System SP"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/systemsp/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.dat</code> <code>.lst</code> <code>.zip</code></td></tr><tr><th>Released</th><td>2004</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Flycast</td></tr></table>
</aside>

## About

The Sega System SP is an arcade system by Sega. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Flycast as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/systemsp/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Flycast](https://github.com/flyinghead/flycast)** | Dreamcast, NAOMI and Atomiswave emulator with upscaling and online play.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `flycast`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a> · Sega</p>
