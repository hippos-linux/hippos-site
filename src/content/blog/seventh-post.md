---
title: "Play Windows games with Wine and Proton"
description: "HippOS includes Wine with multiple runners. Windows games and installers appear in EmulationStation just like everything else."
pubDate: "Jun 03 2026"
heroImage: "/hippos-wallpaper-tech.png"
---

HippOS includes a full Wine integration. Windows games appear as a system in EmulationStation,
launch from a controller, and store their data in `/userdata` alongside everything else.

## Runners

HippOS ships three runners out of the box: wine-tkg, wine-proton, and umu. You can switch the
active runner in HippOS settings, or override it per-game. Additional runners — Proton builds,
GE-Proton, Kron4 — can be downloaded with ProtonPlus (included via Flatpak) and dropped into
`/userdata/system/wine-runners/`. HippOS picks them up automatically.

## Bottles

Each game runs in its own Wine bottle (prefix) stored in `/userdata/wine-bottles/`. Bottles are
isolated from each other, so a broken install in one game can't affect another.

## Installing games

HippOS has a separate `windows_installers` system in EmulationStation for `.exe`, `.msi`, and
`.iso` installers. Run the installer from EmulationStation, complete setup, and the game appears
in the `windows` system on your next library scan.

## Performance flags

DXVK, fsync, and esync are all configurable in HippOS settings and apply to every Wine launch.
DXVK is on by default. If a game works better without it, turn it off in per-game settings.

## Windows game data lives in /userdata

Bottles are stored under `/userdata/wine-bottles/`, so save files and installed games survive OS
updates the same way everything else does.
