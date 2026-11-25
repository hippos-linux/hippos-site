---
title: "Sonic 3 A.I.R."
description: "ROM folder, file types, emulators and BIOS files for Sonic 3 A.I.R. on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/sonic3-air.webp)"><img src="/docs/art/logos/sonic3-air.svg" alt="Sonic 3 A.I.R."></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/sonic3-air/</code></td></tr><tr><th>File types</th><td><code>.s3air</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Sonic 3 A.I.R.</td></tr></table>
</aside>

## About

Sonic 3 A.I.R. (Angel Island Revisited) remasters Sonic 3 & Knuckles in widescreen, with fixes and extras. It runs from the original Mega Drive ROM. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Sonic 3 A.I.R. as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/sonic3-air/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Sonic 3 A.I.R.](https://sonic3air.org/)** | Sonic 3 & Knuckles remastered in widescreen, running from the original Mega Drive ROM.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.s3air**: Launcher file for Sonic 3 A.I.R.: an empty file next to the Sonic & Knuckles ROM.


## Adding the game

Put the Sonic & Knuckles + Sonic 3 ROM in a folder inside `/userdata/roms/sonic3-air/` and name it exactly `Sonic_Knuckles_wSonic3.bin`. The old Steam release of Sonic 3 & Knuckles included it. Then add an empty file ending in `.s3air` to the same folder, such as `Sonic 3 AIR.s3air`.

Settings go in `/userdata/system/configs/Sonic3AIR/`.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Sega</p>
