---
title: "Camputers Lynx"
description: "ROM folder, file types, emulators and BIOS files for Camputers Lynx on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/camplynx.webp)"><img src="/docs/art/logos/camplynx.svg" alt="Camputers Lynx"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Camputers</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/camplynx/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.ldf</code> <code>.tap</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1983</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Camputers Lynx is a computer by Camputers. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/camplynx/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `lynx48k.zip` |
| `lynx48k.zip (containing `lynx48-1.ic46`)`<br><small>MD5 `b0ad5bf3070aea27b637e1998c81fa8c`</small> |
| `lynx48k.zip (containing `lynx48-2.ic45`)`<br><small>MD5 `b665e10211bbdbfaf2defb32d5580892`</small> |
| `lynx48k.zip (containing `lynx4811.ic46`)`<br><small>MD5 `bc0760d8bf61c9683270266d259cd2ae`</small> |
| `lynx48k.zip (containing `lynx4812.ic45`)`<br><small>MD5 `dde90a794e5324002a9fd7f79cec3172`</small> |
| `lynx96k.zip` |
| `lynx96k.zip (containing `danish96k3.ic44`)`<br><small>MD5 `a0a8f136f69b5891d33993627a185697`</small> |
| `lynx96k.zip (containing `dosrom.rom`)`<br><small>MD5 `fcb706b3ba2ba61f6f7af1c28f420f94`</small> |
| `lynx96k.zip (containing `lynx9644.ic44`)`<br><small>MD5 `815afa653b61cbe70936b01aff700912`</small> |
| `lynx96k.zip (containing `lynx9645.ic45`)`<br><small>MD5 `3ccdb9dfe6018892383fcbb1a9167d76`</small> |
| `lynx96k.zip (containing `lynx9646.ic46`)`<br><small>MD5 `01a9770efdab17f089bbbbe53f5d69fa`</small> |
| `lynx96k.zip (containing `skorprom.ic44`)`<br><small>MD5 `89ba52f683cd79638646874e965476b6`</small> |
| `lynx128k.zip` |
| `lynx128k.zip (containing `dosrom.rom`)`<br><small>MD5 `fcb706b3ba2ba61f6f7af1c28f420f94`</small> |
| `lynx128k.zip (containing `lynx128-1.ic1`)`<br><small>MD5 `5017fe3a2ea47038ae61e2aeb4f43d65`</small> |
| `lynx128k.zip (containing `lynx128-2.ic2`)`<br><small>MD5 `bf69d9538192f65571dbed43dc4a99bb`</small> |
| `lynx128k.zip (containing `lynx128-3.ic3`)`<br><small>MD5 `f9f54913cdedb22bb8f0c549ad121379`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Camputers</p>
