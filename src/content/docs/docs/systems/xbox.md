---
title: "Xbox"
description: "ROM folder, file types, emulators and BIOS files for Xbox on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/xbox.webp)"><img src="/docs/art/logos/xbox.svg" alt="Xbox"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/xbox/</code></td></tr><tr><th>File types</th><td><code>.chd</code> <code>.iso</code> <code>.squashfs</code></td></tr><tr><th>Released</th><td>2001</td></tr><tr><th>Runs on</th><td>PC</td></tr><tr><th>Default</th><td>xbased</td></tr></table>
</aside>

## About

The Xbox is a console by Microsoft. On HippOS it runs on PC, with xbased as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/xbox/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[xbased](https://github.com/crazyriddler/xbased)** | Original Xbox emulator built from xemu, with squashfs game support.<br><small>**Formats:** all except `.squashfs` · **BIOS:** none</small> | ★ |  |
| **[xemu](https://xemu.app/)** | Original Xbox emulator.<br><small>**Formats:** all except `.chd` · **BIOS:** see BIOS files below</small> | ✔ |  |

## Bios Files

**xbased** (the default) needs no BIOS, MCPX ROM or hard-disk image.

**xemu** needs two files in `/userdata/bios/`:

| File | What it is |
|---|---|
| `mcpx_1.0.bin`<br><small>MD5 `d49c52a4102f6df7bcf8d0617ac475ed`</small> | MCPX boot ROM (512 bytes) |
| `Complex_4627.bin`<br><small>MD5 `39cee882148a87f93cb440b99dde3ceb`</small> | Flash BIOS |

HippOS sets up xemu's hard-disk image (`/userdata/saves/xbox/xbox_hdd.qcow2`) itself.

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.iso**: Xbox disc image (XISO).
- **.squashfs**: A game folder packed into a compressed read-only image. HippOS mounts it when the game starts. Supported by xbased.
- **.chd**: Compressed disc image.

<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Microsoft</p>
