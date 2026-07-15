import {
  BlogHero,
  FeaturedArticle,
  BlogGrid,
  BlogSidebar,
  BlogCta,
} from "@/features/blog/components";
import { getPublishedBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | CloudWent",
  description:
    "Stay updated with the latest insights, tutorials, and trends in web development, AI, cloud computing, and digital innovation.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  const categoryCounts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
  }));

  const recentPosts = posts.slice(0, 4).map((post) => ({
    title: post.title,
    slug: post.slug,
  }));

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  const formattedFeatured = featuredPost
    ? {
        slug: featuredPost.slug,
        title: featuredPost.title,
        excerpt: featuredPost.excerpt,
        author: featuredPost.author,
        date: featuredPost.publishedAt
          ? new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : new Date(featuredPost.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
        category: featuredPost.category,
        image: featuredPost.image || "/placeholder.jpg",
      }
    : null;

  const formattedPosts = remainingPosts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : new Date(post.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    category: post.category,
    image: post.image || "/placeholder.jpg",
    slug: post.slug,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <BlogHero />

        {formattedFeatured && (
          <section className="py-12 bg-background transition-colors">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-8">
                <span className="text-primary font-semibold tracking-wider text-sm">
                  Featured Article
                </span>
              </div>
              <FeaturedArticle
                slug={formattedFeatured.slug}
                title={formattedFeatured.title}
                excerpt={formattedFeatured.excerpt}
                author={formattedFeatured.author}
                date={formattedFeatured.date}
                category={formattedFeatured.category}
                image={formattedFeatured.image}
              />
            </div>
          </section>
        )}

        <section className="py-24 bg-background transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-primary font-semibold tracking-wider text-sm mb-10">
              Articles
            </span>
            <div className="grid lg:grid-cols-[1fr_3fr] gap-12">
              <BlogSidebar categories={categories} recentPosts={recentPosts} />
              <div>
                <BlogGrid posts={formattedPosts} />
              </div>
            </div>
          </div>
        </section>

        <BlogCta />
      </main>
    </div>
  );
}
