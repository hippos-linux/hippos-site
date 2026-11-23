---
title: "Switch"
description: "ROM folder, file types, emulators and BIOS files for Switch on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/switch.webp)"><img src="/docs/art/logos/switch.svg" alt="Switch"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/switch/</code></td></tr><tr><th>File types</th><td><code>.nsp</code> <code>.xci</code></td></tr><tr><th>Released</th><td>2017</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Citron Neo</td></tr></table>
</aside>

## About

Nintendo's hybrid console, released in March 2017, which works both as a home console and a handheld. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Citron Neo as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/switch/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Citron Neo](https://github.com/citron-neo/emulator)** | Nintendo Switch emulator.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[Eden](https://github.com/eden-emulator/mirror)** | Nintendo Switch emulator.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[Ryujinx](https://git.ryujinx.app/projects/Ryubing)** | Nintendo Switch emulator (Ryubing).<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.nsp**: Nintendo Switch eShop package.
- **.xci**: Nintendo Switch cartridge dump.


## Keys and firmware

Switch emulators need keys and firmware dumped from your own console:

- `prod.keys` and `title.keys` in `/userdata/bios/switch/keys/`
- the firmware `.nca` files in `/userdata/bios/switch/firmware/`

HippOS copies them into whichever Switch emulator you use. Games are `.nsp` or `.xci`.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
