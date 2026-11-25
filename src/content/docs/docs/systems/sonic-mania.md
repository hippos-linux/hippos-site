---
title: "Sonic Mania"
description: "ROM folder, file types, emulators and BIOS files for Sonic Mania on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/sonic-mania.webp)"><img src="/docs/art/logos/sonic-mania.svg" alt="Sonic Mania"></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/sonic-mania/</code></td></tr><tr><th>File types</th><td><code>.sman</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Sonic Mania (decompilation)</td></tr></table>
</aside>

## About

A decompilation of Sonic Mania (2017) that runs natively on HippOS. It needs the game's own data file; DLC content (Encore and Mania Plus) is not included. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Sonic Mania (decompilation) as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/sonic-mania/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Sonic Mania (decompilation)](https://github.com/RSDKModding/Sonic-Mania-Decompilation)** | Decompilation of Sonic Mania, using the game's own data file.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.sman**: Launcher file for Sonic Mania: an empty file next to the game's Data.rsdk.


## Adding the game

Copy `Data.rsdk` from your own copy of Sonic Mania (the Steam version's game folder has it) into a folder inside `/userdata/roms/sonic-mania/`. Then add an empty file ending in `.sman` to that folder, such as `Sonic Mania.sman`.

HippOS writes `Settings.ini` and a `mods` folder into the game folder, so settings and saves stay with the game.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Sega</p>
