---
title: "Atari ST"
description: "ROM folder, file types, emulators and BIOS files for Atari ST on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/atarist.webp)"><img src="/docs/art/logos/atarist.svg" alt="Atari ST"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Atari</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/atarist/</code></td></tr><tr><th>File types</th><td><code>.7z</code> <code>.dim</code> <code>.gemdos</code> <code>.hd</code> <code>.ipf</code> <code>.m3u</code> <code>.msa</code> <code>.st</code> <code>.stx</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1985</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Hatari</td></tr></table>
</aside>

## About

The Atari ST is a computer by Atari. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Hatari as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/atarist/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Hatari](https://github.com/hatari/hatari)** | Atari ST, STE, TT and Falcon emulator.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `hatari`, `hatarib`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[Clock Signal](https://github.com/TomHarte/CLK)** | Latency-focused emulator for many 8- and 16-bit computers and consoles.<br><small>**Formats:** all except `.7z` `.m3u` · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `tos.img`<br><small>MD5 `c1c57ce48e8ee4135885cee9e63a68a2`</small> |
| `tos100fr.img`<br><small>MD5 `25789a649faff0a1176dc7d9b98105c0`</small> |
| `tos100uk.img`<br><small>MD5 `c87a52c277f7952b41c639fc7bf0a43b`</small> |
| `tos100us.img`<br><small>MD5 `d0f682ee6237497004339fb02172638b`</small> |
| `tos102de.img`<br><small>MD5 `a622cc35d8d78703905592dfaa4d2ccb`</small> |
| `tos102fr.img`<br><small>MD5 `d6521785627d20c51edc566808a6bf28`</small> |
| `tos102uk.img`<br><small>MD5 `b2a8570de2e850c5acf81cb80512d9f6`</small> |
| `tos104de.img`<br><small>MD5 `41b7dae4e24735f330b63ad923a0bfbc`</small> |
| `tos104es.img`<br><small>MD5 `143343f7b8e0b1162af206fe8f46b002`</small> |
| `tos104fr.img`<br><small>MD5 `0087e2707c57efa2106a0aa7576655c0`</small> |
| `tos104uk.img`<br><small>MD5 `036c5ae4f885cbf62c9bed651c6c58a8`</small> |
| `tos104us.img`<br><small>MD5 `736adb2dc835df4d323191fdc8926cc9`</small> |
| `tos106de.img`<br><small>MD5 `992bac38e01633a529121a2a65f0779e`</small> |
| `tos106es.img`<br><small>MD5 `30f69d70fe7c210300ed83f991b12de9`</small> |
| `tos106fr.img`<br><small>MD5 `bc7b224d0dc3f0cc14c8897db89c5787`</small> |
| `tos106uk.img`<br><small>MD5 `6033f2b9364edfed321c6931a8181fd2`</small> |
| `tos106us.img`<br><small>MD5 `a0982e760f9807d82667ff5a69e78f6b`</small> |
| `tos162de.img`<br><small>MD5 `94a75c1c65408d9f974b0463e15a3b11`</small> |
| `tos162fr.img`<br><small>MD5 `ed5fbaabe0219092df74c6c14cea3f8e`</small> |
| `tos162uk.img`<br><small>MD5 `1cbc4f55295e469fc8cd72b7efdea1da`</small> |
| `tos162us.img`<br><small>MD5 `febb00ba8784798293a7ae709a1dafcb`</small> |
| `tos205de.img`<br><small>MD5 `7aeabdc25f8134590e25643a405210ca`</small> |
| `tos205es.img`<br><small>MD5 `7449b131681f1dfe62ebed1392847057`</small> |
| `tos205fr.img`<br><small>MD5 `61b620ad951815a25cb37895c81a947c`</small> |
| `tos205it.img`<br><small>MD5 `7e87d8fe7e24e0b4c55ad1b7955beae3`</small> |
| `tos205us.img`<br><small>MD5 `7cdd45b6aac66a21bfb357d9334e46db`</small> |
| `tos206de.img`<br><small>MD5 `0604dbb85928f0598d04144a8b554bbe`</small> |
| `tos206fr.img`<br><small>MD5 `b2873004a408b8db36321f98daafa251`</small> |
| `tos206.img`<br><small>MD5 `4a0d4f282c3f2a0196681adf88862dd4`</small> |
| `tos206uk.img`<br><small>MD5 `e690bec90d902024beed549d22150755`</small> |
| `tos206us.img`<br><small>MD5 `c9093f27159e7d13ac0d1501a95e53d4`</small> |
| `tos306de.img`<br><small>MD5 `066f39a7ea5789d5afd59dd7b3104fa6`</small> |
| `tos306uk.img`<br><small>MD5 `dd1010ec566efbd71047d6c4919feba5`</small> |
| `tos400.img`<br><small>MD5 `ed2647936ce4bd283c4d7dfd7ae09d1c`</small> |
| `tos402.img`<br><small>MD5 `9e880168d0a004f7f5e852be758f39e4`</small> |
| `tos404.img`<br><small>MD5 `e5ea0f216fb446f1c4a4f476bc5f03d4`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.7z**: 7-Zip archive; works like .zip but is slower to open.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Atari</p>
