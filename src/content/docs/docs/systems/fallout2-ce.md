---
title: "Fallout 2"
description: "ROM folder, file types, emulators and BIOS files for Fallout 2 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/fallout2-ce.webp)"><span>Fallout 2</span></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Interplay</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/fallout2-ce/</code></td></tr><tr><th>File types</th><td><code>.f2ce</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Fallout 2 Community Edition</td></tr></table>
</aside>

## About

Fallout 2 Community Edition is a reimplementation of the 1998 role-playing game's engine, with higher resolutions and fixes. It needs the original game files. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Fallout 2 Community Edition as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/fallout2-ce/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Fallout 2 Community Edition](https://github.com/alexbatalov/fallout2-ce)** | Fully working reimplementation of the Fallout 2 engine, with higher resolutions.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.f2ce**: Launcher file for Fallout 2: an empty file in the game's folder.


## Adding the game

Copy the installed game from your own copy (Steam or GOG) into a folder inside `/userdata/roms/fallout2-ce/`, for example `/userdata/roms/fallout2-ce/Fallout 2/`. The folder needs `master.dat`, `critter.dat`, `patch000.dat` and the `data` folder. Then add an empty file ending in `.f2ce` to it, such as `Fallout 2.f2ce`.

HippOS writes `fallout2.cfg` and `f2_res.ini` into the game folder, so saves stay with the game. The game runs at your screen's resolution; difficulty and subtitles are in **Advanced Game Options**.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Interplay</p>
