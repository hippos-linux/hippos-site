import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const releases = defineCollection({
	loader: glob({ base: "./src/content/releases", pattern: "*.md" }),
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
	}),
});

export const collections = { releases };
