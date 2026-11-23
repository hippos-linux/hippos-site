---
title: "Windows 9x"
description: "ROM folder, file types, emulators and BIOS files for Windows 9x on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/windows9x.webp)"><img src="/docs/art/logos/windows9x.svg" alt="Windows 9x"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/win98/</code></td></tr><tr><th>File types</th><td><code>.chd</code> <code>.cue</code> <code>.dosz</code> <code>.img</code> <code>.iso</code> <code>.m3u</code> <code>.m3u8</code> <code>.vhd</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1995</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Windows 9x is a computer by Microsoft. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/win98/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `dosbox_pure` ★.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[DOSBox-X](https://dosbox-x.com/)** | DOSBox fork aimed at complete DOS and Windows 9x-era PC emulation, including PC-98.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Microsoft</p>
