---
title: "Electron"
description: "ROM folder, file types, emulators and BIOS files for Electron on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/electron.webp)"><img src="/docs/art/logos/electron.svg" alt="Electron"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Acorn Computers</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/electron/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.7z</code> <code>.adf</code> <code>.adl</code> <code>.adm</code> <code>.ads</code> <code>.bbc</code> <code>.bin</code> <code>.cqi</code> <code>.cqm</code> <code>.csw</code> <code>.d77</code> <code>.d88</code> <code>.dfi</code> <code>.dsd</code> <code>.dsk</code> <code>.hfe</code> <code>.imd</code> <code>.img</code> <code>.mfi</code> <code>.mfm</code> <code>.rom</code> <code>.ssd</code> <code>.td0</code> <code>.uef</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1983</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Clock Signal</td></tr></table>
</aside>

## About

The Electron is a computer by Acorn Computers. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Clock Signal as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/electron/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `electron.zip` |
| `electron.zip (containing `os_basic.ic2`)`<br><small>MD5 `4688a93aa298b9431c1788c9b90378c8`</small> |
| `electron64.zip` |
| `electron64.zip (containing `basic.rom`)`<br><small>MD5 `2cc67be4624df4dc66617742571a8e3d`</small> |
| `electron64.zip (containing `os_300.rom`)`<br><small>MD5 `df01cfe5894276de96bbd1c45b7e834c`</small> |
| `electron_plus1.zip` |
| `electron_plus1.zip (containing `plus1.rom`)`<br><small>MD5 `f3a39227b401a2ce8cdc7e4b7a860aaf`</small> |
| `electron_plus3.zip` |
| `electron_plus3.zip (containing `acp_dfs1770_200.rom`)`<br><small>MD5 `9aa334b4e8f6d7565e6323e0f77110de`</small> |
| `electron_plus3.zip (containing `acp_dfs1770_210.rom`)`<br><small>MD5 `83e15ca501899b0d5b2ce3f5ef696069`</small> |
| `electron_plus3.zip (containing `adfs.rom`)`<br><small>MD5 `b60ee811f4b805638478acd5297b16e0`</small> |
| `electron_plus3.zip (containing `pres_adfs_113.rom`)`<br><small>MD5 `62f5e1d3dae3a68d8fe4406a6f603dc3`</small> |
| `electron_plus3.zip (containing `pres_adfs_115.rom`)`<br><small>MD5 `5c39baa89fe8a40a5167a53cc5ae7791`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.adf**: Amiga floppy disk image.
- **.dsk**: Floppy disk image.
- **.wav**: Audio recording of a tape.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Acorn Computers</p>
