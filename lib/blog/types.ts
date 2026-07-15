import { PublishStatus } from "@prisma/client";

export interface BlogPostProfile {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string | null;
  author: string;
  category: string;
  tags: string[];
  image?: string | null;
  status: PublishStatus;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPostInput {
  slug: string;
  title: string;
  excerpt: string;
  content?: string | null;
  author: string;
  category: string;
  tags?: string[];
  image?: string | null;
  status?: PublishStatus;
  publishedAt?: Date | string | null;
}

export interface BlogQueryOptions {
  category?: string;
  status?: PublishStatus;
  limit?: number;
}
