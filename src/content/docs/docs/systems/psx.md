---
title: "PlayStation"
description: "ROM folder, file types, emulators and BIOS files for PlayStation on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/psx.webp)"><img src="/docs/art/logos/psx.svg" alt="PlayStation"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sony</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/psx/</code></td></tr><tr><th>File types</th><td><code>.cbn</code> <code>.ccd</code> <code>.chd</code> <code>.cue</code> <code>.img</code> <code>.iso</code> <code>.m3u</code> <code>.mdf</code> <code>.pbp</code> <code>.toc</code></td></tr><tr><th>Released</th><td>1994</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Riverhorse</td></tr></table>
</aside>

## About

Sony's first console, released in Japan in December 1994. CD-based, with 3D graphics, and one of the best-selling consoles of its era. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Riverhorse as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/psx/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Riverhorse](https://github.com/thenotoriousfox/riverhorse)** | HippOS's own PlayStation emulator, built from DuckStation, with rollback netplay and a handheld-friendly interface.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `swanstation`, `mednafen_psx_hw`, `pcsx_rearmed`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[DuckStation](https://github.com/duckstation/old-releases)** | PlayStation emulator with upscaling and PGXP geometry correction (the last GPL release).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `psxonpsp660.bin`<br><small>MD5 `c53ca5908936d412331790f4426c6c33`</small> | Taken from a PSP; works for every region |
| `scph101.bin`<br><small>MD5 `6e3735ff4c7dc899ee98981385f6f3d0`</small> | North America (PS one) |
| `scph1001.bin`<br><small>MD5 `dc2b9bf8da62ec93e868cfd29f0d067d`</small> | North America |
| `scph5500.bin`<br><small>MD5 `8dd7d5296a650fac7319bce665a6a53c`</small> | Japan |
| `scph5501.bin`<br><small>MD5 `490f666e1afb15b7362b406ed1cea246`</small> | North America |
| `scph5502.bin`<br><small>MD5 `32736f17079d0b2b7024407c39bd3050`</small> | Europe |
| `scph7001.bin`<br><small>MD5 `1e68c231d0896b7eadcad1d7d8e76129`</small> | North America |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.pbp**: PSP EBOOT format, also used for converted PlayStation discs.


## Multi-disc games

Make a text file ending in `.m3u` that lists each disc, one per line, and keep only the `.m3u` visible in the list. Swap discs in game with **Hotkey** + **L3**.

```
Final Fantasy VII.m3u
Final Fantasy VII (Disc 1).chd
Final Fantasy VII (Disc 2).chd
Final Fantasy VII (Disc 3).chd
```

## Converting to CHD

CHD keeps the whole disc in one compressed file. Convert a `.cue`/`.bin` dump on a PC with MAME's `chdman`:

```
chdman createcd -i "Game.cue" -o "Game.chd"
```

## PAL games with copy protection

Some European games use LibCrypt protection. Put the matching `.sbi` file next to the game with the same name (`Game (Europe).cue` and `Game (Europe).sbi`).


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sony</p>
