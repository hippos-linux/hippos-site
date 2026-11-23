---
title: "Windows Games"
description: "ROM folder, file types, emulators and BIOS files for Windows Games on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/windows.webp)"><img src="/docs/art/logos/windows.svg" alt="Windows Games"></div>
<table><tr><th>Type</th><td>app platform</td></tr><tr><th>Manufacturer</th><td>Microsoft</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/windows/</code></td></tr><tr><th>File types</th><td><code>.exe</code> <code>.pc</code> <code>.wine</code> <code>.wsquashfs</code> <code>.wtgz</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Wine</td></tr></table>
</aside>

## About

On HippOS, Windows Games runs on PC, Raspberry Pi and RK3326 handhelds, with Wine as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/windows/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Wine](https://www.winehq.org/)** | Runs Windows games on Linux.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.exe**: Windows or DOS program.
- **.pc**: Folder-style DOS game: a folder named `Game.pc` with the game inside.
- **.wsquashfs**: Squashfs image of a Windows game folder, mounted when the game starts.


<p class="categories">Categories: <a href="/docs/systems/#apps-and-launchers">Apps and launchers</a> · Microsoft</p>
