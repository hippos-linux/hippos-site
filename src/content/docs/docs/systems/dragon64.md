---
title: "Dragon 64"
description: "ROM folder, file types, emulators and BIOS files for Dragon 64 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/dragon64.webp)"><img src="/docs/art/logos/dragon64.svg" alt="Dragon 64"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Dragon Data</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/dragon64/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.cas</code> <code>.ccc</code> <code>.dmk</code> <code>.dsk</code> <code>.rom</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1983</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>XRoar</td></tr></table>
</aside>

## About

The Dragon 64 is a computer by Dragon Data. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with XRoar as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/dragon64/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[XRoar](https://www.6809.org.uk/xroar/)** | Dragon and Tandy Color Computer emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `dragon64.zip` |
| `dragon64.zip (containing `d64_1.rom`)`<br><small>MD5 `5f0bee59710e55f5880e74890912ed78`</small> |
| `dragon64.zip (containing `d64_2.rom`)`<br><small>MD5 `fd91edce7be5e7c2d88e46b76956a8aa`</small> |
| `dragon32.zip` |
| `dragon32.zip (containing `d32.rom`)` |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.wav**: Audio recording of a tape.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Dragon Data</p>
