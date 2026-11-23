---
title: "Mega-CD / Sega CD"
description: "ROM folder, file types, emulators and BIOS files for Mega-CD / Sega CD on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/megacd.webp)"><img src="/docs/art/logos/megacd.svg" alt="Mega-CD / Sega CD"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/megacd/</code></td></tr><tr><th>File types</th><td><code>.chd</code> <code>.cue</code> <code>.iso</code> <code>.m3u</code></td></tr><tr><th>Released</th><td>1991</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

A CD-ROM add-on for the Mega Drive, released in Japan in 1991 and in North America as the Sega CD in 1992. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/megacd/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `genesis_plus_gx` ★, `picodrive`, `clownmdemu`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.


## Formats

Use `.chd` or `.cue`/`.bin`. Convert on a PC with `chdman createcd -i "Game.cue" -o "Game.chd"`. Multi-disc games work with a `.m3u` playlist, as on the [PlayStation page](/docs/systems/psx/).


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sega</p>
