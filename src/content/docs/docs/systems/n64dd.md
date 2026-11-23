---
title: "Nintendo 64 Disk Drive"
description: "ROM folder, file types, emulators and BIOS files for Nintendo 64 Disk Drive on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/n64dd.webp)"><img src="/docs/art/logos/n64dd.svg" alt="Nintendo 64 Disk Drive"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/n64dd/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.n64</code> <code>.ndd</code> <code>.z64</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1999</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Mupen64Plus</td></tr></table>
</aside>

## About

A magnetic disk drive add-on for the Nintendo 64, released only in Japan in 1999. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Mupen64Plus as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/n64dd/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Mupen64Plus](https://mupen64plus.org/)** | Standalone Nintendo 64 emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `64DD_IPL.bin`<br><small>MD5 `8d3d9f294b6e174bc7b1d2fd1c727530`</small> | The 64DD's boot ROM. Required. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
