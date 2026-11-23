---
title: "ScummVM"
description: "ROM folder, file types, emulators and BIOS files for ScummVM on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/scummvm.webp)"><img src="/docs/art/logos/scummvm.svg" alt="ScummVM"></div>
<table><tr><th>Type</th><td>computer</td></tr><tr><th>Manufacturer</th><td>LucasArts</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/scummvm/</code></td></tr><tr><th>File types</th><td><code>.scummvm</code> <code>.squashfs</code></td></tr><tr><th>Released</th><td>1987</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>ScummVM</td></tr></table>
</aside>

## About

The ScummVM is a computer by LucasArts. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with ScummVM as the default emulator.

## Getting ROMs

Put your files in `/userdata/roms/scummvm/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[ScummVM](https://www.scummvm.org/)** | Runs classic adventure and RPG games by replacing their original engines.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ★ | ★ |
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `scummvm`.<br><small>**Formats:** all · **BIOS:** see BIOS files below</small> | ✔ | ✔ |

## Bios Files & MIDI Rom Dumps

ScummVM does not require a console system BIOS to operate standard games. However, if you want to experience the absolute best audio quality for classic LucasArts or Sierra titles, you can enable authentic **Roland MT-32** high-fidelity MIDI audio emulation. 

To use MT-32 audio, you must source the original Roland hardware ROM dumps and place them directly into your `/userdata/bios/scummvm/extra/` directory:

| Filename | Required For | Description |
|---|---|---|
| `MT32_CONTROL.ROM` | Roland MT-32 Emulation | Core control firmware chip dump from a standard MT-32 unit (v1.xx or v2.xx). |
| `MT32_PCM.ROM` | Roland MT-32 Emulation | Digital acoustic sample file containing the instrument data patches. |

:::note
**Configuring Audio:** Once the ROM files are placed in the BIOS folder, launch a game, open the ScummVM options menu via <kbd>Ctrl</kbd> + <kbd>F5</kbd>, navigate to the **Audio** or **MT-32** tab, and switch your preferred Audio Device to "Roland MT-32 Emulation".
:::

## Game Formats & Launch Shortcuts

Because ScummVM games are traditionally loose directories full of files rather than a single ROM image, you **must** use a shortcut file method so the HippOS front-end knows exactly which game engine to boot.

### Method 1: The `.scummvm` Shortfile (Recommended)
This method is perfect for loose, uncompressed game folders.

1. Create a game folder inside `/userdata/roms/scummvm/` (e.g., `/MonkeyIsland/`).
2. Drop all your uncompressed game files into that folder.
3. Inside that folder, create a blank plain-text file and name it using the game's official shortname followed by the extension `.scummvm` (e.g., `monkey.scummvm`).
4. **Important:** Look up your game's shortname ID on the [Official ScummVM Compatibility List](https://www.scummvm.org/compatibility/). Open your text file, paste that single ID word inside it (e.g., `monkey`), and save it.

### Method 2: The `.squashfs` Compressed Archive
If you want to keep your storage tidy and compress your loose point-and-click game folders into single files, HippOS supports Squashfs containers natively for this system.

1. Compress your loose game folder using the Linux Squashfs utility.
2. The compressed output file must be named exactly like this: `[shortname].squashfs` (e.g., `monkey.squashfs`).
3. Drop the `.squashfs` file directly into `/userdata/roms/scummvm/`.

:::note
When using the `.squashfs` format, HippOS automatically mounts the compressed filesystem on-the-fly and auto-generates the internal launch commands based on the filename ID, meaning no manual text shortcut file is required!
:::

<p class="categories">Categories: <a href="/docs/systems/#computers">Computers</a> · LucasArts</p>
