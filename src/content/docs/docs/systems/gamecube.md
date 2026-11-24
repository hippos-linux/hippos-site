---
title: "GameCube"
description: "ROM folder, file types, emulators and BIOS files for GameCube on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/gc.webp)"><img src="/docs/art/logos/gc.svg" alt="GameCube"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/gamecube/</code></td></tr><tr><th>File types</th><td><code>.ciso</code> <code>.dol</code> <code>.elf</code> <code>.gcm</code> <code>.gcz</code> <code>.iso</code> <code>.json</code> <code>.m3u</code> <code>.rvz</code> <code>.wbfs</code></td></tr><tr><th>Released</th><td>2001</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Dolphin</td></tr></table>
</aside>

## About

The GameCube is a console by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Dolphin as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/gamecube/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Dolphin](https://dolphin-emu.org/)** | GameCube and Wii emulator with HD upscaling, netplay, and support for real Wii Remotes and GameCube adapters.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `dolphin`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Bios Files (Optional)

Dolphin features a built-in High-Level Emulation (HLE) system BIOS, meaning **no external BIOS files are required to run games.** 

However, if you want to use the authentic Nintendo console startup menu animation or ensure full region-switching accuracy, you can place original system firmware dumps (`IPL.bin`) into their respective regional folders in `/userdata/saves/dolphin-emu/GC/`:

| Filename | Required For | Description |
|---|---|---|
| `.../EUR/IPL.bin` | European Boot Sequence | Original European console boot menu firmware dump. |
| `.../USA/IPL.bin` | American Boot Sequence | Original North American console boot menu firmware dump. |
| `.../JAP/IPL.bin` | Japanese Boot Sequence | Original Japanese console boot menu firmware dump. |

:::note
To boot through the IPL, turn on **ENABLE BOOT ANIMATION** in the game's **Advanced Game Options** (hold **A** on the game).
:::

## Game Formats Explained

The GameCube library works with a wide variety of file formats, but specific compression options will help maximize your hard drive space:

- **.rvz (Highly Recommended):** The modern standard compression format created by the Dolphin developers. It strips out garbage padding data while preserving 100% loss-less game integrity, resulting in tiny file sizes that load incredibly fast.
- **.iso / .gcm:** Uncompressed raw disc dumps. These files are always exactly 1.45 GB in size, regardless of how short or small the actual game data inside them is.
- **.m3u:** Plain text playlist file used to manage multi-disc titles (like *Resident Evil 4* or *Tales of Symphonia*) under a single menu entry in the front-end interface.

## Netplay

Dolphin plays online from the [netplay lobby](/docs/netplay/). When you host, the game starts once another player has joined. Every player needs the same game file and the same Dolphin version.


<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
