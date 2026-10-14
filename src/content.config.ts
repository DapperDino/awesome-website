import { defineCollection, reference } from 'astro:content';
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

// A named group of gallery pieces, with its own page that can be written about in the markdown body.
const galleryCollections = defineCollection({
	loader: glob({ base: './src/content/collections', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			// One-line teaser shown on the gallery page.
			summary: z.string(),
			// Cover image for the gallery banner and the collection page.
			image: image(),
			imageAlt: z.string().optional(),
		}),
});

const gallery = defineCollection({
	loader: glob({ base: './src/content/gallery', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			year: z.number().int(),
			mediums: z.array(z.string()).default([]),
			themes: z.array(z.string()).default([]),
			image: image(),
			// Optional: the collection (see src/content/collections) this piece belongs to.
			collection: reference('collections').optional(),
		}),
});

const eventCollection = (dir: string) =>
	defineCollection({
		loader: glob({ base: `./src/content/${dir}`, pattern: '**/*.md' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				summary: z.string(),
				startDate: z.coerce.date(),
				endDate: z.coerce.date().optional(),
				location: z.string(),
				image: image(),
				imageAlt: z.string().optional(),
				link: z.object({ label: z.string(), url: z.string().url() }).optional(),
			}),
	});

const exhibitions = eventCollection('exhibitions');
const residencies = eventCollection('residencies');
const workshops = eventCollection('workshops');

export const collections = { about, collections: galleryCollections, gallery, home, exhibitions, residencies, workshops };
