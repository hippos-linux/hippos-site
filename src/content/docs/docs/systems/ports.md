---
title: "Ports"
description: "ROM folder, file types, emulators and BIOS files for Ports on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/ports.webp)"><img src="/docs/art/logos/ports.svg" alt="Ports"></div>
<table><tr><th>Type</th><td>game engine</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/ports/</code></td></tr><tr><th>File types</th><td><code>.sh</code> <code>.squashfs</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Shell scripts</td></tr></table>
</aside>

## About

Each port is a folder plus a `.sh` launch script in `/userdata/roms/ports/`. **PortMaster**, listed here, downloads and installs ports for you.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **Shell scripts** | Runs port launch scripts (.sh).<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |

## Game Formats Explained

- **.sh**: Launch script.
- **.squashfs**: Compressed read-only folder image. HippOS mounts it when the game starts, so the game stays compressed on disk.


<p class="categories">Categories: <a href="/docs/systems/#game-engines">Game engines</a></p>
