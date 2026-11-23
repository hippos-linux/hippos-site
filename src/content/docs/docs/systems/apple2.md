---
title: "Apple II"
description: "ROM folder, file types, emulators and BIOS files for Apple II on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/apple2.webp)"><img src="/docs/art/logos/apple2.svg" alt="Apple II"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Apple</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/apple2/</code></td></tr><tr><th>File types</th><td><code>.2mg</code> <code>.7z</code> <code>.chd</code> <code>.dfi</code> <code>.do</code> <code>.dsk</code> <code>.edd</code> <code>.hdv</code> <code>.mfi</code> <code>.nib</code> <code>.po</code> <code>.rti</code> <code>.wav</code> <code>.woz</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1977</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>AppleWin</td></tr></table>
</aside>

## About

The Apple II is a computer by Apple. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with AppleWin as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/apple2/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[AppleWin](https://github.com/audetto/AppleWin)** | Linux port of AppleWin, an accurate Apple II and IIe emulator.<br><small>**Formats:** all except `.chd` · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `applewin`.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |
| **[GSplus](https://github.com/applemu/gsplus)** | Apple IIGS emulator.<br><small>**Formats:** all except `.2mg` `.7z` `.chd` `.dfi` `.edd` `.hdv` `.mfi` `.rti` `.wav` `.woz` `.zip` · **BIOS:** none</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | Needed for |
|---|---|
| `apple2e.zip` | mame |
| `apple2e.zip (containing `342-0132-c.e12`)`<br><small>MD5 `4431aea380185e3f509285540d7cb418`</small> | mame |
| `apple2e.zip (containing `342-0133-a.chr`)`<br><small>MD5 `e6d453d8738e6df4f73df8c8051df3e8`</small> | mame |
| `apple2e.zip (containing `342-0134-a.64`)`<br><small>MD5 `72924019cf1719765e4fde35e59c1c7d`</small> | mame |
| `apple2e.zip (containing `342-0135-b.64`)`<br><small>MD5 `0b150f4bfa090770a866cc5d214703f4`</small> | mame |
| `apple2ee.zip` | mame |
| `apple2ee.zip (containing `341-0132-d.e12`)`<br><small>MD5 `b956c537e7b6b85ffa5c3493b1490d8a`</small> | mame |
| `apple2ee.zip (containing `342-0265-a.chr`)`<br><small>MD5 `9123fff3442c0e688cc6816be88dd4ab`</small> | mame |
| `apple2ee.zip (containing `342-0303-a.e8`)`<br><small>MD5 `6ac9338f6972eea01604f90d9a581f18`</small> | mame |
| `apple2ee.zip (containing `342-0304-a.e10`)`<br><small>MD5 `6b11018a14668a7e3904319d2097dddc`</small> | mame |
| `apple2p.zip` | mame |
| `apple2p.zip (containing `341-0011.d0`)`<br><small>MD5 `89ca5cd551ffad9a557652a97dcb6627`</small> | mame |
| `apple2p.zip (containing `341-0012.d8`)`<br><small>MD5 `42333f24cd6e70696b212b042f3166aa`</small> | mame |
| `apple2p.zip (containing `341-0013.e0`)`<br><small>MD5 `5de50bebc41e59ae4eb27be4c24b6814`</small> | mame |
| `apple2p.zip (containing `341-0014.e8`)`<br><small>MD5 `56d9bb6730735a3b2bbcc75d1da7a8de`</small> | mame |
| `apple2p.zip (containing `341-0015.f0`)`<br><small>MD5 `cb63c41c5e72b5fda54feb5490efdefb`</small> | mame |
| `apple2p.zip (containing `341-0020-00.f8`)`<br><small>MD5 `8925b695ae0177dd3919dbea2f2f202b`</small> | mame |
| `apple2p.zip (containing `341-0036.chr`)`<br><small>MD5 `9ac0dc8c4d0002eb45b0b84be0bde5ec`</small> | mame |
| `a2diskiing.zip` | mame |
| `a2diskiing.zip (containing `341-0027-a.p5`)`<br><small>MD5 `2020aa1413ff77fe29353f3ee72dc295`</small> | mame |
| `a2cffa02.zip` | mame |
| `a2cffa02.zip (containing `cffa20ee02.bin`)`<br><small>MD5 `80adbc2d79f347ec63f4b771ea32984d`</small> | mame |
| `votrsc01.zip` | mame |
| `votrsc01.zip (containing `sc01.bin`)`<br><small>MD5 `8ccf35a06f5e9a2131b0f42380ee5c15`</small> | mame |
| `votrsc01a.zip` | mame |
| `votrsc01a.zip (containing `sc01a.bin`)`<br><small>MD5 `95b91e4a2fe7d6f13d353ba1827d37f9`</small> | mame |
| `d2fdc.zip` | mame |
| `d2fdc.zip (containing `341-0028-a.rom`)`<br><small>MD5 `5f1be0c1cdff26f5956eef9643911886`</small> | mame |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.dsk**: Floppy disk image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Apple</p>
