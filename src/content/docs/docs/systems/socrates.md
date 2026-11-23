---
title: "Socrates"
description: "ROM folder, file types, emulators and BIOS files for Socrates on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/socrates.webp)"><img src="/docs/art/logos/socrates.svg" alt="Socrates"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>VTech</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/socrates/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1988</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Socrates is a console by VTech. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/socrates/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `socrates.zip` |
| `socrates.zip (containing `27-00817-000-000.u1`)`<br><small>MD5 `0efac0c2cc168c0d495e1c4e04ea9f5a`</small> |
| `socrates.zip (containing `speech_eng_internal.bin`)`<br><small>MD5 `99af124aa300ecd44f5dc9d5a2599778`</small> |
| `socrates.zip (containing `speech_eng_vsm1.bin`)`<br><small>MD5 `7046c2b27f51c9a5d33b4d6103f29acf`</small> |
| `socrates.zip (containing `speech_eng_vsm2.bin`)`<br><small>MD5 `6878302c362321eeee7e40d285cf7d30`</small> |
| `socrates.zip (containing `speech_eng_vsm3.bin`)`<br><small>MD5 `31c29c57e3d3e6788ba5817eaaa8b17a`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · VTech</p>
