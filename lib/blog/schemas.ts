import { z } from "zod";

export const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().optional().nullable(),
  author: z.string().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()).optional().default([]),
  image: z.string().optional().nullable(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional().default("DRAFT"),
  publishedAt: z.union([z.string().datetime().optional(), z.literal(null)]).optional().nullable(),
});

export const blogPostUpdateSchema = blogPostSchema.partial().extend({
  slug: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  excerpt: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
});
