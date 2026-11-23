---
title: "Saturn"
description: "ROM folder, file types, emulators and BIOS files for Saturn on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/saturn.webp)"><img src="/docs/art/logos/saturn.svg" alt="Saturn"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/saturn/</code></td></tr><tr><th>File types</th><td><code>.ccd</code> <code>.chd</code> <code>.cue</code> <code>.iso</code> <code>.m3u</code> <code>.mds</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1994</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch / Ymir</td></tr></table>
</aside>

## About

Sega's 32-bit CD console, released in Japan in November 1994, with two main processors. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Ymir as the default on PC and RetroArch on Raspberry Pi and RK3326.

## Getting ROMs

Put your files in `/userdata/roms/saturn/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `mednafen_saturn`, `kronos`, `yabasanshiro` ★, `ymir` (PC).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ★ |
| **[Ymir](https://github.com/StrikerX3/Ymir)** | Sega Saturn emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `sega_101.bin`<br><small>MD5 `85ec9ca47d8f6807718151cbcca8b964`</small> | Japanese Saturn BIOS |
| `mpr-17933.bin`<br><small>MD5 `3240872c70984b6cbfda1586cab68dbe`</small> | North American and European Saturn BIOS |
| `mpr-18811-mx.ic1`<br><small>MD5 `255113ba943c92a54facd25a10fd780c`</small> | The King of Fighters '95 cartridge ROM, needed by that game only |
| `mpr-19367-mx.ic1`<br><small>MD5 `1cd19988d1d72a3e7caa0b73234c96b4`</small> | Ultraman cartridge ROM, needed by that game only |
| `saturn_bios.bin`<br><small>MD5 `af5828fdff51384f99b3c4926be27762`</small> | A Saturn BIOS under the name some emulators look for |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## Formats

Use `.chd` or `.cue`/`.bin`. Multi-disc games work with a `.m3u` playlist, as on the [PlayStation page](/docs/systems/psx/).


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sega</p>
