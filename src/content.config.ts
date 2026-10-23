import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const releases = defineCollection({
	loader: glob({ base: "./src/content/releases", pattern: "*.md" }),
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
	}),
});

export const collections = { blog, releases };
