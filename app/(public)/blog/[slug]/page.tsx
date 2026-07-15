import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Not Found | CloudWent Blog" };
  }
  return {
    title: `${post.title} | CloudWent Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.58_0.21_258_/_0.15),_transparent_70%)]" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="max-w-5xl mx-auto px-6 -mt-8">
            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {post.content ? (
                <div
                  className="text-foreground leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <p className="text-muted-foreground italic">
                  No content available for this post.
                </p>
              )}
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
