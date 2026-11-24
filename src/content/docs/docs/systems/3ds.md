---
title: "3DS"
description: "ROM folder, file types, emulators and BIOS files for 3DS on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/3ds.webp)"><img src="/docs/art/logos/3ds.svg" alt="3DS"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/3ds/</code></td></tr><tr><th>File types</th><td><code>.3ds</code> <code>.app</code> <code>.axf</code> <code>.cci</code> <code>.cia</code> <code>.cxi</code> <code>.elf</code> <code>.squashfs</code> <code>.zcci</code> <code>.zcia</code> <code>.zcxi</code></td></tr><tr><th>Released</th><td>2011</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Azahar</td></tr></table>
</aside>

## About

Nintendo's 3D handheld, released in Japan in February 2011, with a glasses-free 3D top screen. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Azahar as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/3ds/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Azahar](https://azahar-emu.org/)** | Nintendo 3DS emulator, the continuation of Citra and Lime3DS.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `azahar`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |

## Game Formats Explained

- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.


## Games

Games must be decrypted dumps (`.3ds`, `.cci`, `.cxi`, `.cia`). The `.zcci`, `.zcia` and `.zcxi` files are compressed versions of the same. **Hotkey** + **R2** changes the screen layout.

## Netplay

Azahar's local wireless games work online through the [netplay lobby](/docs/netplay/). Host a room or join one there, then use the game's own local multiplayer menu.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Nintendo</p>
