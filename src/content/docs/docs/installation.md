---
title: "Installation"
description: "Download HippOS, write it to a drive and boot it on a PC, Raspberry Pi or RK3326 handheld."
---

HippOS runs from a USB drive, an SD card or an internal disk. Pick the image for your hardware, write it to a drive, and boot.

| Hardware | Image | Boots from |
|---|---|---|
| x86_64 PCs, laptops and PC handhelds (Steam Deck, ROG Ally, Legion Go, AYANEO…) | **PC** | USB drive or external SSD, then optionally an internal disk |
| Raspberry Pi 4 and 5 | **Raspberry Pi** | microSD card or USB drive |
| RK3326 handhelds such as the R36S, RG351M/V, Odroid Go and RGB10 (experimental) | **RK3326** | microSD card |

## What you need

- A drive of **32 GB or more**: a USB drive or external SSD for a PC, a microSD card (A2 rated is faster) or USB drive for a Pi, a microSD card of **16 GB or more** for an RK3326 handheld.
- On a PC: a 64-bit x86 CPU, 4 GB of RAM and **UEFI** boot. See [hardware](https://hippos-linux.org/hardware) for recommended specs.

## 1. Download

Get the image for your hardware from **[hippos-linux.org](https://hippos-linux.org)**. You don't need to extract it.

## 2. Write it to the drive

:::caution
Writing the image erases everything on the drive. Check you've picked the right one.
:::

**Raspberry Pi Imager** (Linux, Windows, macOS; version 2.0.11 or newer)
1. **Operating System** → **Use custom** → pick the HippOS image.
2. **Storage** → pick your drive or card.
3. Say **No** to OS customisation, then write.

**Rufus** (Windows; version 4.7 or newer)
1. Pick your drive, click **Select** and choose the image.
2. Press **Start**. If Rufus asks how to write it, choose **DD Image** mode.

## 3. Boot

**PC**
1. In your firmware settings, turn **Secure Boot off**. HippOS doesn't boot with it on.
2. Plug the drive in, open your PC's boot menu (often **F8**, **F11** or **F12** at power-on) and pick the drive.

**Raspberry Pi**: put the card or drive in and switch on.

**PC handheld**: the same, from the handheld's boot menu. On a Steam Deck or ROG Ally, hold **Volume Down** and press **Power**.

**RK3326 handheld**: first set up the screen (see [RK3326 handhelds](/docs/devices/rk3326/#set-up-the-screen)), then put the card in the first card slot and switch on.

On the first boot HippOS expands to fill the drive and sets itself up, so it takes longer than usual. Then you land in EmulationStation. See [First Boot](/docs/first-boot/).

## 4. Install to an internal disk (PC, optional)

HippOS runs fine from USB. To move it onto an internal drive:

**Main Menu** → **System Settings** → **Install on a new disk**

You can wipe a whole disk, use an existing partition, or use free space next to another OS. Each option needs at least 16 GB.

## Black screen or frozen splash?

Try another display output first. If that doesn't help, see [Troubleshooting](/docs/troubleshooting/).
