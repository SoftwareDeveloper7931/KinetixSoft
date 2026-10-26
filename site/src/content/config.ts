import { defineCollection, z } from 'astro:content';

const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()),
    category: z.enum([
      'Getting Started',
      'Authentication',
      'Firebase',
      'Supabase',
      'Security',
      'Payments',
      'AI Integrations',
      'Email & Marketing',
      'UI & Design',
      'Custom Code',
      'Workflow & Teams',
      'Performance'
    ]),
    author: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    readingTime: z.string(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    keyTakeaways: z.array(z.string()).default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).default([]),
    relatedArticles: z.array(z.string()).default([]),
    isPillar: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

export const collections = {
  tutorials: tutorialsCollection,
};
