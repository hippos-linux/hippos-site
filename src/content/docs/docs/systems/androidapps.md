---
title: "Android Apps"
description: "ROM folder, file types, emulators and BIOS files for Android Apps on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/androidapps.webp)"><img src="/docs/art/logos/androidapps.svg" alt="Android Apps"></div>
<table><tr><th>Type</th><td>app platform</td></tr><tr><th>Manufacturer</th><td>Google</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/androidapps/</code></td></tr><tr><th>File types</th><td><code>.aab</code> <code>.apk</code> <code>.apks</code> <code>.waydroid</code> <code>.xapk</code></td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Waydroid</td></tr></table>
</aside>

## About

On HippOS, Android Apps runs on PC, Raspberry Pi and RK3326 handhelds, with Waydroid as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/androidapps/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[Waydroid](https://waydro.id/)** | Runs Android in a container on Linux.<br><small>**Formats:** all except `.aab` `.apks` `.xapk` · **BIOS:** none</small> | ★ | ★ |
| **[Lunaria](https://github.com/yui0/lunaria)** | Runs Android apps and games.<br><small>**Formats:** all except `.waydroid` · **BIOS:** none</small> | ✔ |  |


<p class="categories">Categories: <a href="/docs/systems/#apps-and-launchers">Apps and launchers</a> · Google</p>
