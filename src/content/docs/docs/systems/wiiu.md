---
title: "Wii U"
description: "ROM folder, file types, emulators and BIOS files for Wii U on HippOS."
editUrl: false
---

<aside class="infobox">
<div class="infobox-art" style="background-image:url(/docs/art/worlds/wiiu.webp)"><img src="/docs/art/logos/wiiu.svg" alt="Wii U"></div>
<table><tr><th>Type</th><td>console</td></tr><tr><th>Manufacturer</th><td>Nintendo</td></tr><tr><th>ROM folder</th><td><code>/userdata/roms/wiiu/</code></td></tr><tr><th>File types</th><td><code>.rpx</code> <code>.squashfs</code> <code>.wua</code> <code>.wud</code> <code>.wuhb</code> <code>.wup</code> <code>.wux</code></td></tr><tr><th>Released</th><td>2012</td></tr><tr><th>Runs on</th><td>PC<br>Raspberry Pi and RK3326 handhelds</td></tr><tr><th>Default</th><td>Cemu / RetroArch</td></tr></table>
</aside>

## About

The Wii U is a console by Nintendo. On HippOS it runs on PC, Raspberry Pi and RK3326 handhelds, with Cemu as the default on PC and RetroArch on Raspberry Pi and RK3326.

## Getting ROMs

Put your files in `/userdata/roms/wiiu/`. See [Adding ROMs](/docs/adding-roms/) for ways to copy them to HippOS.

After adding games: **Main Menu** → **Game Settings** → **Update Gamelists**.

## Emulators

| Emulator (★ default) | About | PC | Pi / RK3326 |
|---|---|:-:|:-:|
| **[RetroArch](https://www.retroarch.com/)** | Frontend for libretro cores, with shaders, rewind, netplay and RetroAchievements. Cores: `cemu` ★.<br><small>**Formats:** all · **BIOS:** none</small> |  | ★ |
| **[Cemu](https://cemu.info/)** | Wii U emulator with a native Linux build, Vulkan rendering, graphic packs and mods.<br><small>**Formats:** all · **BIOS:** none</small> | ★ |  |

## Bios Files

| Filename | Required For | Description |
|-| | |
|---|---|
| `keys.txt` | Decrypting encrypted game files | Contains the necessary decryption keys that allow Cemu to load and run encrypted Wii U titles. |
| `otp.bin` | Online functionality (Optional) | System dump containing one-time programmable console data used to emulate online services. |
| `seeprom.bin` | Online functionality (Optional) | Stores console-specific data needed for accurate online communication and identity emulation. |

## Decryption Keys

Depending on the format of your Wii U games, you may need a decryption key file `keys.txt` for them to boot.

- **When is it required?** You must provide keys if your games are in physical disc dump formats like .wud or compressed .wux files.

- **When is it NOT required?** Decrypted folder structures (.rpx / Loadiine format) and compressed .wua archives do not require external keys.

Place your `keys.txt` (and `otp.bin` / `seeprom.bin` if you have them) in `/userdata/saves/Cemu/`

:::note
You will need to source your own keys.txt file as HippOS cannot legally provide you with it. See the [Cemu WIki](https://wiki.cemu.info/wiki/Obtaining_Keys_for_Keys.txt) for more info.
:::

## Game Formats Explained

Wii U games are distributed in a variety of compressed, decrypted, and raw encrypted formats. For the best performance and storage efficiency on HippOS, we recommend using single-file setups:

- **.wua (Highly Recommended):** A modern, single-file compressed archive format developed specifically for Cemu. It cleanly packages the base game, all game updates, and any installed DLC items into one single file. This is the absolute best choice for keeping your `/userdata/roms/wiiu/` directory clean and organized.
- **Loadiine / .rpx (Recommended):** An unpacked, completely decrypted game directory structure containing three core subfolders: `/code/`, `/content/`, and `/meta/`. HippOS scans these structures and executes the main `[gamename].rpx` binary hidden inside the `code` folder to launch the title. 
- **.wud / .wux:** Raw (`.wud`) or losslessly compressed (`.wux`) physical disc dump images. These formats represent the raw sector layouts of a retail disc drive. **Note:** These files are bulky and strictly require a configured `keys.txt` file placed in your system bios directory to decrypt and boot successfully.
- **.wuhb:** Homebrew executables built for the Wii U system. These files run directly inside Cemu without any additional file structure or encryption keys required.

### Encrypted Network & Console Installation Formats (WUP / NUS)

If you have sourced games directly from the Nintendo Update Servers (NUS), or dumped raw packages directly from a physical console, they are stored as **WUP (Wii U Package)** files. These appear as a loose folder full of raw encrypted fragments:

- **.app / .h3 / title.tmd / title.cert:** These individual files make up the encrypted WUP installation package. 
- **How to use them:** Cemu **cannot** play or stream these raw files directly from your ROM folder. To use them, you must open the desktop Cemu user interface manually, navigate to **File** → **Install Game/Update/DLC**, and select the `title.tmd` file inside the folder. Cemu will decrypt the package and install the files permanently into your virtual internal MLC storage directory (`/userdata/saves/wiiu/`). Once the installation is complete, the original WUP source folder can be safely deleted to free up space.

<p class="categories">Categories: <a href="/docs/systems/#consoles">Consoles</a> · Nintendo</p>
