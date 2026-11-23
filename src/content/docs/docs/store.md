---
title: "The store"
description: "Install apps, ports, web apps, shaders and more from EmulationStation."
---

**Main Menu** → **Updates & Downloads** → **Content Downloader**

The store lists what HippOS can install for you, by category: apps (Flatpaks and Debian packages), ports, web apps, shaders and cheats. Pick an item to install or remove it; downloads run in a queue in the background.

## Search

**Search** looks through the HippOS catalogue and also all of Flathub and Debian's apps, so you can install software that isn't in the catalogue.

## Where things go

- Flatpak apps install for your user and show up under **Linux Apps** or **Linux Games**.
- Debian packages you install are remembered and put back after a system update.
- Ports and web apps appear in their own systems.

## Updates

**Update** in the store updates what you installed from it. System and emulator updates are separate, see [Updates](/docs/updates/).

## HippOS Store on the desktop

On the desktop, **HippOS Store** is a full software centre with the same catalogue plus everything on Flathub and Debian, and PC ports of console games (recomps). It works with a controller, and is also in EmulationStation under **Desktop Shortcuts**.

- **Search, categories and sorting**: sort by most installed, top rated, name or recently updated. The source filter hides Flathub, Debian or the HippOS catalogue if you only want some of them. Ratings and reviews come from the Flathub and GNOME review service.
- **One entry per app**: when an app is available from more than one source, pick the source on its page.
- **Included with HippOS**: emulators and apps that come with HippOS are marked as included, with an **Open** button instead of a second copy.
- **Recomps**: native PC versions of console games, downloaded from their own releases. You need your own copy of the game's data for most of them; each page says what it needs. They show up under **Linux Games**.
- **Updates**: the update button at the top (or right-click the HippOS Store menu entry → **Updates**) lists HippOS, EmulationStation and emulator updates above your app updates. **Update everything** does the lot, then offers a restart if one is needed. Debian packages are only updated if you installed them yourself; the rest come with HippOS updates.
- **Light or dark**: the button at the top switches theme. Dark is the default.
- Opening a `.flatpak` or `.flatpakref` file installs it through the store.
