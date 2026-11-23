---
title: "Super Cassette Vision"
description: "ROM folder, file types, emulators and BIOS files for Super Cassette Vision on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/scv.webp)"><img src="/docs/art/logos/scv.svg" alt="Super Cassette Vision"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Epoch</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/scv/</code></td></tr><tr><th>File types</th><td><code>.bin</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1984</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Super Cassette Vision is a console by Epoch. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/scv/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mame` ★, `emuscv`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `upd7801g.s01`<br><small>MD5 `635a978fd40db9a18ee44eff449fc126`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Epoch</p>
