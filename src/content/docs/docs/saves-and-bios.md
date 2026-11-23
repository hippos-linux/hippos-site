---
title: "Saves and BIOS"
description: "Where saves and BIOS files go, and how to back them up."
---

## Saves

Saves and save states are in `/userdata/saves/<system>/`, for example `/userdata/saves/psx/`. Emulators that keep their own save data (memory cards, virtual hard drives) keep it there too.

## BIOS files

BIOS files go in `/userdata/bios/`. Each system's page lists the files it uses, their MD5 checksums and which emulator needs them.

**Main Menu** → **System Settings** → **Missing BIOS Check** shows what's missing for each system.

## Backing up

**Main Menu** → **System Settings** → **Backup User Data** copies your data to another drive. Your saves are also reachable over the network share (`\\HIPPOS\userdata\saves`).

System updates never touch `/userdata`.
