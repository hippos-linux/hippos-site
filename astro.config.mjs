// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://hippos-linux.org",
	integrations: [
		starlight({
			title: "HippOS Docs",
			logo: { src: "./src/assets/hippos-logo.png", alt: "HippOS" },
			favicon: "/hippos-logo.png",
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/hippos-linux" },
				{ icon: "discord", label: "Discord", href: "https://hippos-linux.org/discord" },
			],
			editLink: { baseUrl: "https://github.com/hippos-linux/hippos-site/edit/main/" },
			customCss: ["./src/styles/docs.css"],
			components: {
				ThemeProvider: "./src/components/docs/ThemeProvider.astro",
				ThemeSelect: "./src/components/docs/ThemeSelect.astro",
			},
			disable404Route: true,
			lastUpdated: true,
			sidebar: [
				{ label: "Start here", items: [{ label: "Overview", link: "/docs/" }, "docs/installation", "docs/first-boot", "docs/adding-roms", "docs/updates"] },
				{ label: "Devices", items: ["docs/devices/pc-handhelds", "docs/devices/raspberry-pi", "docs/devices/rk3326"] },
				{ label: "Using HippOS", items: ["docs/controllers", "docs/display", "docs/gpu", "docs/settings", "docs/desktop", "docs/storage", "docs/saves-and-bios"] },
				{ label: "Games and apps", items: ["docs/pc-games", "docs/portmaster", "docs/store", "docs/scraping", "docs/retroachievements", "docs/netplay"] },
				{ label: "Systems", items: [{ label: "All systems", link: "/docs/systems/" }, { label: "Table of systems", link: "/docs/systems/list/" }] },
				{ label: "Help", items: ["docs/troubleshooting", "docs/reporting-issues", "docs/community", "docs/advanced"] },
			],
		}),
		mdx(),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
