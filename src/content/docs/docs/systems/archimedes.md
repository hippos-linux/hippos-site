---
title: "Archimedes"
description: "ROM folder, file types, emulators and BIOS files for Archimedes on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/archimedes.webp)"><img src="/docs/art/logos/archimedes.svg" alt="Archimedes"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Acorn Computers</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/archimedes/</code></td></tr><tr><th>File types</th><td><code>.1dd</code> <code>.360</code> <code>.7z</code> <code>.adf</code> <code>.adl</code> <code>.adm</code> <code>.ads</code> <code>.apd</code> <code>.bbc</code> <code>.chd</code> <code>.cqi</code> <code>.cqm</code> <code>.d77</code> <code>.d88</code> <code>.dfi</code> <code>.dsd</code> <code>.dsk</code> <code>.hfe</code> <code>.ima</code> <code>.imd</code> <code>.img</code> <code>.ipf</code> <code>.jfd</code> <code>.mfi</code> <code>.mfm</code> <code>.msa</code> <code>.ssd</code> <code>.st</code> <code>.td0</code> <code>.ufi</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1987</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Clock Signal</td></tr></table>
</aside>

## About

The Archimedes is a computer by Acorn Computers. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Clock Signal as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/archimedes/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[MAME](https://www.mamedev.org/)** | Multi-system arcade and computer emulator (GroovyMAME build, with CRT support).<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `aa310.zip` |
| `aa310.zip (containing `0270,251-01.rom`)`<br><small>MD5 `374e4bcaa04cb98aad3b64a1555c3930`</small> |
| `aa310.zip (containing `0270,252-01.rom`)`<br><small>MD5 `b0b6a83029b6f85bb044bfc46bf3f0f6`</small> |
| `aa310.zip (containing `0270,253-01.rom`)`<br><small>MD5 `bf35bb799aa0278b7ee7719dd32f26bc`</small> |
| `aa310.zip (containing `0270,254-01.rom`)`<br><small>MD5 `e41af081535aae930d68ee4cbd672513`</small> |
| `aa310.zip (containing `0270,601-01.rom`)`<br><small>MD5 `7ecdccd760557ab0711edb37773faeb6`</small> |
| `aa310.zip (containing `0270,602-01.rom`)`<br><small>MD5 `c43bad04862ea03146ff5bf7441a1a24`</small> |
| `aa310.zip (containing `0270,603-01.rom`)`<br><small>MD5 `454c1977ad70a206f4f3a0bdca294d85`</small> |
| `aa310.zip (containing `0270,604-01.rom`)`<br><small>MD5 `6850da7a70b198eaf6fde5be503fa5cd`</small> |
| `aa310.zip (containing `0276,146-01.rom`)`<br><small>MD5 `84d305e248dab48a3a110af161dfb005`</small> |
| `aa310.zip (containing `0276,147-01.rom`)`<br><small>MD5 `64d7f085e6afb149ebc2e7f919429a19`</small> |
| `aa310.zip (containing `0276,148-01.rom`)`<br><small>MD5 `f7d0a9a4d1dae8eee057aa626b87715f`</small> |
| `aa310.zip (containing `0276,149-01.rom`)`<br><small>MD5 `763b015d85c7d9d17e06d5babc0a9d32`</small> |
| `aa310.zip (containing `0276,322-01.rom`)`<br><small>MD5 `b8fcd63c6a28d0c7034af2e6c5aff9a8`</small> |
| `aa310.zip (containing `0276,323-01.rom`)`<br><small>MD5 `6265551c5d6336f7ddd9f3fc78ceba93`</small> |
| `aa310.zip (containing `0276,324-01.rom`)`<br><small>MD5 `ca4379aeab4f7c7640c8ad34b27a9db6`</small> |
| `aa310.zip (containing `0276,325-01.rom`)`<br><small>MD5 `358d3c9d2685c076f6a141c26d45520c`</small> |
| `aa310.zip (containing `0277,022-02.rom`)`<br><small>MD5 `4ae429fbf23f8aa64ce2002cfb14c527`</small> |
| `aa310.zip (containing `0277,023-02.rom`)`<br><small>MD5 `83d0f0738468fdf9f23c13eef22dbeea`</small> |
| `aa310.zip (containing `0277,024-02.rom`)`<br><small>MD5 `636e4072c392916d2bf00865fee40984`</small> |
| `aa310.zip (containing `0277,025-02.rom`)`<br><small>MD5 `252b1993fdb66cac522a0edbeffc3407`</small> |
| `aa310.zip (containing `0283,022-01.rom`)`<br><small>MD5 `591f3bdd0f20a0a3d03c8748f2f75754`</small> |
| `aa310.zip (containing `0283,023-01.rom`)`<br><small>MD5 `f77f4a409c78c8495fc3876cd4e7d97c`</small> |
| `aa310.zip (containing `0283,024-01.rom`)`<br><small>MD5 `57d3a349407916f55129d6c8c0f56395`</small> |
| `aa310.zip (containing `0283,025-01.rom`)`<br><small>MD5 `ee4aa1ea0eebf88c5f6cae6315ed11a1`</small> |
| `aa310.zip (containing `0296,041-01.rom`)`<br><small>MD5 `a057124502e533ccd8865dc970cf7017`</small> |
| `aa310.zip (containing `0296,041-02.rom`)`<br><small>MD5 `3c40d2821595a7334a46ea3b46a5421d`</small> |
| `aa310.zip (containing `0296,042-01.rom`)`<br><small>MD5 `d1d51b8f603bba476d1f63bc5980040e`</small> |
| `aa310.zip (containing `0296,042-02.rom`)`<br><small>MD5 `7b096a93cc5ada80bcfb5249bca33768`</small> |
| `aa310.zip (containing `0296,043-01.rom`)`<br><small>MD5 `744e80abe4c6a845412f63a0f0b14e48`</small> |
| `aa310.zip (containing `0296,043-02.rom`)`<br><small>MD5 `9dac78cba6034c427d00f78fa94ab63d`</small> |
| `aa310.zip (containing `0296,044-01.rom`)`<br><small>MD5 `4c0b2e1fb29c8acd84e94d25c953173c`</small> |
| `aa310.zip (containing `0296,044-02.rom`)`<br><small>MD5 `f6bf5f8908a19a9aacf733633b1cd5cf`</small> |
| `aa310.zip (containing `0296,241-01.rom`)`<br><small>MD5 `eec46f5bd4cdb456b760b3cddf16a33c`</small> |
| `aa310.zip (containing `0296,242-01.rom`)`<br><small>MD5 `980e3be0c851a59d0f4602f4a94b2eef`</small> |
| `aa310.zip (containing `0296,243-01.rom`)`<br><small>MD5 `971a49d5c2dbb3fc01c17d1d5615781a`</small> |
| `aa310.zip (containing `0296,244-01.rom`)`<br><small>MD5 `9ce06a4d2a8331bc5b7fadb967d74f4f`</small> |
| `aa310.zip (containing `cmos_arthur.bin`)`<br><small>MD5 `c74763f720c98e16dc3c6c421db21485`</small> |
| `aa310.zip (containing `cmos_riscos2.bin`)`<br><small>MD5 `6f564c8917f04594bda7385f6de61061`</small> |
| `aa310.zip (containing `cmos_riscos3.bin`)`<br><small>MD5 `232a302efe19278d9df6ecbc8ea3dc6c`</small> |
| `archimedes_keyboard.zip` |
| `archimedes_keyboard.zip (containing `acorn_0280,022-01_philips_8051ah-2.bin`)`<br><small>MD5 `1a8617c1abe3e0729d20ce844e1e12a8`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.adf**: Amiga floppy disk image.
- **.chd**: Compressed disc image (MAME's CHD). Lossless and much smaller than .bin/.cue or .iso; recommended for disc systems.
- **.dsk**: Floppy disk image.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Acorn Computers</p>
