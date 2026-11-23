---
title: "Casio Loopy"
description: "ROM folder, file types, emulators and BIOS files for Casio Loopy on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/loopy.webp)"><img src="/docs/art/logos/loopy.svg" alt="Casio Loopy"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Casio</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/loopy/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.ic1</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1995</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Casio Loopy is a console by Casio. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/loopy/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `casloopy.zip`<br><small>MD5 `0e1d8dc0110ecf8201c0cef11ef4a858`</small> |
| `casloopy.zip (containing `hd6437021.lsi302`)`<br><small>MD5 `d527e3ed1bf9bd0661154c202a65c5bd`</small> |
| `casloopy.zip (containing `hn62434fa.lsi352`)`<br><small>MD5 `c0f1c899c9ca098663d046d60779711d`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Casio</p>
