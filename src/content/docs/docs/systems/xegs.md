---
title: "Atari XE Game System"
description: "ROM folder, file types, emulators and BIOS files for Atari XE Game System on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/xegs.webp)"><img src="/docs/art/logos/xegs.svg" alt="Atari XE Game System"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/xegs/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.atr</code> <code>.bin</code> <code>.car</code> <code>.dsk</code> <code>.rom</code> <code>.xfd</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1987</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Atari XE Game System is a computer by Atari. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/xegs/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `xegs.zip` |
| `xegs.zip (containing `c101687.rom`)`<br><small>MD5 `42cbd989802c17d0ac3731d33270d835`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Atari</p>
