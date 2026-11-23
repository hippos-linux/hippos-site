---
title: "Sega Chihiro"
description: "ROM folder, file types, emulators and BIOS files for Sega Chihiro on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/chihiro.webp)"><img src="/docs/art/logos/chihiro.svg" alt="Sega Chihiro"></div>
<table><tr><th>Type</th><td>arcade system</td></tr><tr><th>Manufacturer</th><td>Sega & Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/chihiro/</code></td></tr><tr><th>File types</th><td><code>.bin</code></td></tr><tr><th>Released</th><td>2002</td></tr><tr><th>Runs on</th><td>PC</td></tr><tr><th>Default</th><td>xemu (Chihiro)</td></tr></table>
</aside>

## About

The Sega Chihiro is an arcade system by Sega & Microsoft. On HippOS it runs on PC, with xemu (Chihiro) as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/chihiro/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[xemu (Chihiro)](https://github.com/Tovarichtch/xemu)** | xemu fork for Sega Chihiro arcade games.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ |  |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `mcpx_1.0.bin`<br><small>MD5 `d49c52a4102f6df7bcf8d0617ac475ed`</small> |
| `cerbios.bin`<br><small>MD5 `f23d7e00ae8fbf88908ed1f9165f35eb`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::


<p class="categories">Categories: <a href="/docs/systems/#arcade">Arcade</a> · Sega & Microsoft</p>
