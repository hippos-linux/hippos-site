---
title: "Install any Flatpak app from Bazaar"
description: "HippOS ships Bazaar — a full Flatpak app store you can browse and install from without touching a terminal."
pubDate: "Jun 01 2026"
heroImage: "/hippos-wallpaper-tech.png"
---

HippOS includes Bazaar, a native Flatpak app store with the full Flathub catalogue. You can browse,
install, and remove apps without touching a terminal or desktop.

## Why Flatpak

Emulators in HippOS are compiled from source and tightly integrated with the OS. But there are
things outside that scope — game launchers, streaming clients, productivity tools, utilities —
where Flatpak makes more sense than maintaining a custom build.

Flatpak apps are sandboxed and self-contained. They don't interfere with the OS or each other,
and they install to the system partition where they persist across updates.

## What ships by default

On first boot, HippOS installs a curated set of apps automatically:

- **Heroic Games Launcher** — Epic and GOG games
- **Bottles** — run Windows games and apps
- **ProtonPlus** — manage Proton and Wine versions
- **Bazaar** — the Flatpak store itself
- **Flatseal** — manage Flatpak permissions
- **Gear Lever** — manage AppImages
- **Mission Center** — system monitor
- **LocalSend** — local file transfer
- **Touché** — touchscreen gesture configuration

## Installing more

Open Bazaar from EmulationStation, browse the Flathub catalogue, and hit install. No password
prompt, no terminal. The app is available immediately after install.

Installed Flatpak apps automatically appear in EmulationStation as launchable entries in the
Flatpak system — the same sync that keeps your emulator library up to date runs whenever a Flatpak
app is installed or removed.
