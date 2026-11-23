---
title: "Troubleshooting"
description: "Fixes for common problems."
---

If your problem isn't here, ask in the **Support** forum for your device on the [Discord](https://hippos-linux.org/discord). Say which HippOS version you're on (**Main Menu** → **System Settings** → **Information**) and what device.

## Won't boot

- **PC**: turn Secure Boot off and make sure the firmware boots in UEFI mode.
- Try another USB port, or write the image again; a bad write is common.
- **Raspberry Pi / RK3326**: try another card. Cheap cards often fail.

## Black screen or frozen splash

- Try another display output or cable.
- On a TV, switch it on before booting.

## No sound

- **Main Menu** → **System Settings** → **Audio Output**: pick the right device.
- Check the volume in **Main Menu** → **Sound Settings**.

## Controller not working

- Re-map it: **Main Menu** → **Controller & Bluetooth Settings** → **Controller Mapping**.
- Bluetooth: remove the pad in the same menu and pair it again.

## Games don't show up

- Check they're in the right folder under `/userdata/roms/` (see [Adding ROMs](/docs/adding-roms/)).
- **Main Menu** → **Game Settings** → **Update Gamelists**.
- Check the file type is supported: see the system's page under [Supported Systems](/docs/systems/).

## A game won't start

- **Main Menu** → **System Settings** → **Missing BIOS Check** for systems that need BIOS files.
- Try another emulator: hold **A** on the game → **Advanced Game Options** → **Emulator**.

## Slow games

See [GPU Setup](/docs/gpu/).

## Can't reach the network share

- Same network? Try the IP address from **Main Menu** → **Network Settings** instead of the name.

## Reporting a bug

See [Reporting Issues](/docs/reporting-issues/).
