import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    excerpt: z.string(),
    heroImage: z.string().optional(),
  }),
  slug: ({ id }) => id.split('/').pop()?.toLowerCase() || '',
});

export const collections = {
  blog: blogCollection,
};
