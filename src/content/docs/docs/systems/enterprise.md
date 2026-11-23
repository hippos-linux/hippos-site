---
title: "Enterprise"
description: "ROM folder, file types, emulators and BIOS files for Enterprise on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/enterprise.webp)"><img src="/docs/art/logos/enterprise.svg" alt="Enterprise"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Enterprise Computers</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/enterprise/</code></td></tr><tr><th>File types</th><td><code>.128</code> <code>.bas</code> <code>.cas</code> <code>.cdt</code> <code>.com</code> <code>.dsk</code> <code>.dtf</code> <code>.img</code> <code>.tap</code> <code>.trn</code> <code>.tzx</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1985</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Enterprise is a computer by Enterprise Computers. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/enterprise/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `ep128emu_core` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `ep128emu/roms/exos21.rom`<br><small>MD5 `f36f24cbb87745fbd2714e4df881db09`</small> |
| `ep128emu/roms/basic21.rom`<br><small>MD5 `e972fe42b398c9ff1d93ff014786aec6`</small> |
| `ep128emu/roms/exdos13.rom`<br><small>MD5 `ddff70c014d1958dc75378b6c9aab6f8`</small> |
| `ep128emu/roms/epfileio.rom`<br><small>MD5 `a68ebcbc73a4d2178d755b7755bf18fe`</small> |
| `ep128emu/roms/exos20.rom`<br><small>MD5 `5ad3baaad3b5156d6b60b34229a676fb`</small> |
| `ep128emu/roms/basic20.rom`<br><small>MD5 `8e18edce4a7acb2c33cc0ab18f988482`</small> |
| `ep128emu/roms/exos24uk.rom`<br><small>MD5 `55af78f877a21ca45eb2df68a74fcc60`</small> |
| `ep128emu/roms/hun.rom`<br><small>MD5 `22167938f142c222f40992839aa21a06`</small> |
| `ep128emu/roms/epd19hft.rom`<br><small>MD5 `12cfc9c7e48c8a16c2e09edbd926d467`</small> |
| `ep128emu/roms/zt19hfnt.rom`<br><small>MD5 `653daaf7b9b29c2c4e577f489580f247`</small> |
| `ep128emu/roms/brd.rom`<br><small>MD5 `6af0402906944fd134004b85097c8524`</small> |
| `ep128emu/roms/zt19uk.rom`<br><small>MD5 `228540b6be83ae2acd7569c8ff0f91d0`</small> |
| `ep64.zip (containing `9256ds-0038_enter05-23-a.u2`)`<br><small>MD5 `5ad3baaad3b5156d6b60b34229a676fb`</small> |
| `ep128.zip (containing `9256ds-0019_enter08-45-a.u2`)`<br><small>MD5 `f36f24cbb87745fbd2714e4df881db09`</small> |
| `ep64_exdos.zip (containing `exdos13.rom`)`<br><small>MD5 `47258d03aec37bc24df5dbc5d50fc9f8`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.dsk**: Floppy disk image.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Enterprise Computers</p>
