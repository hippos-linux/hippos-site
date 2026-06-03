---
title: "Your Steam library lives in EmulationStation"
description: "HippOS integrates Steam directly into EmulationStation. Every game in your Steam library appears as a launchable entry — no desktop required."
pubDate: "Jun 03 2026"
heroImage: "/hippos-wallpaper-tech.png"
---

HippOS ships Steam as a first-class system in EmulationStation. Your installed Steam games appear
alongside your emulator library, launch from a controller, and return you to EmulationStation when
you quit. No desktop session, no mode-switching.

## How it works

On each boot, HippOS reads your Steam manifests and generates a launcher entry for every installed
game. Each entry is a small file in `/userdata/roms/steam/` that holds the Steam app ID. When you
select a game from EmulationStation, HippOS launches Steam with that app ID directly — Steam opens
in gamepad UI mode and starts the game.

When you quit Steam, HippOS re-runs the sync so any games you installed during that session appear
in your library immediately on the next visit to the Steam system.

## Big Picture and Deck mode

Selecting the Steam entry in EmulationStation without a specific game launches Steam in Big Picture
mode. If you have a Steam Deck or prefer the Deck UI, you can enable Deck mode in HippOS settings —
this switches Steam to its full gamepad interface.

## Overlays

MangoHud and vkBasalt work with Steam games. Toggle them in HippOS settings and they apply to every
Steam launch without touching any per-game configuration.

## Your Steam data lives in /userdata

Steam installs games to `/userdata/.steam/` by default. That directory is on the `@userdata`
subvolume, so your Steam library survives OS updates exactly like your ROMs and saves do.
