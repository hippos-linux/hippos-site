---
title: "PlayStation 2"
description: "ROM folder, file types, emulators and BIOS files for PlayStation 2 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/ps2.webp)"><img src="/docs/art/logos/ps2.svg" alt="PlayStation 2"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sony</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/ps2/</code></td></tr><tr><th>File types</th><td><code>.bin</code> <code>.chd</code> <code>.cso</code> <code>.dump</code> <code>.gz</code> <code>.img</code> <code>.iso</code> <code>.m3u</code> <code>.mdf</code> <code>.nrg</code></td></tr><tr><th>Released</th><td>2000</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>ARMSX2 / PCSX2</td></tr></table>
</aside>

## About

Sony's second console, released in Japan in March 2000 and the best-selling console of all time. Plays DVD-based games and most original PlayStation games. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with PCSX2 as the default on PC and ARMSX2 on Raspberry Pi and RK3326.

## Getting ROMs

Put your files in `/userdata/roms/ps2/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[ARMSX2](https://github.com/ARMSX2/ARMSX2)** | PlayStation 2 emulator for ARM64, based on PCSX2.<br><small>**Formats:** all except `.m3u` · **BIOS:** see BIOS files below</small> |  | ★ |
| **[PCSX2](https://pcsx2.net/)** | PlayStation 2 emulator with upscaling and widescreen patches.<br><small>**Formats:** all except `.m3u` · **BIOS:** see BIOS files below</small> | ★ |  |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `pcsx2`, `armsx2` (Pi / RK3326).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Play!](https://purei.org/)** | PlayStation 2 emulator that needs no BIOS.<br><small>**Formats:** all except `.m3u` · **BIOS:** none</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `ps2/ps2-0230a-20080220.bin`<br><small>MD5 `21038400dc633070a78ad53090c53017`</small> | A PS2 BIOS dump. Any region's dump in `/userdata/bios/ps2/` works; PCSX2 picks it up by itself. Play! needs none. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cso**: Compressed ISO.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.


## Formats

`.chd` keeps a disc compressed in one file. Convert an `.iso` on a PC with MAME's `chdman`:

```
chdman createdvd -i "Game.iso" -o "Game.chd"
```


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sony</p>
