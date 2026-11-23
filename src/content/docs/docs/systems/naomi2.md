---
title: "Naomi 2"
description: "ROM folder, file types, emulators and BIOS files for Naomi 2 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/naomi2.webp)"><img src="/docs/art/logos/naomi2.svg" alt="Naomi 2"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/naomi2/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.zip</code></td></tr><tr><th>Released</th><td>2000</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Flycast</td></tr></table>
</aside>

## About

The Naomi 2 is an arcade system by Sega. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Flycast as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/naomi2/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Flycast](https://github.com/flyinghead/flycast)** | Dreamcast, NAOMI and Atomiswave emulator with upscaling and online play.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `flycast`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `dc/naomi2.zip` |
| `dc/naomi2.zip (containing `315-6146.bin`)`<br><small>MD5 `728bfe038ce280872057e365ebfc0fee`</small> |
| `dc/naomi2.zip (containing `315-6215.bin`)`<br><small>MD5 `baf83367044924067e09856ba164aa6f`</small> |
| `dc/naomi2.zip (containing `epr-23605.ic27`)`<br><small>MD5 `6f8ad6e3ab04c8ae1cbcaa652b91cf4e`</small> |
| `dc/naomi2.zip (containing `epr-23605a.ic27`)`<br><small>MD5 `f3f39513484df216d9979f6ae7577942`</small> |
| `dc/naomi2.zip (containing `epr-23605b.ic27`)`<br><small>MD5 `ab046e62c51d67fb89eade2b8d5f6a8d`</small> |
| `dc/naomi2.zip (containing `epr-23605c.ic27`)`<br><small>MD5 `096a5217ff6e6c6cafe65a03336760ab`</small> |
| `dc/naomi2.zip (containing `epr-23605c_multi.ic27`)`<br><small>MD5 `659d579ba9aef5b025d87323044e83f4`</small> |
| `dc/naomi2.zip (containing `epr-23607.ic27`)`<br><small>MD5 `cbe0984d03d73869c23da5a3dd2ce207`</small> |
| `dc/naomi2.zip (containing `epr-23607b.ic27`)`<br><small>MD5 `b624ec7b3b90fdf3be103cdfb1679d1d`</small> |
| `dc/naomi2.zip (containing `epr-23607c.ic27`)`<br><small>MD5 `a9d82db14b823a5a57885bea1a998eb7`</small> |
| `dc/naomi2.zip (containing `epr-23608.ic27`)`<br><small>MD5 `3b1315be24dc8d17f4fa18f3bfc5fe5c`</small> |
| `dc/naomi2.zip (containing `epr-23608a.ic27`)`<br><small>MD5 `0143cf852cb2a8a41f217bc688f62105`</small> |
| `dc/naomi2.zip (containing `epr-23608b.ic27`)`<br><small>MD5 `8b88c1f5a06e9b560e887c3b9f879237`</small> |
| `dc/naomi2.zip (containing `epr-23608c.ic27`)`<br><small>MD5 `b49702e4fadb3b5f9143a3d20afd04b5`</small> |
| `dc/naomi2.zip (containing `epr-23609b.ic27`)`<br><small>MD5 `ecadb008179ca1e6f4fe3fa091ab5df2`</small> |
| `dc/naomi2.zip (containing `main_eeprom.bin`)`<br><small>MD5 `edeed38a9795e062a9af28c3eba22040`</small> |
| `dc/naomi2.zip (containing `sp5001.bin`)`<br><small>MD5 `14e6bffff0d4dff6a5a547e7c43680ff`</small> |
| `dc/naomi2.zip (containing `sp5001-a.bin`)`<br><small>MD5 `689d2228b00fb59781f82af6e8ecdb78`</small> |
| `dc/naomi2.zip (containing `sp5001-b.bin`)`<br><small>MD5 `8373a11106c1c2fc21ac839f75ea488f`</small> |
| `dc/naomi2.zip (containing `sp5002-a.bin`)`<br><small>MD5 `7eecfb8e8f82b47ffab92a0c5528100e`</small> |
| `dc/naomi2.zip (containing `x76f100_eeprom.bin`)`<br><small>MD5 `960ece0dc22a7c5ff81c812a2993e7cc`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a> · Sega</p>
