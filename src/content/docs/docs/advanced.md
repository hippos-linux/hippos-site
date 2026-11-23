---
title: "SSH and config files"
description: "Logging in over the network and editing settings by hand."
---

## SSH

**Main Menu** → **System Settings** → **Services** turns SSH on or off. It's on by default on the PC and Raspberry Pi images and off on RK3326.

Log in as `hippos` (password `linux`):

```
ssh hippos@hippos
```

Use the IP address from **Main Menu** → **Network Settings** if the name doesn't resolve. `hippos` can use `sudo`.

:::caution
Change the password if your HippOS machine is reachable from outside your home network: **Main Menu** → **System Settings** → **Security**.
:::

## Config files

- `/userdata/system/hippos.conf`: HippOS's settings (the same ones the menus change).
- `/userdata/system/configs/<emulator>/`: each emulator's own configuration.

The menus cover most things; edit these files only for settings the menus don't have. HippOS rewrites some emulator settings at every launch from its own settings, so set those in the menus.
