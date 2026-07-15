import type { BlogPost as PrismaBlogPost } from "@prisma/client";
import { prisma } from "@/lib/prisma/prisma";
import type { BlogPostInput, BlogPostProfile, BlogQueryOptions } from "./types";

export function mapBlogPost(post: PrismaBlogPost): BlogPostProfile {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author,
    category: post.category,
    tags: post.tags,
    image: post.image,
    status: post.status,
    publishedAt: post.publishedAt,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };
}

function normalizeInput(input: BlogPostInput) {
  return {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content || null,
    author: input.author,
    category: input.category,
    tags: input.tags ?? [],
    image: input.image || null,
    status: input.status || "DRAFT",
    publishedAt: input.publishedAt ? new Date(input.publishedAt) : null,
  };
}

export async function getBlogPosts(options?: BlogQueryOptions): Promise<BlogPostProfile[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        ...(options?.category ? { category: options.category } : {}),
        ...(options?.status ? { status: options.status } : {}),
      },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: options?.limit,
    });
    return posts.map(mapBlogPost);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function getPublishedBlogPosts(limit?: number): Promise<BlogPostProfile[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: limit,
    });
    return posts.map(mapBlogPost);
  } catch (error) {
    console.error("Failed to fetch published blog posts:", error);
    return [];
  }
}

export async function getManagedBlogPosts(): Promise<BlogPostProfile[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: [{ createdAt: "desc" }],
    });
    return posts.map(mapBlogPost);
  } catch (error) {
    console.error("Failed to fetch managed blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostProfile | null> {
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    return post ? mapBlogPost(post) : null;
  } catch (error) {
    console.error("Failed to fetch blog post by slug:", error);
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      select: { slug: true },
    });
    return posts.map((p) => p.slug);
  } catch (error) {
    console.error("Failed to fetch blog slugs:", error);
    return [];
  }
}

export async function createBlogPost(input: BlogPostInput) {
  const post = await prisma.blogPost.create({ data: normalizeInput(input) });
  return mapBlogPost(post);
}

export async function updateBlogPost(slug: string, input: Partial<BlogPostInput>) {
  const data: Record<string, unknown> = {};

  if (input.slug !== undefined) data.slug = input.slug;
  if (input.title !== undefined) data.title = input.title;
  if (input.excerpt !== undefined) data.excerpt = input.excerpt;
  if (input.content !== undefined) data.content = input.content || null;
  if (input.author !== undefined) data.author = input.author;
  if (input.category !== undefined) data.category = input.category;
  if (input.tags !== undefined) data.tags = input.tags;
  if (input.image !== undefined) data.image = input.image || null;
  if (input.status !== undefined) data.status = input.status;
  if (input.publishedAt !== undefined) {
    data.publishedAt = input.publishedAt ? new Date(input.publishedAt) : null;
  }

  const post = await prisma.blogPost.update({
    where: { slug },
    data,
  });
  return mapBlogPost(post);
}

export async function deleteBlogPost(slug: string) {
  await prisma.blogPost.delete({ where: { slug } });
}
