---
title: "Super Nintendo MSU-1"
description: "ROM folder, file types, emulators and BIOS files for Super Nintendo MSU-1 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/snes.webp)"><img src="/docs/art/logos/snes.svg" alt="Super Nintendo MSU-1"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/snes-msu1/</code></td></tr><tr><th>File types</th><td><code>.sfc</code> <code>.smc</code> <code>.squashfs</code></td></tr><tr><th>Released</th><td>1990</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Super Nintendo MSU-1 is a console by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/snes-msu1/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `bsnes_hd` ★ (PC), `snes9x` ★, `bsnes-jg`, `mednafen_supafaust`, `snes9x2005_plus`, `snes9x2010`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
