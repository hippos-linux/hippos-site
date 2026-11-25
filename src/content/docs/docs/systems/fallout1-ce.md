---
title: "Fallout"
description: "ROM folder, file types, emulators and BIOS files for Fallout on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/fallout1-ce.webp)"><span>Fallout</span></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Interplay</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/fallout1-ce/</code></td></tr><tr><th>File types</th><td><code>.f1ce</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Fallout Community Edition</td></tr></table>
</aside>

## About

Fallout Community Edition is a reimplementation of the 1997 role-playing game's engine, with higher resolutions and fixes. It needs the original game files. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Fallout Community Edition as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/fallout1-ce/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Fallout Community Edition](https://github.com/alexbatalov/fallout1-ce)** | Fully working reimplementation of the original Fallout engine, with higher resolutions.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.f1ce**: Launcher file for Fallout: an empty file in the game's folder.


## Adding the game

Copy the installed game from your own copy (Steam or GOG) into a folder inside `/userdata/roms/fallout1-ce/`, for example `/userdata/roms/fallout1-ce/Fallout/`. The folder needs `MASTER.DAT`, `CRITTER.DAT` and the `DATA` folder. Then add an empty file ending in `.f1ce` to it, such as `Fallout.f1ce`.

HippOS writes `fallout.cfg` and `f1_res.ini` into the game folder, so saves stay with the game. The game runs at your screen's resolution; difficulty and subtitles are in **Advanced Game Options**.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Interplay</p>
