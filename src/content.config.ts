import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const about = defineCollection({
	loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			heading: z.string(),
			photo: image(),
			photoAlt: z.string(),
		}),
});

const home = defineCollection({
	loader: glob({ base: './src/content/home', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			tiles: z.array(z.object({ label: z.string(), image: image() })).min(1),
		}),
});

const gallery = defineCollection({
	loader: glob({ base: './src/content/gallery', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			year: z.number().int(),
			image: image(),
		}),
});

export const collections = { about, gallery, home };
