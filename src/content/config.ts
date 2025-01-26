import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()),
    readingTime: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    category: z.enum(['Web Development', 'Mobile App', 'Open Source', 'Machine Learning']),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    completionDate: z.date(),
  }),
});

export const collections = { blog, projects };