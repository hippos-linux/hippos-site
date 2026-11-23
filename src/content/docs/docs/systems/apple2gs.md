---
title: "Apple IIGS"
description: "ROM folder, file types, emulators and BIOS files for Apple IIGS on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/apple2gs.webp)"><img src="/docs/art/logos/apple2gs.svg" alt="Apple IIGS"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Apple</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/apple2gs/</code></td></tr><tr><th>File types</th><td><code>.2mg</code> <code>.do</code> <code>.dsk</code> <code>.nib</code> <code>.po</code></td></tr><tr><th>Released</th><td>1986</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>GSplus</td></tr></table>
</aside>

## About

The Apple IIGS is a computer by Apple. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with GSplus as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/apple2gs/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[GSplus](https://github.com/applemu/gsplus)** | Apple IIGS emulator.<br><small>**Formats:** all except `.1dd` `.360` `.7z` `.cqm` `.cqui` `.d77` `.d88` `.dc42` `.dfi` `.edd` `.hfe` `.ima` `.imd` `.img` `.ipf` `.mfi` `.mfm` `.rti` `.td0` `.ufi` `.woz` `.zip` · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `apple2gs.zip` |
| `apple2gs.zip (containing `341-0132-d.e12`)`<br><small>MD5 `b956c537e7b6b85ffa5c3493b1490d8a`</small> |
| `apple2gs.zip (containing `341-0728`)`<br><small>MD5 `b9f94f5d1be27dafcb8fe619ca3f4d15`</small> |
| `apple2gs.zip (containing `341-0748`)`<br><small>MD5 `e8e632aa592a61ef373b38af10ed54e1`</small> |
| `apple2gs.zip (containing `341s0632-2.bin`)`<br><small>MD5 `c9e0e059faec0393fc429131a3af4ee9`</small> |
| `apple2gs.zip (containing `apple2gs.chr`)`<br><small>MD5 `68ff96a624237d233e8d4c701f660dd1`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.dsk**: Floppy disk image.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Apple</p>
