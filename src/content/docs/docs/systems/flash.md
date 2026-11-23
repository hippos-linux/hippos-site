---
title: "Flash Player"
description: "ROM folder, file types, emulators and BIOS files for Flash Player on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/flash.webp)"><img src="/docs/art/logos/flash.svg" alt="Flash Player"></div>
<table><tr><th>Type</th><td>port</td></tr><tr><th>Manufacturer</th><td>Adobe</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/flash/</code></td></tr><tr><th>File types</th><td><code>.swf</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Ruffle</td></tr></table>
</aside>

## About

On HippOS, Flash Player runs on PC, Raspberry Pi and RK3326 handhelds, with Ruffle as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/flash/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Ruffle](https://ruffle.rs/)** | Flash Player emulator written in Rust.<br><small>**Formats:** all · **BIOS:** none</small> | ★ | ★ |
| **[Lightspark](https://github.com/lightspark/lightspark)** | Open-source Flash player with ActionScript 3 support.<br><small>**Formats:** all · **BIOS:** none</small> | ✔ | ✔ |


<p class="categories">Categories: <a href="/docs/systems/#ports">Ports</a> · Adobe</p>
