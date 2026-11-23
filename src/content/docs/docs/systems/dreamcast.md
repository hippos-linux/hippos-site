---
title: "Dreamcast"
description: "ROM folder, file types, emulators and BIOS files for Dreamcast on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/dreamcast.webp)"><img src="/docs/art/logos/dreamcast.svg" alt="Dreamcast"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/dreamcast/</code></td></tr><tr><th>File types</th><td><code>.cdi</code> <code>.chd</code> <code>.cue</code> <code>.gdi</code> <code>.m3u</code></td></tr><tr><th>Released</th><td>1998</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Flycast</td></tr></table>
</aside>

## About

Sega's last console, released in Japan in November 1998, with a built-in modem and the VMU memory card with its own screen. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Flycast as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/dreamcast/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Flycast](https://github.com/flyinghead/flycast)** | Dreamcast, NAOMI and Atomiswave emulator with upscaling and online play.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `flycast`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Redream](https://redream.io/)** | Dreamcast emulator focused on ease of use.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `dc/dc_boot.bin`<br><small>MD5 `e10c53c2f8b90bab96ead2d368858623`</small> | Dreamcast boot ROM. Flycast runs many games without it, but some need it. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.cdi**: DiscJuggler Dreamcast image.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.gdi**: Dreamcast GD-ROM track list.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.


## Formats

`.chd` is the smallest and works best. `.gdi` and `.cdi` dumps work too.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sega</p>
