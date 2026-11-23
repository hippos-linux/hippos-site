import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const releases = defineCollection({
	loader: glob({ base: "./src/content/releases", pattern: "*.md" }),
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
	}),
});

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });

export const collections = { releases, docs };
