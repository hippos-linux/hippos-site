---
title: "Wii"
description: "ROM folder, file types, emulators and BIOS files for Wii on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/wii.webp)"><img src="/docs/art/logos/wii.svg" alt="Wii"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/wii/</code></td></tr><tr><th>File types</th><td><code>.ciso</code> <code>.dol</code> <code>.elf</code> <code>.gcm</code> <code>.gcz</code> <code>.iso</code> <code>.json</code> <code>.m3u</code> <code>.rvz</code> <code>.wad</code> <code>.wbfs</code></td></tr><tr><th>Released</th><td>2006</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Dolphin</td></tr></table>
</aside>

## About

The Wii is a console by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Dolphin as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/wii/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Dolphin](https://dolphin-emu.org/)** | GameCube and Wii emulator with HD upscaling, netplay, and support for real Wii Remotes and GameCube adapters.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `dolphin`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Bios & System Files

Dolphin features a fully integrated High-Level Emulation (HLE) operating system, meaning **no external BIOS or firmware files are required to run Wii games.** 

If you wish to use the official Wii System Menu dashboard or access specific system channels, you can perform a "Wii System Update" directly through Dolphin's advanced user interface to download the firmware safely from Nintendo's official servers.

## Game Formats Explained

Wii games can take up a massive amount of space (up to 4.37 GB or 8.54 GB for dual-layer discs like *Super Smash Bros. Brawl*). Choosing the right format is critical for saving local storage space:

- **.rvz (Highly Recommended):** The modern compression standard created by the Dolphin team. It securely strips out empty garbage disc padding while keeping the original data 100% loss-less. This gives you the smallest possible file sizes with maximum loading performance.
- **.wbfs:** The older standard file layout from the original Wii softmodding era. It strips out disc padding data but is a lossy conversion method. It remains natively supported by Dolphin for backward compatibility with older game collections.
- **.iso:** Raw, uncompressed DVD disc images. These files will always occupy the maximum physical limit of the disc layout, even if the game data itself is only a few hundred megabytes.

## Real Wii Remote Configuration

To play with an authentic Nintendo Wii Remote (Wiimote), HippOS utilizes Dolphin's **Real Wii Remote** passthrough mode via your system's built-in Bluetooth adapter.

1. Make sure you're not using the Wii Remote to navigate menus in HippOS.
2. Launch a Wii game, then press the **Sync** button on the back of your physical Wii Remote (or press the **1 + 2** buttons simultaneously).
3. The remote will vibrate and its player LED indicator will light up solid once connected successfully. 

:::note
For games requiring precise motion tracking (*such as Wii Sports Resort*), a **Wii MotionPlus** adapter or an integrated Wii Remote Plus controller is strictly required.
:::

<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
