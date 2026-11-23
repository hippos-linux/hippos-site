---
title: "Videoton TVC"
description: "ROM folder, file types, emulators and BIOS files for Videoton TVC on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/tvc.webp)"><img src="/docs/art/logos/tvc.svg" alt="Videoton TVC"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Videoton</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/tvc/</code></td></tr><tr><th>File types</th><td><code>.cas</code> <code>.dsk</code> <code>.img</code> <code>.tap</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1986</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Videoton TVC is a computer by Videoton. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/tvc/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | Needed for |
|---|---|
| `ep128emu/roms/tvc22_sys.rom`<br><small>MD5 `8c54285f541930cde766069942bad0f2`</small> | Any |
| `ep128emu/roms/tvc22_ext.rom`<br><small>MD5 `5ce95a26ceed5bec73995d83568da9cf`</small> | Any |
| `ep128emu/roms/tvcfileio.rom`<br><small>MD5 `a2cf86ba8e7fc58b242137fe59036832`</small> | Any |
| `ep128emu/roms/tvc_dos12d.rom`<br><small>MD5 `88dc7876d584f90e4106f91444ab23b7`</small> | Any |
| `tvc64.zip` | mame |
| `tvc64.zip (containing `tvc12_d4.64k`)`<br><small>MD5 `bed323c85b629e7ccdd318ef8a21904b`</small> | mame |
| `tvc64.zip (containing `tvc12_d3.64k`)`<br><small>MD5 `be6a66ccdd3bf87992678138f3971090`</small> | mame |
| `tvc64.zip (containing `tvc12_d7.64k`)`<br><small>MD5 `c451c518138f855257ac05673532e162`</small> | mame |
| `tvc64.zip (containing `tvc22_d6.64k`)`<br><small>MD5 `d3ea34ee3ed3d0c7ae3001bd0d9a4ae9`</small> | mame |
| `tvc64.zip (containing `tvc22_d4.64k`)`<br><small>MD5 `198182b80de1f1c54904870ae0639471`</small> | mame |
| `tvc64.zip (containing `tvc22_d7.64k`)`<br><small>MD5 `5ce95a26ceed5bec73995d83568da9cf`</small> | mame |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.dsk**: Floppy disk image.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Videoton</p>
