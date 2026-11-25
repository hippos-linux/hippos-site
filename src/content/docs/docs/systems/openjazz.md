---
title: "Jazz Jackrabbit"
description: "ROM folder, file types, emulators and BIOS files for Jazz Jackrabbit on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/openjazz.webp)"><img src="/docs/art/logos/openjazz.svg" alt="Jazz Jackrabbit"></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Epic MegaGames</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/openjazz/</code></td></tr><tr><th>File types</th><td><code>.game</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>OpenJazz</td></tr></table>
</aside>

## About

OpenJazz is an open-source engine for the original Jazz Jackrabbit (1994). It needs the original game files. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with OpenJazz as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/openjazz/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[OpenJazz](https://github.com/AlisterT/openjazz)** | Open-source engine for the original Jazz Jackrabbit.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |


## Adding the game

Copy the game files from your own copy of Jazz Jackrabbit (GOG sells it) into a folder inside `/userdata/roms/openjazz/`, for example `/userdata/roms/openjazz/Jazz Jackrabbit/`. Then add an empty file ending in `.game` to that folder, such as `Jazz Jackrabbit.game`. The shareware version works too.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Epic MegaGames</p>
