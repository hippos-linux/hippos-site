---
title: "FM-TOWNS"
description: "ROM folder, file types, emulators and BIOS files for FM-TOWNS on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/fmtowns.webp)"><img src="/docs/art/logos/fmtowns.svg" alt="FM-TOWNS"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Fujitsu</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/fmtowns/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.7z</code> <code>.bin</code> <code>.cdr</code> <code>.chd</code> <code>.cqi</code> <code>.cqm</code> <code>.cue</code> <code>.d77</code> <code>.d88</code> <code>.dfi</code> <code>.dsk</code> <code>.gdi</code> <code>.hfe</code> <code>.imd</code> <code>.iso</code> <code>.m3u</code> <code>.mfi</code> <code>.mfm</code> <code>.nrg</code> <code>.td0</code> <code>.toc</code> <code>.xdf</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1989</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Tsugaru</td></tr></table>
</aside>

## About

The FM-TOWNS is a computer by Fujitsu. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Tsugaru as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/fmtowns/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Tsugaru](https://github.com/captainys/TOWNSEMU)** | FM Towns emulator.<br><small>**Formats:** all except `.1dd` `.7z` `.cdr` `.chd` `.cqi` `.cqm` `.dfi` `.dsk` `.gdi` `.hfe` `.imd` `.mfi` `.mfm` `.nrg` `.td0` `.toc` `.zip` · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `geartowns`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all except `.m3u` `.xdf` · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `fmtowns/FMT_DIC.ROM`<br><small>MD5 `8fa4e553f28cfc0c30a0a1e589799942`</small> |
| `fmtowns/FMT_DOS.ROM`<br><small>MD5 `0585b19930d4a7f4c71bcc8a33746588`</small> |
| `fmtowns/FMT_F20.ROM`<br><small>MD5 `ac0c7021e9bf48ca84b51ab651169a88`</small> |
| `fmtowns/FMT_FNT.ROM`<br><small>MD5 `b91300e55b70227ce98b59c5f02fa8dd`</small> |
| `fmtowns/FMT_SYS.ROM`<br><small>MD5 `86fb6f7280689259f0ca839dd3dd6cde`</small> |
| `fmtmarty.zip` |
| `fmtmarty.zip (containing `mrom.m36`)`<br><small>MD5 `6618519b2c104cf9b7e71a48381b44a9`</small> |
| `fmtmarty.zip (containing `mrom.m37`)`<br><small>MD5 `75a5c7afb4bc8221bab8cf24db417950`</small> |
| `fmtowns.zip` |
| `fmtowns.zip (containing `fmt_dic.rom`)`<br><small>MD5 `34847786d7de94b5d1133c956ab1d75d`</small> |
| `fmtowns.zip (containing `fmt_dos.rom`)`<br><small>MD5 `0585b19930d4a7f4c71bcc8a33746588`</small> |
| `fmtowns.zip (containing `fmt_fnt.rom`)`<br><small>MD5 `eb44f2093f51eb7159f03e170b13af76`</small> |
| `fmtowns.zip (containing `fmt_sys.rom`)`<br><small>MD5 `feaf8c5675151e00cfe3ad27673bff29`</small> |
| `fmtownsux.zip` |
| `fmtownsux.zip (containing `fmt_dic.rom`)`<br><small>MD5 `8fa4e553f28cfc0c30a0a1e589799942`</small> |
| `fmtownsux.zip (containing `fmt_dos_a.rom`)`<br><small>MD5 `03c8fac9a5f5f5f35fb5de5a5d0d018f`</small> |
| `fmtownsux.zip (containing `fmt_fnt.rom`)`<br><small>MD5 `b91300e55b70227ce98b59c5f02fa8dd`</small> |
| `fmtownsux.zip (containing `fmt_sys_a.rom`)`<br><small>MD5 `90b5e01d42aaa93e8f4503a5e94e120b`</small> |
| `fmtownsux.zip (containing `mytownsux.rom`)`<br><small>MD5 `1a15f6c1b58ec7e5f850118610a787a7`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.dsk**: Floppy disk image.
- **.gdi**: Dreamcast GD-ROM track list.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Fujitsu</p>
