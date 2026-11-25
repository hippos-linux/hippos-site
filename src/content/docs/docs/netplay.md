---
title: "Netplay"
description: "Play multiplayer games online from the netplay lobby."
---

## Turn it on

**Main Menu** → **Game Settings** → **Netplay Settings**

Turn **Enable netplay** on and set a **Nickname**. **Use relay server** helps RetroArch games when your router blocks incoming connections; pick the server closest to you.

When you host, HippOS asks your router to open the game's port (UPnP). If your router has UPnP turned off, other players may not be able to reach you.

## The netplay lobby

Open it from **Main Menu** → **Netplay Lobby**, or press **X** on the system carousel.

The left side lists games people are hosting, grouped by system. Only games you have are shown, and games where your file matches the host's are marked **Same ROM**. Press **A** on a game to join it.

The list includes HippOS players, RetroArch's public lobby, Dolphin's public lobby, public Riverhorse games and games on your local network. **Filter** switches between all games and HippOS games only.

The right side is the chat. Everyone in the lobby shares **Global chat**, and **Chat Room** switches to a room for one system. Press **Say** to send a message. Press **A** on a message to hide that player; **Netplay Settings** → **Show hidden chat players again** brings them back.

**Name** changes your nickname without leaving the lobby.

To find players or arrange a game ahead of time, use **#netplay** on the [Discord](https://hippos-linux.org/discord).

## Hosting a game

Press **Host a game** in the lobby, then pick a system and a game. You can also host from the game list: hold **A** on a game → **Start a netplay game** → **Host a netplay game**.

- **Flycast (Dreamcast)**: you stay in the lobby while you wait, and your game shows as **Your game, waiting for a challenger**. Before you start, choose **Accept players automatically**, or leave it off to get an **Accept** / **Decline** prompt when someone joins. The game starts on both sides once a player is accepted. Press **A** on your game to stop hosting.
- **Everything else**: the game starts straight away and waits for players inside the emulator. Games hosted from the lobby are always listed in it. When you host from the game list, turn on **Publicly announce game** in the same menu so it shows in other people's lobbies.

## Joining a game

Press **A** on a game in the lobby. For Flycast games you wait for the host to accept; press **Cancel** to give up. Every player needs the same game file.

## What works

| Emulator | Systems | Notes |
|---|---|---|
| RetroArch | Most RetroArch-based systems | Every player needs the same core. Spectators can watch. |
| Flycast | Dreamcast | Rollback netplay (GGPO) for two players. |
| PPSSPP | PSP | Ad hoc multiplayer games. |
| Azahar | 3DS | Local wireless games through a room. |
| Dolphin | GameCube, Wii | The game starts once another player has joined. Every player needs the same Dolphin version. |
| Riverhorse | PlayStation | Rollback netplay for two players, or up to four in multitap games. Spectators can watch. |

## PlayStation (Riverhorse)

Riverhorse games hosted from the lobby show up in it like any other. Riverhorse also has its own netplay panel in game. With Riverhorse versions after 1.2.0, games hosted from that panel show up in the lobby too, and **Publicly announce game** also lists your game in Riverhorse's public list, so Riverhorse players outside HippOS can join. All players get the host's settings and BIOS.
