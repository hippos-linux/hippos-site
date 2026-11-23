---
title: "GPU Setup"
description: "Which graphics drivers HippOS uses."
---

Graphics drivers are chosen automatically at boot. There's nothing to install.

| GPU | Driver |
|---|---|
| **AMD** and **Intel** | Mesa's open OpenGL and Vulkan drivers. The main targets. |
| **NVIDIA GTX 16 / RTX 20 and newer** | NVIDIA's open kernel driver |
| **Older NVIDIA** | The matching legacy branch (580, 470, 390 or 340), picked at boot; nouveau if none fits |
| **Hybrid laptops** (AMD/Intel + NVIDIA) | Set up at boot |
| **Raspberry Pi** | V3D (OpenGL ES and Vulkan) |
| **RK3326 handhelds** | Panfrost (OpenGL ES) |

Most newer emulators expect Vulkan.

## Slow games

- Check the emulator: hold **A** on a game → **Advanced Game Options** → **Emulator**.
- Lower the game resolution or turn off shaders (see [Display](/docs/display/)).
- Check cooling: a throttling CPU or GPU slows everything down.

If the wrong GPU or driver seems to be in use, ask in **#pc** on the [Discord](https://hippos-linux.org/discord) and say what GPU you have.
