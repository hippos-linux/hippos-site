---
title: "Storage"
description: "External drives, network shares and keeping your library tidy."
---

## External drives and cards

Plug in a USB drive or SD card with `roms`, `bios` or `saves` folders and HippOS merges them into your library. Games on it show up next to the internal ones, marked with a drive icon. Folder names used by other systems are understood (for example `genesis` is read as `megadrive`).

New files, such as saves and games you copy in, go to a drive that already has that system's folder, the one with the most free space. A drive that's nearly full (under 100 MB free) isn't used for new files.

**Main Menu** → **System Settings** → **Smart Storage** → **External Devices** lists and ejects drives.

## Network shares

Games can stay on a NAS or another PC: **Smart Storage** → **Network Sources** finds shares on your network and adds them to your library.

## Smart Storage

**Smart Storage** also helps keep space free:

- **Scan now** checks your library.
- **Duplicates** lists games stored more than once.
- **Large files** lists the biggest files.
- **Cache / shaders** clears caches that emulators rebuild by themselves.

## Installing to another disk

On a PC, **Main Menu** → **System Settings** → **Install on a new disk** moves HippOS onto an internal drive. See [Installation](/docs/installation/).
