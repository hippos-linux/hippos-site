---
title: "Sonic Retro Engine"
description: "ROM folder, file types, emulators and BIOS files for Sonic Retro Engine on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/sonicretro.webp)"><img src="/docs/art/logos/sonicretro.svg" alt="Sonic Retro Engine"></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/sonicretro/</code></td></tr><tr><th>File types</th><td><code>.scd</code> <code>.son</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Sonic 1/2 (Retro Engine)</td></tr></table>
</aside>

## About

Decompilations of the Retro Engine used by the 2011 and 2013 remasters of Sonic CD, Sonic the Hedgehog and Sonic the Hedgehog 2. They need each game's own data file. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Sonic 1/2 (Retro Engine) as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/sonicretro/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Sonic 1/2 (Retro Engine)](https://github.com/RSDKModding/RSDKv4-Decompilation)** | Decompilation of the Retro Engine used by the 2013 remasters of Sonic 1 and Sonic 2.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[Sonic CD (Retro Engine)](https://github.com/RSDKModding/RSDKv3-Decompilation)** | Decompilation of the Retro Engine used by the 2011 remaster of Sonic CD.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.scd**: Launcher file for Sonic CD: an empty file next to the game's Data.rsdk.
- **.son**: Launcher file for Sonic 1 or Sonic 2: an empty file next to the game's Data.rsdk.


## Adding the games

Each game needs its own folder inside `/userdata/roms/sonicretro/` with that game's `Data.rsdk`, taken from your own copy of the remaster:

- **Sonic 1** and **Sonic 2**, from the 2013 mobile releases: add an empty file ending in `.son` to the folder, such as `Sonic 2.son`.
- **Sonic CD**, from the 2011 Steam or mobile release: add an empty file ending in `.scd` to the folder, such as `Sonic CD.scd`.

HippOS writes `settings.ini` into each game folder.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a> · Sega</p>
