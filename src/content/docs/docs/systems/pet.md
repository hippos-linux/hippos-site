---
title: "Commodore PET"
description: "ROM folder, file types, emulators and BIOS files for Commodore PET on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/pet.webp)"><img src="/docs/art/logos/pet.svg" alt="Commodore PET"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Commodore</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/pet/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.a0</code> <code>.b0</code> <code>.crt</code> <code>.d64</code> <code>.d81</code> <code>.m3u</code> <code>.prg</code> <code>.t64</code> <code>.tap</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1977</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>VICE</td></tr></table>
</aside>

## About

The Commodore PET is a computer by Commodore. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with VICE as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/pet/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[VICE](https://vice-emu.sourceforge.io/)** | Commodore 8-bit emulator (C64, C128, VIC-20, PET, Plus/4 and more).<br><small>**Formats:** all except `.7z` `.m3u` · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `vice_xpet`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.d64**: Commodore 1541 floppy disk image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.t64**: Commodore tape image.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Commodore</p>
