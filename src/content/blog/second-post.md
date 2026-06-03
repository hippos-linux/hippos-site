---
title: "50+ emulators, all built from source"
description: "Every emulator in HippOS is compiled from upstream source against the runtime OS. No AppImages, no Flatpaks, no stale binaries."
pubDate: "May 20 2026"
heroImage: "/hippos-wallpaper-tech.png"
---

Most gaming OS distributions ship emulators as pre-built binaries, AppImages, or Flatpaks pulled
from wherever they could find them. HippOS compiles every emulator from upstream source as part of
the OS build. The emulator lineup and the OS are versioned together.

## What that means in practice

Every emulator binary is built against the exact library versions in the HippOS runtime. No
compatibility shims, no bundled runtimes that shadow the system. When you launch Dolphin or RPCS3,
you're running a binary that was compiled against the same Mesa, libvulkan, and libc that the rest
of the OS uses.

Build reproducibility is a property of the whole image, not just the OS base.

## The current lineup

HippOS ships emulators across most platforms you'd expect:

- **Nintendo**: melonDS (DS), Azahar (3DS), Dolphin (Wii/GC), Cemu (Wii U), Eden (Switch)
- **Sony**: DuckStation (PS1), PCSX2 (PS2), PPSSPP (PSP), Vita3K (PS Vita), RPCS3 (PS3), shadPS4 (PS4)
- **Microsoft**: xemu (Xbox), Xenia (Xbox 360)
- **Sega**: Supermodel (Model 3), redream (Dreamcast), flycast (Dreamcast)
- **Classic**: MAME, FBNeo, ScummVM, DOSBox Staging, and many more

RetroArch is also included for cores that don't have a strong standalone option.

## Configgen, not patched binaries

Each emulator launches through a Python-based configgen layer that generates per-emulator
configuration on the fly: controller mappings, video backend settings, save and screenshot paths,
BIOS locations, CRT parameters. The emulator binaries themselves are unmodified upstream builds —
the configgen adapts to them rather than patching them. When an emulator updates, HippOS rebuilds
it and the configgen just works. No downstream patches to maintain.
