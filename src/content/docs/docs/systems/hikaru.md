---
title: "Hikaru"
description: "ROM folder, file types, emulators and BIOS files for Hikaru on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/hikaru.webp)"><img src="/docs/art/logos/hikaru.svg" alt="Hikaru"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>Manufacturer</th><td>Sega</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/hikaru/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1999</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Hikaru is an arcade system by Sega. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/hikaru/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `odin` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[Demul](http://demul.emulation64.com/)** | Windows emulator for Sega Dreamcast, NAOMI, Atomiswave, Hikaru and Gaelco hardware, run through Wine.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ |  |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `hikaru.zip`<br><small>MD5 `040f9b37a1f802d450379aaec106ec69`</small> |
| `mie.zip`<br><small>MD5 `e95415b161121bef35ade12367138c63`</small> |
| `jvs13551.zip`<br><small>MD5 `ee643e8c7369fe7feca610d4daa4a57c`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a> · Sega</p>
