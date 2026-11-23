---
title: "Java ME"
description: "ROM folder, file types, emulators and BIOS files for Java ME on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/j2me.webp)"><img src="/docs/art/logos/j2me.svg" alt="Java ME"></div>
<table><tr><th>Type</th><td>handheld</td></tr><tr><th>Manufacturer</th><td>Sun Microsystems</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/j2me/</code></td></tr><tr><th>File types</th><td><code>.jad</code> <code>.jam</code> <code>.jar</code> <code>.kjx</code> <code>.sqc</code></td></tr><tr><th>Released</th><td>1999</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Java ME is a handheld by Sun Microsystems. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/j2me/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `squirreljme`, `freej2me_plus` ★.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.
Any one of these files is enough.

| File |
|---|
| `squirreljme.jar` |
| `squirreljme-fast.jar` |
| `squirreljme-0.3.0.jar` |
| `squirreljme-0.3.0-fast.jar` |
| `freej2me_plus-lr.jar` |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::


<p class="categories">Categories: <a href="/docs/systems/#handhelds">Handhelds</a> · Sun Microsystems</p>
