---
title: "TRS-80"
description: "ROM folder, file types, emulators and BIOS files for TRS-80 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/trs80.webp)"><img src="/docs/art/logos/trs80.svg" alt="TRS-80"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Tandy Radio Shack</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/trs80/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bas</code> <code>.cas</code> <code>.cmd</code> <code>.dmk</code> <code>.dsk</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1977</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The TRS-80 is a computer by Tandy Radio Shack. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/trs80/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `trs80.zip` |
| `trs80.zip (containing `level1.rom`)` |
| `trs80m3.zip` |
| `trs80m4.zip` |
| `trs80m4.zip (containing `8043216.u11`)` |
| `trs80m4p.zip` |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Tandy Radio Shack</p>
