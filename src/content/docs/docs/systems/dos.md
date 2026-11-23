---
title: "Dos (x86)"
description: "ROM folder, file types, emulators and BIOS files for Dos (x86) on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/pc.webp)"><img src="/docs/art/logos/pc.svg" alt="Dos (x86)"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/dos/</code></td></tr><tr><th>File types</th><td><code>.cue</code> <code>.dos</code> <code>.dosz</code> <code>.iso</code> <code>.m3u</code> <code>.pc</code> <code>.squashfs</code> <code>.zip</code></td></tr><tr><th>Released</th><td>1981</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>RetroArch</td></tr></table>
</aside>

## About

MS-DOS games for IBM PC compatibles, from the early 1980s to the mid 1990s. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with RetroArch as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/dos/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `dosbox_pure` ★, `dosbox_core`.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[DOSBox Staging](https://www.dosbox-staging.org/)** | Modernised DOSBox for DOS games, with better audio, video and input defaults.<br><small>**Formats:** all except `.zip` · **BIOS:** none</small> | ✔ | ✔ |
| **[DOSBox-X](https://dosbox-x.com/)** | DOSBox fork aimed at complete DOS and Windows 9x-era PC emulation, including PC-98.<br><small>**Formats:** all except `.zip` · **BIOS:** none</small> | ✔ | ✔ |

## Game Formats Explained

- **.cue**: Track list for a .bin disc image. Open the .cue, not the .bin.
- **.iso**: Uncompressed disc image.
- **.m3u**: Plain-text playlist of discs or disks; lets a multi-disc game appear once and swap discs with Hotkey + L3.
- **.pc**: Folder-style DOS game: a folder named `Game.pc` with the game inside.
- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.
- **.zip**: Zip archive. Most cartridge systems and arcade sets can be played zipped.


## Game folders

Put each game in its own folder named `Game Name.pc` inside `/userdata/roms/dos/`. HippOS runs `dosbox.bat` from that folder if there is one, otherwise the first `.bat`, `.exe` or `.com` file in alphabetical order. A `dosbox.cfg` in the folder is used for that game's settings.

To pick the program yourself, make `dosbox.bat` with the command to run, for example `GAME.EXE`.


<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · Microsoft</p>
