---
title: "Neo-Geo"
description: "ROM folder, file types, emulators and BIOS files for Neo-Geo on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/neogeo.webp)"><img src="/docs/art/logos/neogeo.svg" alt="Neo-Geo"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>SNK</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/neogeo/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.neo</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1990</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

SNK's arcade system and home console, launched in 1990. The same cartridges ran in arcades (MVS) and at home (AES). On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/neogeo/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `fbneo` ★, `geolith`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `neogeo.zip`<br><small>MD5 `dffb72f116d36d025068b23970a4f6df`</small> | The Neo Geo BIOS set. Keep it zipped; a copy in `/userdata/roms/neogeo/` also works. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## ROM sets

Games are MAME/FinalBurn Neo-style `.zip` sets. Use sets that match the emulator: FinalBurn Neo sets for FinalBurn Neo, MAME sets for MAME.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · SNK</p>
