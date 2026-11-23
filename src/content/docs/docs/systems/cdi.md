---
title: "CD-i"
description: "ROM folder, file types, emulators and BIOS files for CD-i on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/cdi.webp)"><img src="/docs/art/logos/cdi.svg" alt="CD-i"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Philips</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/cdi/</code></td></tr><tr><th>File types</th><td><code>.cdr</code> <code>.chd</code> <code>.cue</code> <code>.gdi</code> <code>.iso</code> <code>.nrg</code> <code>.toc</code></td></tr><tr><th>Released</th><td>1991</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The CD-i is a console by Philips. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/cdi/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `same_cdi`, `opencdi`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `cdimono1.zip` |
| `cdimono1.zip (containing `cdi200.rom`)`<br><small>MD5 `2969341396aa61e0143dc2351aaa6ef6`</small> |
| `cdimono1.zip (containing `cdi220.rom`)`<br><small>MD5 `ac80a92c988ce07fbd6a8f21ded34cf1`</small> |
| `cdimono1.zip (containing `cdi220b.rom`)`<br><small>MD5 `ac0d468be366779c9df633be98da250a`</small> |
| `cdimono1.zip (containing `zx405037p__cdi_servo_2.1__b43t__llek9215.mc68hc705c8a_withtestrom.7201`)`<br><small>MD5 `3e59b8a9a423d3ecd612a32fe4e2d748`</small> |
| `cdimono1.zip (containing `zx405042p__cdi_slave_2.0__b43t__zzmk9213.mc68hc705c8a_withtestrom.7206`)`<br><small>MD5 `3d20cf7550f1b723158b42a1fd5bac62`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.gdi**: Dreamcast GD-ROM track list.
- **.iso**: Uncompressed disc image.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Philips</p>
