import { NextResponse } from "next/server";
import {
  deleteBlogPost,
  getBlogPostBySlug,
  revalidateBlogPages,
  blogPostSchema,
  updateBlogPost,
} from "@/lib/blog";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Get blog post error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await req.json();
    const parsed = blogPostSchema.partial().safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const post = await updateBlogPost(slug, parsed.data);
    revalidateBlogPages();
    return NextResponse.json(post);
  } catch (error) {
    console.error("Update blog post error:", error);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await deleteBlogPost(slug);
    revalidateBlogPages();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete blog post error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
