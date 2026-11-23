---
title: "Palm OS"
description: "ROM folder, file types, emulators and BIOS files for Palm OS on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/palm.webp)"><img src="/docs/art/logos/palm.svg" alt="Palm OS"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Palm</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/palm/</code></td></tr><tr><th>File types</th><td><code>.img</code> <code>.pdb</code> <code>.pqa</code> <code>.prc</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1996</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Palm OS is a handheld by Palm. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/palm/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mu` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `palmos41-en-m515.rom` |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Palm</p>
