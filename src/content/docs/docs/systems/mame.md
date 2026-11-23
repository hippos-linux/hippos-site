---
title: "MAME"
description: "ROM folder, file types, emulators and BIOS files for MAME on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/mame.webp)"><img src="/docs/art/logos/mame.svg" alt="MAME"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/mame/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1997</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

MAME emulates thousands of arcade machines. HippOS ships the GroovyMAME build, which can also drive CRT screens at their original resolutions. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/mame/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mame`, `mame2010`, `mame2003_plus`, `mame2000`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## ROM sets

Arcade games are `.zip` sets made for a specific MAME version. Sets for a different version may be missing files or not start; use sets that match the version HippOS ships (shown in MAME's own menu). Keep BIOS sets such as `neogeo.zip` next to the games or in `/userdata/bios/`.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a></p>
