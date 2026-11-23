---
title: "Triforce"
description: "ROM folder, file types, emulators and BIOS files for Triforce on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/triforce.webp)"><img src="/docs/art/logos/triforce.svg" alt="Triforce"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>Manufacturer</th><td>Namco, Sega, Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/triforce/</code></td></tr><tr><th>File types</th><td><code>.ciso</code> <code>.dol</code> <code>.elf</code> <code>.gcm</code> <code>.gcz</code> <code>.iso</code> <code>.m3u</code> <code>.wbfs</code></td></tr><tr><th>Released</th><td>2002</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Dolphin</td></tr></table>
</aside>

## About

The Triforce is an arcade system by Namco, Sega, Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Dolphin as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/triforce/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Dolphin](https://dolphin-emu.org/)** | GameCube and Wii emulator with HD upscaling, netplay, and support for real Wii Remotes and GameCube adapters.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `saves/dolphin-emu/Triforce/segaboot.gcm`<br><small>MD5 `2ef01c0e93f7ee3a0a4b139aa14728b9`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a> · Namco, Sega, Nintendo</p>
