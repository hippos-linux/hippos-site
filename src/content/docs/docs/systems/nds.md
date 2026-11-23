---
title: "Nintendo DS"
description: "ROM folder, file types, emulators and BIOS files for Nintendo DS on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/nds.webp)"><img src="/docs/art/logos/nds.svg" alt="Nintendo DS"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/nds/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.bin</code> <code>.nds</code> <code>.zip</code></td></tr><tr><th>Released</th><td>2004</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>DraStic / melonDS</td></tr></table>
</aside>

## About

Nintendo's dual-screen handheld, released in November 2004, with a touch screen on the lower display. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with melonDS as the default on PC and DraStic on Raspberry Pi and RK3326.

## Getting ROMs

Put your files in `/userdata/roms/nds/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[DraStic](https://drastic-ds.com/)** | Fast Nintendo DS emulator for ARM devices.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> |  | ★ |
| **[melonDS](https://melonds.kuribo64.net/)** | Accurate Nintendo DS emulator with local wireless and DSi support.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ✔ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `desmume`, `melondsds`, `skyemu`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `firmware.bin` | DS firmware. Optional; needed to boot to the DS menu. |
| `bios7.bin`<br><small>MD5 `df692a80a5b1bc90728bc3dfc76cd948`</small> | ARM7 BIOS. Optional for melonDS and DraStic; needed for a few games. |
| `bios9.bin`<br><small>MD5 `a392174eb3e572fed6447e956bde4b25`</small> | ARM9 BIOS. Optional, as above. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## Screens

On a single display both screens are shown together; the layout can be changed per game in **Advanced Game Options**, and **Hotkey** + **L2** swaps them.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Nintendo</p>
