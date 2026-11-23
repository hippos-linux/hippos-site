---
title: "PC games"
description: "Steam, Lutris, Heroic and Windows games on HippOS."
---

## Steam

Steam is in the **Steam** system. Sign in once; installed games then appear in **Steam** in EmulationStation, along with Steam Big Picture. Install and update games from Steam itself.

## Lutris and Heroic

Games installed in Lutris appear in the **Lutris** system. Heroic covers Epic Games, GOG and Amazon: start it from the **Heroic** system.

## Windows games

Windows games run through Wine in the **Windows** system (`/userdata/roms/windows/`):

- A folder ending in `.pc` with the game's `.exe` inside.
- A `.wine` folder: a game already installed in its own Wine prefix.
- `.wsquashfs`: a `.wine` folder packed into one compressed file, mounted when the game starts.

### Installing with an installer

Put the installer (`.exe`, `.msi` or a disc `.iso`) in `/userdata/roms/windows_installers/` and start it from **Windows Installers**. The installed game becomes a new `.wine` entry in **Windows**.

### Wine versions

Different Wine builds suit different games. Install more from the [store](/docs/store/), then pick one per game in **Advanced Game Options** (hold **A** on the game).
