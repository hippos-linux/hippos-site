---
title: "Oric Atmos"
description: "ROM folder, file types, emulators and BIOS files for Oric Atmos on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/oric.webp)"><img src="/docs/art/logos/oric.svg" alt="Oric Atmos"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Tangerine Computer Systems</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/oricatmos/</code></td></tr><tr><th>File types</th><td><code>.dsk</code> <code>.tap</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1984</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Clock Signal</td></tr></table>
</aside>

## About

The Oric Atmos is a computer by Tangerine Computer Systems. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Clock Signal as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/oricatmos/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `Oric/basic11.rom`<br><small>MD5 `a330779c42ad7d0c4ac6ef9e92788ec6`</small> |
| `Oric/colour.rom`<br><small>MD5 `c888b36bf0fc222c3585c3fabe556d21`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.dsk**: Floppy disk image.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Tangerine Computer Systems</p>
