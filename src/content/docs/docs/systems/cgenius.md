---
title: "Commander Genius"
description: "ROM folder, file types, emulators and BIOS files for Commander Genius on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/cgenius.webp)"><img src="/docs/art/logos/cgenius.svg" alt="Commander Genius"></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>The Commander Genius Team</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/cgenius/</code></td></tr><tr><th>File types</th><td><code>.cgenius</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Commander Genius</td></tr></table>
</aside>

## About

Commander Genius is a modern engine for id Software's Commander Keen games, episodes 1 to 6, with widescreen, smoothing filters and controller support. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Commander Genius as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/cgenius/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Commander Genius](https://gitlab.com/Dringgstein/Commander-Genius)** | Modern engine for the Commander Keen games, with widescreen, filters and controller support.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.cgenius**: Launcher file for a Commander Keen episode: an empty file in the episode's folder.


## Adding the games

Commander Genius plays the original Keen data files, so copy them from your own copy of the games (Steam and GOG sell them). Put each episode in its own folder inside `/userdata/roms/cgenius/`, for example `/userdata/roms/cgenius/keen4/`, and add an empty file ending in `.cgenius` to that folder, such as `Keen 4.cgenius`. That file is what appears in your game list.

Saves and settings go in `/userdata/saves/cgenius/`. **Advanced Game Options** has the render size, aspect ratio and filter.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · The Commander Genius Team</p>
