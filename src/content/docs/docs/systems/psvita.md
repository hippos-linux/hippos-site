---
title: "PlayStation Vita"
description: "ROM folder, file types, emulators and BIOS files for PlayStation Vita on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/psvita.webp)"><img src="/docs/art/logos/psvita.svg" alt="PlayStation Vita"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Sony</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/psvita/</code></td></tr><tr><th>File types</th><td><code>.psvita</code> <code>.vpk</code> <code>.zip</code></td></tr><tr><th>Released</th><td>2011</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Vita3K</td></tr></table>
</aside>

## About

Sony's second handheld, released in Japan in December 2011, with an OLED touch screen and a rear touch pad. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Vita3K as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/psvita/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Vita3K](https://vita3k.org/)** | PlayStation Vita emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `psvita/PSP2UPDAT.PUP`<br><small>MD5 `59dcf059d3328fb67be7e51f8aa33418`</small> | The Vita font package that goes with the firmware. Installed the same way. |
| `psvita/PSVUPDAT.PUP`<br><small>MD5 `f2c7b12fe85496ec88a0391b514d6e3b`</small> | The Vita system firmware from Sony's site. HippOS installs it into Vita3K the first time you start a game. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Sony</p>
