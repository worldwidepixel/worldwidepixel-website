import { z, defineCollection } from "astro:content";

const blogPostsCollection = defineCollection({
	type: "content",
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

export const collections = {
	posts: blogPostsCollection,
};
