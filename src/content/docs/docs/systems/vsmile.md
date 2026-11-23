---
title: "V.Smile"
description: "ROM folder, file types, emulators and BIOS files for V.Smile on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/vsmile.webp)"><img src="/docs/art/logos/vsmile.svg" alt="V.Smile"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>VTech</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/vsmile/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.u1</code> <code>.u3</code> <code>.zip</code></td></tr><tr><th>Released</th><td>2005</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The V.Smile is a console by VTech. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/vsmile/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `vsmile.zip` |
| `vsmile.zip (containing `vsmile_v100.bin`)`<br><small>MD5 `851ff77a89ec3f4f2793eb4aede30e5f`</small> |
| `vsmile.zip (containing `vsmile_v102.bin`)`<br><small>MD5 `f41fcc19ebe1e90fa359cd0df6293fab`</small> |
| `vsmile.zip (containing `vsmile_v103.bin`)`<br><small>MD5 `11e59253c578c8f16ea2375ec398e4e9`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · VTech</p>
