---
title: "Atom"
description: "ROM folder, file types, emulators and BIOS files for Atom on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atom.webp)"><img src="/docs/art/logos/atom.svg" alt="Atom"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Acorn Computers</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/atom/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.40t</code> <code>.7z</code> <code>.atm</code> <code>.bin</code> <code>.cqi</code> <code>.cqm</code> <code>.csw</code> <code>.d77</code> <code>.d88</code> <code>.dfi</code> <code>.dsk</code> <code>.hfe</code> <code>.imd</code> <code>.mfi</code> <code>.mfm</code> <code>.rom</code> <code>.tap</code> <code>.td0</code> <code>.uef</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1980</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Atom is a computer by Acorn Computers. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/atom/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `atom.zip` |
| `atom.zip (containing `abasic.ic20`)`<br><small>MD5 `b7b7f8a608339fa39d44a3bcfa2cc3f0`</small> |
| `atom.zip (containing `afloat.ic21`)`<br><small>MD5 `baa26f458acf5745388177ffc7368124`</small> |
| `atom.zip (containing `dosrom.u15`)`<br><small>MD5 `9627dfb5f8302db8dd5702dbf7c09f72`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.tap**: Tape image.
- **.wav**: Audio recording of a tape.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Acorn Computers</p>
