---
title: "Singe"
description: "ROM folder, file types, emulators and BIOS files for Singe on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/singe.webp)"><img src="/docs/art/logos/singe.svg" alt="Singe"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/singe/</code></td></tr><tr><th>File types</th><td><code>.daphne</code> <code>.squashfs</code></td></tr><tr><th>Released</th><td>1990</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Hypseus Singe</td></tr></table>
</aside>

## About

The Singe is an arcade system. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Hypseus Singe as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/singe/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Hypseus Singe](https://github.com/DirtBagXon/hypseus-singe)** | Laserdisc arcade emulator (Dragon's Lair, Space Ace, Singe games).<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a></p>
