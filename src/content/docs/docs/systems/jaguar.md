---
title: "Jaguar"
description: "ROM folder, file types, emulators and BIOS files for Jaguar on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atarijaguar.webp)"><img src="/docs/art/logos/atarijaguar.svg" alt="Jaguar"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/jaguar/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.abs</code> <code>.cof</code> <code>.j64</code> <code>.jag</code> <code>.rom</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1993</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>BigPEmu / RetroArch</td></tr></table>
</aside>

## About

The Jaguar is a console by Atari. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with BigPEmu as the default on PC and RetroArch on Raspberry Pi and RK3326.

## Getting ROMs

Put your files in `/userdata/roms/jaguar/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `virtualjaguar` ★.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ★ |
| **[BigPEmu](https://www.richwhitehouse.com/jaguar/)** | Atari Jaguar and Jaguar CD emulator with high compatibility.<br><small>**Formats:** all · **BIOS:** none</small> | ★ |  |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Atari</p>
