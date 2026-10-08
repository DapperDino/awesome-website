import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const gallery = defineCollection({
	// Each gallery item is a JSON file in `src/content/gallery/`.
	loader: glob({ base: './src/content/gallery', pattern: '**/*.json' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			year: z.number().int(),
			// Path to a local image, relative to the JSON file.
			image: image(),
		}),
});

export const collections = { gallery };
