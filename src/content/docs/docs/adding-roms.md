---
title: "Adding ROMs"
description: "Where games go and the ways to copy them to HippOS."
---

Games go in `/userdata/roms/<system>/`, for example `roms/snes` or `roms/psx`. Each system's folder name is on its page under [Supported Systems](/docs/systems/).

## Over the network

HippOS shares its data folder over Samba (SMB).

- **Windows**: open `\\HIPPOS\userdata` in File Explorer.
- **macOS / Linux**: connect to `smb://hippos/userdata`.

Copy games into the matching folder under `roms`. If the name doesn't resolve, use the IP address shown in **Main Menu** → **Network Settings**.

## External drives

Plug in a USB drive or SD card that has its own `roms`, `bios` or `saves` folders. HippOS merges them into your library automatically, so the games show up next to the internal ones. To manage drives:

**Main Menu** → **System Settings** → **Smart Storage** → **External Devices**

Folder names used by other systems are understood, so a card set up for dArkOS or RetroBat works without renaming folders (for example `genesis` is read as `megadrive`, `sfc` as `snes`).

## Network shares

Games can also stay on a NAS or another PC:

**Main Menu** → **System Settings** → **Smart Storage** → **Network Sources**

## Windows, directly

The **Tools** partition on the HippOS drive has a Windows driver (`btrfs_on_windows`) that lets Windows open the data partition. Install it, then copy games into `roms\<system>\` while HippOS isn't running.

## After adding games

**Main Menu** → **Game Settings** → **Update Gamelists**

## BIOS files

Some systems need BIOS files you supply yourself. Put them in `/userdata/bios`. **Main Menu** → **System Settings** → **Missing BIOS Check** shows what's missing.
