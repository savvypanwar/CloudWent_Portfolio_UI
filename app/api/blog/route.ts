import { NextResponse } from "next/server";
import {
  createBlogPost,
  getBlogPosts,
  getPublishedBlogPosts,
  revalidateBlogPages,
  blogPostSchema,
} from "@/lib/blog";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") ?? undefined;
    const status = searchParams.get("status") ?? undefined;
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Number(limitParam) : undefined;
    const publicOnly = searchParams.get("public") === "true";

    if (publicOnly) {
      const posts = await getPublishedBlogPosts(
        Number.isFinite(limit) ? limit : undefined
      );
      return NextResponse.json(posts);
    }

    const posts = await getBlogPosts({
      category,
      status: status as "DRAFT" | "PUBLISHED" | "ARCHIVED" | undefined,
      limit: Number.isFinite(limit) ? limit : undefined,
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("List blog posts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = blogPostSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const post = await createBlogPost(parsed.data);
    revalidateBlogPages();
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Create blog post error:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
