---
title: "First Boot"
description: "What happens the first time HippOS starts, and what to set up."
---

The first boot takes a little longer: HippOS grows its data partition to fill the drive and sets itself up. Leave it until EmulationStation appears.

## Controller

Most controllers work straight away. If buttons are wrong, or yours isn't recognised:

**Main Menu** → **Controller & Bluetooth Settings** → **Controller Mapping**

Bluetooth pads: see [Controllers](/docs/controllers/).

## Wi-Fi

**Main Menu** → **Network Settings** → turn on **Enable Wi-Fi**, then enter the network name and key. Wired networks connect by themselves.

## Add games

See [Adding ROMs](/docs/adding-roms/). Some systems also need BIOS files, which go in `/userdata/bios`.

## What's on the drive

| Partition | What it is |
|---|---|
| **EFI** | Boot files |
| **Tools** | A small FAT partition with a Windows driver for reading HippOS's data partition (`btrfs_on_windows`) |
| **HippOS** | The system and your data (`/userdata`: games, saves, BIOS, settings) |

Updates replace the system only. Everything in `/userdata` stays.

## Next

- [Adding ROMs](/docs/adding-roms/)
- [Controllers](/docs/controllers/)
- [Settings](/docs/settings/)
