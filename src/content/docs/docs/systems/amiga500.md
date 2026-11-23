---
title: "Amiga OCS/ECS"
description: "ROM folder, file types, emulators and BIOS files for Amiga OCS/ECS on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/amiga500.webp)"><img src="/docs/art/logos/amiga500.svg" alt="Amiga OCS/ECS"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Commodore</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/amiga500/</code></td></tr><tr><th>File types</th><td><code>.adf</code> <code>.adz</code> <code>.dms</code> <code>.dmz</code> <code>.exe</code> <code>.hdf</code> <code>.ipf</code> <code>.lha</code> <code>.m3u</code> <code>.raw</code> <code>.scp</code> <code>.uae</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1987</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Amiberry</td></tr></table>
</aside>

## About

The Amiga OCS/ECS is a computer by Commodore. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Amiberry as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/amiga500/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Amiberry](https://amiberry.com/)** | Amiga emulator based on WinUAE, tuned for Linux and ARM, with WHDLoad support. Cores: `A500` ★, `A500+`.<br><small>**Formats:** all except `.m3u` · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `puae`, `amiberry`, `fsuae`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |
| **[FS-UAE](https://fs-uae.net/)** | Amiga emulator focused on games, with CD32 and CDTV support. Cores: `A500`, `A500+`, `A600`, `A1000`, `A3000`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files

These go in `/userdata/bios/`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows which ones HippOS finds. You usually only need the files for your emulator and your games' region.

| File |
|---|
| `amiga/kick33180.A500`<br><small>MD5 `85ad74194e87c08904327de1a9443b7a`</small> |
| `amiga/kick37175.A500`<br><small>MD5 `dc10d7bdd1b6f450773dfb558477c230`</small> |
| `amiga/kick34005.A500`<br><small>MD5 `82a21c1890cae844b3df741f2762d48d`</small> |
| `amiga/kick37350.A600`<br><small>MD5 `465646c9b6729f77eea5314d1f057951`</small> |
| `amiga/kick40063.A600`<br><small>MD5 `e40a5dfb3d017ba8779faba30cbd1c8e`</small> |
| `amiga/amiga-os-120.rom`<br><small>MD5 `85ad74194e87c08904327de1a9443b7a`</small> |
| `amiga/amiga-os-130.rom`<br><small>MD5 `82a21c1890cae844b3df741f2762d48d`</small> |
| `amiga/amiga-os-204.rom`<br><small>MD5 `dc10d7bdd1b6f450773dfb558477c230`</small> |
| `amiga/amiga-os-205.rom`<br><small>MD5 `465646c9b6729f77eea5314d1f057951`</small> |
| `amiga/amiga-os-310-a600.rom`<br><small>MD5 `e40a5dfb3d017ba8779faba30cbd1c8e`</small> |

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
