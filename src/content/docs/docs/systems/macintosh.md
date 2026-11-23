---
title: "Macintosh"
description: "ROM folder, file types, emulators and BIOS files for Macintosh on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/macintosh.webp)"><img src="/docs/art/logos/macintosh.svg" alt="Macintosh"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Apple</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/macintosh/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.2mg</code> <code>.360</code> <code>.7z</code> <code>.cdr</code> <code>.chd</code> <code>.cqi</code> <code>.cqm</code> <code>.cue</code> <code>.d77</code> <code>.d88</code> <code>.dc42</code> <code>.dfi</code> <code>.dsk</code> <code>.gdi</code> <code>.hd</code> <code>.hdi</code> <code>.hdv</code> <code>.hfe</code> <code>.ima</code> <code>.imd</code> <code>.img</code> <code>.ipf</code> <code>.iso</code> <code>.mfi</code> <code>.mfm</code> <code>.nrg</code> <code>.td0</code> <code>.toc</code> <code>.ufi</code> <code>.woz</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1984</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Basilisk II</td></tr></table>
</aside>

## About

The Macintosh is a computer by Apple. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Basilisk II as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/macintosh/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Basilisk II](https://github.com/kanjitalk755/macemu)** | 68k Macintosh emulator (Mac II and Quadra era, System 7 to Mac OS 8.1).<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `minivmac`.<br><small>**Formats:** all · **BIOS:** `MacII.ROM` `MacIIx.ROM`</small> | ✔ | ✔ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** none</small> | ✔ | ✔ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** `mac128k.zip` `mac128k.zip` `mac128k.zip` `mackbd_m0110.zip` `mackbd_m0110.zip` `mackbd_m0120.zip` `mackbd_m0120.zip` `mac512k.zip` `mac512k.zip` `mac512k.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macplus.zip` `macse.zip` `macse.zip` `macclasc.zip` `macclasc.zip` `mac2fdhd.zip` `mac2fdhd.zip` `nb_mdc824.zip` `nb_mdc824.zip` `maciix.zip` `maciix.zip` `maclc3.zip` `maclc3.zip` `mackbd_m0110a.zip` `mackbd_m0110a.zip` `nb_image.zip` `nb_image.zip` `egret.zip` `egret.zip` `egret.zip` `egret.zip` `adbmodem.zip` `adbmodem.zip` `macos3.img` `macos608.img` `macos701.img` `macos75.img` `mac608.chd` `mac701.chd` `mac755.chd`</small> | ✔ | ✔ |
| **[SheepShaver](https://github.com/kanjitalk755/macemu)** | PowerPC Macintosh emulator (Mac OS 7.5.2 to 9.0.4).<br><small>**Formats:** all · **BIOS:** none</small> | ✔ |  |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File | Needed for |
|---|---|
| `MacII.ROM`<br><small>MD5 `66223be1497460f1e60885eeb35e03cc`</small> | minivmac |
| `MacIIx.ROM`<br><small>MD5 `2a8a4c7f2a38e0ab0771f59a9a0f1ee4`</small> | minivmac |
| `mac128k.zip` | mame |
| `mac128k.zip (containing `342-0220-a.u6d`)`<br><small>MD5 `bc04a4252ee96826c1f41f927c145225`</small> | mame |
| `mac128k.zip (containing `342-0221-a.u8d`)`<br><small>MD5 `409d8b9a04db15b7bfbbd5fcb931bf2e`</small> | mame |
| `mackbd_m0110.zip` | mame |
| `mackbd_m0110.zip (containing `ip8021h_2173.bin`)`<br><small>MD5 `9d09a9a51c9ef3ea5719e19db22e7901`</small> | mame |
| `mackbd_m0120.zip` | mame |
| `mackbd_m0120.zip (containing `ip8021h_2173.bin`)`<br><small>MD5 `9d09a9a51c9ef3ea5719e19db22e7901`</small> | mame |
| `mac512k.zip` | mame |
| `mac512k.zip (containing `342-0220-b.u6d`)`<br><small>MD5 `b4118b89fa68a913a225f0cf9a751fae`</small> | mame |
| `mac512k.zip (containing `342-0221-b.u8d`)`<br><small>MD5 `ab4e461833e98ef7106f24455a07769d`</small> | mame |
| `macplus.zip` | mame |
| `macplus.zip (containing `342-0341-a.u6d`)`<br><small>MD5 `1467a42dee57ac265d063b3f351189fc`</small> | mame |
| `macplus.zip (containing `342-0341-b.u6d`)`<br><small>MD5 `25b1bf85b3b072d957499cef4d7e313f`</small> | mame |
| `macplus.zip (containing `342-0341-c.u6d`)`<br><small>MD5 `cf7c3259844245a8967556fa40d81243`</small> | mame |
| `macplus.zip (containing `342-0342-a.u8d`)`<br><small>MD5 `d5584762b43a9b1cb24a981f9b9b4198`</small> | mame |
| `macplus.zip (containing `342-0342-b.u8d`)`<br><small>MD5 `f83069fd7ff1fb011958f819cbff4c88`</small> | mame |
| `macplus.zip (containing `modplus-harp2.bin`)`<br><small>MD5 `875919e2544644cd628f44b5c11db036`</small> | mame |
| `macplus.zip (containing `rominator-20150225-hi.bin`)`<br><small>MD5 `efcefe8f11c10541a503d48a07878201`</small> | mame |
| `macplus.zip (containing `rominator-20150225-lo.bin`)`<br><small>MD5 `f4b06da98500df0747a764dfbf1862b9`</small> | mame |
| `macse.zip` | mame |
| `macse.zip (containing `macse.rom`)`<br><small>MD5 `9fb38bdcc0d53d9d380897ee53dc1322`</small> | mame |
| `macclasc.zip` | mame |
| `macclasc.zip (containing `341-0813__=c=1983-90_apple__japan__910d_d.27c4096_be.ue1`)`<br><small>MD5 `c229bb677cb41b84b780c9e38a09173e`</small> | mame |
| `mac2fdhd.zip` | mame |
| `mac2fdhd.zip (containing `97221136.rom`)`<br><small>MD5 `2a8a4c7f2a38e0ab0771f59a9a0f1ee4`</small> | mame |
| `nb_mdc824.zip` | mame |
| `nb_mdc824.zip (containing `3410868.bin`)`<br><small>MD5 `7500a6a958247ee6e092f08715f2fff8`</small> | mame |
| `maciix.zip` | mame |
| `maciix.zip (containing `97221136.rom`)`<br><small>MD5 `2a8a4c7f2a38e0ab0771f59a9a0f1ee4`</small> | mame |
| `maclc3.zip` | mame |
| `maclc3.zip (containing `ecbbc41c.rom`)`<br><small>MD5 `fa16d49527c4e6e9c0d9e46904133d39`</small> | mame |
| `mackbd_m0110a.zip` | mame |
| `mackbd_m0110a.zip (containing `341-0332-a.bin`)`<br><small>MD5 `9e8ea1552153c5e0f895e247e7d3ec1c`</small> | mame |
| `nb_image.zip` | mame |
| `nb_image.zip (containing `nb_fake.bin`)`<br><small>MD5 `93155ac7bad0fec36837252bb1e408f2`</small> | mame |
| `egret.zip` | mame |
| `egret.zip (containing `341s0850.bin`)`<br><small>MD5 `96665499f5cf2bb5b4aae6fdaf0a9fb5`</small> | mame |
| `egret.zip (containing `341s0851.bin`)`<br><small>MD5 `b955ecbdf6d2f979f3683dd1d6884643`</small> | mame |
| `egret.zip (containing `344s0100.bin`)`<br><small>MD5 `5035d321c5d5fa1eab5ce6bf986676e4`</small> | mame |
| `adbmodem.zip` | mame |
| `adbmodem.zip (containing `342s0440-b.bin`)`<br><small>MD5 `862b8598cecdbc934658c4cb599a8142`</small> | mame |
| `macos3.img` | mame |
| `macos608.img` | mame |
| `macos701.img` | mame |
| `macos75.img` | mame |
| `mac608.chd` | mame |
| `mac701.chd` | mame |
| `mac755.chd` | mame |

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
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Apple</p>
