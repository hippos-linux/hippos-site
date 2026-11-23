---
title: "Xbox 360"
description: "ROM folder, file types, emulators and BIOS files for Xbox 360 on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/xbox360.webp)"><img src="/docs/art/logos/xbox360.svg" alt="Xbox 360"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/xbox360/</code></td></tr><tr><th>File types</th><td><code>.iso</code> <code>.xbox360</code> <code>.xex</code> <code>.zar</code></td></tr><tr><th>Released</th><td>2005</td></tr><tr><th>Runs on</th><td>PC</td></tr><tr><th>Default</th><td>Xenia Edge</td></tr></table>
</aside>

## About

The Xbox 360 is a console by Microsoft. On HippOS it runs on PC, with Xenia Edge as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/xbox360/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Xenia Edge](https://github.com/has207/xenia-edge)** | Xbox 360 emulator fork with a native Linux build.<br><small>**Formats:** all · **BIOS:** none</small> | ★ |  |
| **[Xenia Canary](https://github.com/xenia-canary/xenia-canary)** | Xbox 360 emulator (development branch), run through Wine.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |

## Bios Files

No BIOS, keys or firmware are needed.

:::note
Xbox 360 emulation is demanding: a recent multi-core CPU and a Vulkan GPU are needed for most games.
:::

## Game Formats Explained

- **.iso**: Xbox 360 disc image.
- **.xex**: An extracted game folder. Point HippOS at the main executable, usually `default.xex`.
- **.zar**: Xenia's compressed archive format.
- **.xbox360**: A shortcut file for Xbox Live Arcade games, see below.

## Xbox Live Arcade (XBLA) games

XBLA games are extensionless files, so EmulationStation can't see them on their own. Make a shortcut:

1. Put the XBLA file in `/userdata/roms/xbox360/` and give it a simple name, for example `CastleCrashers`.
2. Make a text file next to it called `CastleCrashers.xbox360`.
3. Put the XBLA file's name (`CastleCrashers`) on the first line and save.

XBLA games run as full versions by default. The per-game option **XBOX LIVE ARCADE** (hold **A** on the game → **Advanced Game Options**) changes that if a game misbehaves.

<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Microsoft</p>
