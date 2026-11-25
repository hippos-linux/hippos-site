---
title: "Color Computer"
description: "ROM folder, file types, emulators and BIOS files for Color Computer on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/coco.webp)"><img src="/docs/art/logos/coco.svg" alt="Color Computer"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Tandy Radio Shack</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/coco/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.cas</code> <code>.ccc</code> <code>.dsk</code> <code>.rom</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1980</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>XRoar</td></tr></table>
</aside>

## About

The Color Computer is a computer by Tandy Radio Shack. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with XRoar as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/coco/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

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
| `coco.zip` |
| `coco.zip (containing `bas10.rom`)`<br><small>MD5 `a74f3d95b395dad7cdca19d560eeea74`</small> |
| `coco2.zip` |
| `coco2.zip (containing `bas12.rom`)`<br><small>MD5 `c933316c7d939532a13648850c1c2aa6`</small> |
| `coco2.zip (containing `extbas11.rom`)`<br><small>MD5 `21070aa0496142b886c562bf76d7c113`</small> |
| `coco2b.zip` |
| `coco2b.zip (containing `bas13.rom`)`<br><small>MD5 `c2fc43556eb6b7b25bdf5955bd9df825`</small> |
| `coco2.zip (containing `extbas11.rom`)`<br><small>MD5 `21070aa0496142b886c562bf76d7c113`</small> |
| `coco3.zip` |
| `coco3.zip (containing `coco3.rom`)`<br><small>MD5 `7233c6c429f3ce1c7392f28a933e0b6f`</small> |
| `coco3p.zip` |
| `coco3p.zip (containing `coco3p.rom`)`<br><small>MD5 `4ae57e5a8e7494e5485446fefedb580b`</small> |
| `coco_fdc_v11.zip` |
| `coco_fdc_v11.zip (containing `disk11.rom`)`<br><small>MD5 `8cab28f4b7311b8df63c07bb3b59bfd5`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.wav**: Audio recording of a tape.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Tandy Radio Shack</p>
