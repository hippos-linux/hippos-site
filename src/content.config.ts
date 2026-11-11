import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { ARCHES } from "./lib/manifest";

const releases = defineCollection({
	loader: glob({ base: "./src/content/releases", pattern: "*.md" }),
	schema: z.object({
		version: z.string(),
		arch: z.enum(ARCHES).default("amd64"),
		date: z.coerce.date(),
		summary: z.string(),
	}),
});

export const collections = { releases };
