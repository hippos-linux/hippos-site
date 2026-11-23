---
title: "Elektronika BK"
description: "ROM folder, file types, emulators and BIOS files for Elektronika BK on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/bk.webp)"><img src="/docs/art/logos/bk.svg" alt="Elektronika BK"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Elektronika</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/bk/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.bkd</code> <code>.dsk</code> <code>.img</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1985</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Elektronika BK is a computer by Elektronika. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/bk/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `bk`.<br><small>**Formats:** all · **BIOS:** `B11M_BOS.ROM` `B11M_EXT.ROM` `BAS11M_0.ROM` `BAS11M_1.ROM` `DISK_327.ROM` `BASIC10.ROM` `FOCAL10.ROM` `MONIT10.ROM`</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | Needed for |
|---|---|
| `bk/B11M_BOS.ROM`<br><small>MD5 `fe4627d1e3a1535874085050733263e7`</small> | Any |
| `bk/B11M_EXT.ROM`<br><small>MD5 `dc52f365d56fa1951f5d35b1101b9e3f`</small> | Any |
| `bk/BAS11M_0.ROM`<br><small>MD5 `946f6f23ded03c0e26187f0b3ca75993`</small> | Any |
| `bk/BAS11M_1.ROM`<br><small>MD5 `1e6637f32aa7d1de03510030cac40bcf`</small> | Any |
| `bk/DISK_327.ROM`<br><small>MD5 `5015228eeeb238e65da8edcd1b6dfac7`</small> | Any |
| `bk/BASIC10.ROM`<br><small>MD5 `3fa774326d75410a065659aea80252f0`</small> | Any |
| `bk/FOCAL10.ROM`<br><small>MD5 `5737f972e8638831ab71e9139abae052`</small> | Any |
| `bk/MONIT10.ROM`<br><small>MD5 `95f8c41c6abf7640e35a6a03cecebd01`</small> | Any |
| `bk0010.zip` | mame |
| `bk0010.zip (containing `monit10.rom`)`<br><small>MD5 `95f8c41c6abf7640e35a6a03cecebd01`</small> | mame |
| `bk0010.zip (containing `focal.rom`)`<br><small>MD5 `eb9e1cf1c1b36a2dece89624bfc59323`</small> | mame |
| `bk0010.zip (containing `tests.rom`)`<br><small>MD5 `93d2776ecf9abf49fb45f58ce3182143`</small> | mame |
| `bk0010.zip (containing `basic10-1.rom`)`<br><small>MD5 `4a4530347ee18c547a0563aca73cf43d`</small> | mame |
| `bk0010.zip (containing `basic10-2.rom`)`<br><small>MD5 `86fc2f7797a0333300159aa222c3ad3f`</small> | mame |
| `bk0010.zip (containing `basic10-3.rom`)`<br><small>MD5 `fb8875a62b9b02a66670dcefc270d441`</small> | mame |
| `bk0010.zip (containing `bk11m_328_basic2.rom`)`<br><small>MD5 `c113a36e51f4557594817bc35a4b63b7`</small> | mame |
| `bk0010.zip (containing `bk11m_329_basic3.rom`)`<br><small>MD5 `823d35a8c98f70d2d378a2c7568c3b23`</small> | mame |
| `bk0010.zip (containing `bk11m_327_basic1.rom`)`<br><small>MD5 `1e6637f32aa7d1de03510030cac40bcf`</small> | mame |
| `bk0010.zip (containing `bk11m_325_ext.rom`)`<br><small>MD5 `dc52f365d56fa1951f5d35b1101b9e3f`</small> | mame |
| `bk0010.zip (containing `bk11m_324_bos.rom`)`<br><small>MD5 `fe4627d1e3a1535874085050733263e7`</small> | mame |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.dsk**: Floppy disk image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Elektronika</p>
