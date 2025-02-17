import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Sebastian Sepulveda'),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};