---
title: "PlayStation 3"
description: "ROM folder, file types, emulators and BIOS files for PlayStation 3 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/ps3.webp)"><img src="/docs/art/logos/ps3.svg" alt="PlayStation 3"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Sony</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/ps3/</code></td></tr><tr><th>File types</th><td><code>.ink</code> <code>.iso</code> <code>.ps3</code> <code>.psn</code> <code>.squashfs</code></td></tr><tr><th>Released</th><td>2006</td></tr><tr><th>Runs on</th><td>PC</td></tr><tr><th>Default</th><td>RPCS3</td></tr></table>
</aside>

## About

Sony's third console, released in November 2006, with the Cell processor and Blu-ray games. On HippOS it runs on PC, with RPCS3 as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/ps3/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RPCS3](https://rpcs3.net/)** | PlayStation 3 emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ |  |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | What it is |
|---|---|
| `PS3UPDAT.PUP`<br><small>MD5 `05fe32f5dc8c78acbcd84d36ee7fdc5b`</small> | The PS3 system firmware from Sony's site. Put it in `/userdata/bios/ps3/`; HippOS installs it into RPCS3 the first time you start a game. |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.iso**: Uncompressed disc image.
- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.


## Games

Use game folders (the folder with `PS3_GAME` inside, renamed to end in `.ps3`) or `.iso` dumps. RPCS3 needs a fast CPU; many games also need a recent GPU with Vulkan.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Sony</p>
