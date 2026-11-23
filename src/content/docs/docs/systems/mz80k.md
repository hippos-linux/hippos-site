---
title: "Sharp MZ-80K"
description: "ROM folder, file types, emulators and BIOS files for Sharp MZ-80K on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/mz80k.webp)"><img src="/docs/art/logos/mz80k.svg" alt="Sharp MZ-80K"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Sharp</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/mz80k/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.m12</code> <code>.mzf</code> <code>.mzt</code> <code>.wav</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1978</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>MAME</td></tr></table>
</aside>

## About

The Sharp MZ-80K is a computer by Sharp. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with MAME as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/mz80k/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `mz80k.zip` |
| `mz80k.zip (containing `80kcg.rom`)`<br><small>MD5 `5db7707d120c835751899b0d1df5ad39`</small> |
| `mz80k.zip (containing `80kcgf.rom`)`<br><small>MD5 `3380dff179941e96851cfee7156e31de`</small> |
| `mz80kj.zip` |
| `mz80kj.zip (containing `sp1002.rom`)`<br><small>MD5 `e5413f1a0d94726156dcae7d63f8f35f`</small> |
| `mz80kj.zip (containing `mz80kfdif.rom`)`<br><small>MD5 `4138784bdd2e2cbacd6c55eff195b2ac`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Sharp</p>
