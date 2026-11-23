---
title: "Amiga AGA"
description: "ROM folder, file types, emulators and BIOS files for Amiga AGA on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/amiga1200.webp)"><img src="/docs/art/logos/amiga1200.svg" alt="Amiga AGA"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Commodore</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/amiga1200/</code></td></tr><tr><th>File types</th><td><code>.adf</code> <code>.adz</code> <code>.dms</code> <code>.dmz</code> <code>.exe</code> <code>.hdf</code> <code>.ipf</code> <code>.lha</code> <code>.m3u</code> <code>.raw</code> <code>.scp</code> <code>.uae</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1992</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Amiberry</td></tr></table>
</aside>

## About

The Amiga AGA is a computer by Commodore. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Amiberry as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/amiga1200/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Amiberry](https://amiberry.com/)** | Amiga emulator based on WinUAE, tuned for Linux and ARM, with WHDLoad support. Cores: `A1200` ★, `A4000`.<br><small>**Formats:** all except `.m3u` · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `puae`, `amiberry`, `fsuae`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[FS-UAE](https://fs-uae.net/)** | Amiga emulator focused on games, with CD32 and CDTV support. Cores: `A1200`, `A4000`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `amiga/kick39106.A1200`<br><small>MD5 `b7cc148386aa631136f510cd29e42fc3`</small> |
| `amiga/kick40068.A1200`<br><small>MD5 `646773759326fbac3b2311fd8c8793ee`</small> |
| `amiga/kick40068.A4000`<br><small>MD5 `9bdedde6a4f33555b4a270c8ca53297d`</small> |
| `amiga/amiga-os-300-a1200.rom`<br><small>MD5 `b7cc148386aa631136f510cd29e42fc3`</small> |
| `amiga/amiga-os-310-a1200.rom`<br><small>MD5 `646773759326fbac3b2311fd8c8793ee`</small> |
| `amiga/amiga-os-310-a3000.rom`<br><small>MD5 `413590e50098a056cfec418d3df0212d`</small> |
| `amiga/amiga-os-310-a4000.rom`<br><small>MD5 `9bdedde6a4f33555b4a270c8ca53297d`</small> |
| `amiga/amiga-os-310.rom`<br><small>MD5 `730888fb1bd9a3606d51f772ed136528`</small> |

:::note
HippOS can't supply BIOS files. Dump them from hardware you own.
:::

## Game Formats Explained

- **.adf**: Amiga floppy disk image.
- **.exe**: Windows or DOS program.
- **.hdf**: Hard disk image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Commodore</p>
