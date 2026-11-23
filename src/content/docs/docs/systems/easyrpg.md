---
title: "EasyRPG"
description: "ROM folder, file types, emulators and BIOS files for EasyRPG on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/easyrpg.webp)"><img src="/docs/art/logos/easyrpg.svg" alt="EasyRPG"></div>
<table><tr><th>Type</th><td>port</td></tr><tr><th>Manufacturer</th><td>EasyRPG Team</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/easyrpg/</code></td></tr><tr><th>File types</th><td><code>.easyrpg</code> <code>.squashfs</code> <code>.zip</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>EasyRPG Player</td></tr></table>
</aside>

## About

On HippOS, EasyRPG runs on PC, Raspberry Pi and RK3326 handhelds, with EasyRPG Player as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/easyrpg/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[EasyRPG Player](https://easyrpg.org/)** | Open-source engine for RPG Maker 2000 and 2003 games.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `easyrpg`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#ports">Ports</a> · EasyRPG Team</p>
