---
title: "Jazz Jackrabbit 2"
description: "ROM folder, file types, emulators and BIOS files for Jazz Jackrabbit 2 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/jazz2.webp)"><img src="/docs/art/logos/jazz2.svg" alt="Jazz Jackrabbit 2"></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Epic MegaGames</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/jazz2/</code></td></tr><tr><th>File types</th><td><code>.game</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Jazz² Resurrection</td></tr></table>
</aside>

## About

Jazz² Resurrection is a reimplementation of Jazz Jackrabbit 2 (1998), with widescreen and controller support. It needs the original game files. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Jazz² Resurrection as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/jazz2/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Jazz² Resurrection](https://deat.tk/jazz2/)** | Reimplementation of Jazz Jackrabbit 2, using the game's original files.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |


## Adding the game

Copy the game files from your own copy of Jazz Jackrabbit 2 (GOG sells it) into `/userdata/roms/jazz2/Source/`. Then add an empty file ending in `.game` to `/userdata/roms/jazz2/`, such as `Jazz Jackrabbit 2.game`; that is what appears in your game list. The shareware version works too.

Settings and saves go in `/userdata/saves/jazz2/`.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Epic MegaGames</p>
