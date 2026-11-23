---
title: "Commodore 64 SuperCPU"
description: "ROM folder, file types, emulators and BIOS files for Commodore 64 SuperCPU on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/c64scpu.webp)"><img src="/docs/art/logos/c64scpu.svg" alt="Commodore 64 SuperCPU"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Creative Micro Designs</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/c64scpu/</code></td></tr><tr><th>File types</th><td><code>.bin</code> <code>.cmd</code> <code>.crt</code> <code>.d64</code> <code>.d71</code> <code>.d80</code> <code>.d81</code> <code>.d82</code> <code>.g41</code> <code>.g64</code> <code>.gz</code> <code>.m3u</code> <code>.nib</code> <code>.p00</code> <code>.prg</code> <code>.t64</code> <code>.tap</code> <code>.vsf</code> <code>.x64</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1996</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

The Commodore 64 SuperCPU is a computer by Creative Micro Designs. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/c64scpu/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `vice_xscpu64` ★.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.d64**: Commodore 1541 floppy disk image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.t64**: Commodore tape image.
- **.tap**: Tape image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Creative Micro Designs</p>
