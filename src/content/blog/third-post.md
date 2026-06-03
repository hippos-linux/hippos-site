---
title: "Your games survive every OS update"
description: "HippOS separates the OS from your data. ROMs, saves, BIOS files, and configs live on their own subvolume and never get touched by updates."
pubDate: "May 23 2026"
heroImage: "/hippos-wallpaper-tech.png"
---

The worst thing a gaming OS can do is lose your saves. HippOS is built around one principle: the
system layer and the user data layer are completely separate. Updating the OS never touches your
games, saves, or configuration.

## How the layout works

HippOS uses a single btrfs volume with two subvolumes. The `@rootfs` subvolume holds the OS,
emulator binaries, and everything that ships with HippOS. The `@userdata` subvolume — mounted at
`/userdata` — holds everything that belongs to you.

When an OS update lands, it replaces the `@rootfs` subvolume atomically. The `@userdata` subvolume
is never written to during an update. Your ROMs, saves, BIOS files, screenshots, themes, and
emulator configs are exactly where you left them.

## What lives in /userdata

```
/userdata/
  roms/          your ROM library (one folder per system)
  saves/         emulator save files
  bios/          BIOS and firmware files
  screenshots/   screenshots from EmulationStation and emulators
  system/        emulator configs, input maps, HippOS settings
  themes/        EmulationStation themes
```

Everything EmulationStation and the emulators need to find your library and remember your settings
points here. You can also drop ROMs on a USB drive or a second internal disk — HippOS uses
mergerfs to pool multiple storage locations into a single unified library. EmulationStation sees
one ROM collection regardless of where the files actually live.

## Updates are atomic

HippOS updates swap the `@rootfs` subvolume in place. The updater downloads the new system image,
writes it to a fresh subvolume, then makes it the active boot target. If something goes wrong, the
previous subvolume is still there to fall back to. Your `/userdata` is never part of the swap.
