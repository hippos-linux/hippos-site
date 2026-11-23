---
title: "Neo Geo CD"
description: "ROM folder, file types, emulators and BIOS files for Neo Geo CD on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/neogeocd.webp)"><img src="/docs/art/logos/neogeocd.svg" alt="Neo Geo CD"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>SNK</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/neogeocd/</code></td></tr><tr><th>File types</th><td><code>.chd</code> <code>.cue</code> <code>.iso</code></td></tr><tr><th>Released</th><td>1994</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Neo Geo CD is a console by SNK. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/neogeocd/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `neocd` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `neocd/neocd_f.rom`<br><small>MD5 `8834880c33164ccbe6476b559f3e37de`</small> |
| `neocd/neocd_sf.rom`<br><small>MD5 `043d76d5f0ef836500700c34faef774d`</small> |
| `neocd/neocd_t.rom`<br><small>MD5 `de3cf45d227ad44645b22aa83b49f450`</small> |
| `neocd/neocd_st.rom`<br><small>MD5 `f6325a33c6d63ea4b9162a3fa8c32727`</small> |
| `neocd/neocd_z.rom`<br><small>MD5 `11526d58d4c524daef7d5d677dc6b004`</small> |
| `neocd/neocd_sz.rom`<br><small>MD5 `971ee8a36fb72da57aed01758f0a37f5`</small> |
| `neocd/front-sp1.bin`<br><small>MD5 `5c2366f25ff92d71788468ca492ebeca`</small> |
| `neocd/top-sp1.bin`<br><small>MD5 `122aee210324c72e8a11116e6ef9c0d0`</small> |
| `neocd/neocd.bin`<br><small>MD5 `f39572af7584cb5b3f70ae8cc848aba2`</small> |
| `neocd/uni-bioscd.rom`<br><small>MD5 `08ca8b2dba6662e8024f9e789711c6fc`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · SNK</p>
