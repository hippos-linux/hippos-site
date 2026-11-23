---
title: "ADAM"
description: "ROM folder, file types, emulators and BIOS files for ADAM on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/adam.webp)"><img src="/docs/art/logos/adam.svg" alt="ADAM"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Coleco</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/adam/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.7z</code> <code>.bin</code> <code>.col</code> <code>.cqi</code> <code>.cqm</code> <code>.d77</code> <code>.d88</code> <code>.ddp</code> <code>.dfi</code> <code>.dsk</code> <code>.hfe</code> <code>.imd</code> <code>.mfi</code> <code>.mfm</code> <code>.rom</code> <code>.td0</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1983</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The ADAM is a computer by Coleco. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/adam/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `adam.zip` |
| `adam.zip (containing `alf @1 rev 57 e3d5.u8`)`<br><small>MD5 `01bba3bcd46d8a586dd6ec555accc133`</small> |
| `adam.zip (containing `alf @2 rev 57 ae6a.u20`)`<br><small>MD5 `feabe33e8f2dab88da1458b4d27f3faa`</small> |
| `adam.zip (containing `alf @3 rev 57 8534.u21`)`<br><small>MD5 `a720bc872a772ed471fac14e36ec8bcb`</small> |
| `adam.zip (containing `eos 6 rev 57 08dd.u22`)`<br><small>MD5 `cf10b154f2e006a9740d7653cfc47cab`</small> |
| `adam.zip (containing `master rev a 174b.u6`)`<br><small>MD5 `7916bb9635d502366326ec39aea5fc89`</small> |
| `adam.zip (containing `os7.u2`)`<br><small>MD5 `2c66f5911e5b42b8ebe113403548eee7`</small> |
| `adam.zip (containing `wp_r80.rom`)`<br><small>MD5 `4fe4f6800076ea3d897d4285653447bd`</small> |
| `adam_ddp.zip` |
| `adam_ddp.zip (containing `tape rev a 8865.u24`)`<br><small>MD5 `0423e9e9bf5036aa1e9d656b6a1f842c`</small> |
| `adam_fdc.zip` |
| `adam_fdc.zip (containing `1440k micro innovations hd-dd.u10`)`<br><small>MD5 `ae12d0b83832b059cb6cb43029bbfdb3`</small> |
| `adam_fdc.zip (containing `320ta.u10`)`<br><small>MD5 `4c38a7df1e645c8d9f417bf7165c46d0`</small> |
| `adam_fdc.zip (containing `a720dipi 7607 mmsg =c= 1988.u10`)`<br><small>MD5 `afea14c826f3cfbc89b76725a4a41951`</small> |
| `adam_fdc.zip (containing `adam disk u10 ad 31 rev a 09-27-84.u10`)`<br><small>MD5 `976d2a7d85319d9104bc9ec176fbfa9c`</small> |
| `adam_fdc.zip (containing `dbl2-4.u10`)`<br><small>MD5 `29569dc029e95e48907b3c81d636987f`</small> |
| `adam_fdc.zip (containing `doug.u10`)`<br><small>MD5 `a121855c20a638429bbfcf0448349515`</small> |
| `adam_fdc.zip (containing `fastpack 720a,t.u10`)`<br><small>MD5 `e05ababa16e2d5cb92b678cb6e6e2004`</small> |
| `adam_fdc.zip (containing `pmhdfdc.u10`)`<br><small>MD5 `a1a2a353dea4b8769a2da733822abfdc`</small> |
| `adam_kb.zip` |
| `adam_kb.zip (containing `keyboard.u2`)`<br><small>MD5 `d81e0b2bb6b98999541c5f40b489e88f`</small> |
| `adam_prn.zip` |
| `adam_prn.zip (containing `printer.u2`)`<br><small>MD5 `3cdf2fe48ac4224b56f26c03f6c68982`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Coleco</p>
