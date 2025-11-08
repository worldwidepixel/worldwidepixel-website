import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogPostsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		authors: z.array(
			z.object({
				name: z.string(),
				avatar: z.string(),
				to: z.string(),
			}),
		),
		image: z.object({
			src: z.string(),
		}),
		tags: z.array(z.string()),
		hidden: z.boolean(),
	}),
});

const musicCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/music" }),
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		colour: z.string(),
		links: z.array(
			z.object({
				name: z.string(),
				to: z.string(),
			}),
		),
	}),
});

export const collections = {
	posts: blogPostsCollection,
	music: musicCollection,
};
