---
title: "Model 3"
description: "ROM folder, file types, emulators and BIOS files for Model 3 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/model3.webp)"><img src="/docs/art/logos/model3.svg" alt="Model 3"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/model3/</code></td></tr><tr><th>File types</th><td><code>.zip</code></td></tr><tr><th>Released</th><td>1996</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Supermodel</td></tr></table>
</aside>

## About

The Model 3 is an arcade system by Sega. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Supermodel as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/model3/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Supermodel](https://github.com/trzy/Supermodel)** | Sega Model 3 arcade emulator.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `supermodel`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a> · Sega</p>
