---
title: "Install Android apps with Waydroid"
description: "HippOS ships with Waydroid pre-integrated. Android apps launch straight from EmulationStation alongside your emulators."
pubDate: "Jun 01 2026"
heroImage: "/hippos-wallpaper-tech.png"
---

HippOS includes Waydroid — a full Android container that runs inside the OS alongside everything
else. Android apps appear as a system in EmulationStation just like any other, so you can launch
them from your controller without touching a desktop.

## How it works

Waydroid runs a full Android image inside a Linux container using hardware virtualisation. On
first boot, HippOS initialises the Waydroid image automatically. Once that's done, the Android
system is ready to use — no manual setup required.

Launching an Android app from EmulationStation starts a Weston compositor session, launches the
app inside the container, and tears everything down cleanly when you exit. The hotkey context
switches automatically so your controller inputs reach the Android app correctly.

## GAPPS included

HippOS initialises Waydroid with the GAPPS variant, so you get Google Play Services out of the box.
Apps that depend on Google services work without extra configuration.

## Where apps live

Android app packages (APKs) live in `/userdata/roms/android` — the same `/userdata` partition
that holds all your other games. They survive OS updates just like everything else.

## Limitations

Waydroid requires hardware virtualisation (KVM) and runs on x86_64 only. It works well on most
modern handhelds and living-room PCs. Virtual machines and some stripped-down hardware without
KVM support will not run it — HippOS handles that gracefully and skips initialisation rather
than failing at boot.
