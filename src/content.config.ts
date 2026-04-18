import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    description: z.string(),
    showNotes:   z.array(z.object({
      label: z.string(),
      url:   z.string(),
    })).optional(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experiments' }),
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string(),
    tags:        z.array(z.string()).default([]),
    embedUrl:    z.string().optional(),
    embedType:   z.enum(['iframe', 'component', 'canvas']).optional(),
    relatedPost: z.string().optional(),
  }),
});

export const collections = { blog, experiments };
