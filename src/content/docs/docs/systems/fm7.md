---
title: "FM-7"
description: "ROM folder, file types, emulators and BIOS files for FM-7 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/fm7.webp)"><img src="/docs/art/logos/fm7.svg" alt="FM-7"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Fujitsu</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/fm7/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.7z</code> <code>.cqi</code> <code>.cqm</code> <code>.d77</code> <code>.d88</code> <code>.dfi</code> <code>.dsk</code> <code>.hfe</code> <code>.imd</code> <code>.mfi</code> <code>.mfm</code> <code>.t77</code> <code>.td0</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1982</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The FM-7 is a computer by Fujitsu. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/fm7/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `fm7.zip` |
| `fm7.zip (containing `boot_bas.rom`)`<br><small>MD5 `9f9b7d5615ecdbde2cd26e9306ffef13`</small> |
| `fm7.zip (containing `boot_dos_a.rom`)`<br><small>MD5 `18a461ccaf7ef4e8ecad58cecd3a24b3`</small> |
| `fm7.zip (containing `fbasic300.rom`)`<br><small>MD5 `6a5da0404b7ee338df9002cdcabc3068`</small> |
| `fm7.zip (containing `kanji.rom`)`<br><small>MD5 `a330817f8f7ced752a7bcc8dfba8fd2e`</small> |
| `fm7.zip (containing `subsys_c.rom`)`<br><small>MD5 `d19ed5923aaae2ec43dffe7a0daa80cb`</small> |
| `fm77av.zip` |
| `fm77av.zip (containing `fbasic30.rom`)`<br><small>MD5 `71c96a45b78e88a39cb94c1aabd23d8a`</small> |
| `fm77av.zip (containing `initiate.rom`)`<br><small>MD5 `e0f4c0ebee60aee83e863826e59ae1de`</small> |
| `fm77av.zip (containing `subsys_a.rom`)`<br><small>MD5 `ae945a6dfb642b0a5d0529737e8ee5cd`</small> |
| `fm77av.zip (containing `subsys_b.rom`)`<br><small>MD5 `fb83a1a9725c8432acef0c3ce89492e3`</small> |
| `fm77av.zip (containing `subsyscg.rom`)`<br><small>MD5 `7db27dede3e358017d518101850bccfa`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.wav**: Audio recording of a tape.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Fujitsu</p>
