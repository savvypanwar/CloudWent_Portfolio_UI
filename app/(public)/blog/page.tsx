import {
  BlogHero,
  FeaturedArticle,
  BlogGrid,
  BlogSidebar,
  FAQ,
  CTA
} from "@/features/blog/components";
import { dummyBlogPosts, dummyFaqs } from "@/lib/dummy-data";

export const metadata = {
  title: "Blog | CloudWent",
  description: "Stay updated with the latest insights, tutorials, and trends in web development, AI, cloud computing, and digital innovation.",
};

export default function BlogPage() {
  const posts = dummyBlogPosts;

  const categoryCounts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({ name, count }));

  const recentPosts = posts.slice(0, 4).map((post) => ({
    title: post.title,
    slug: post.slug,
  }));

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  const formattedFeatured = featuredPost ? {
    slug: featuredPost.slug,
    title: featuredPost.title,
    excerpt: featuredPost.excerpt,
    author: featuredPost.author,
    date: featuredPost.date,
    category: featuredPost.category,
    image: featuredPost.image,
  } : null;

  const formattedPosts = remainingPosts.map((post) => ({
    id: Number(post.id),
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    category: post.category,
    image: post.image,
    slug: post.slug,
  }));

  const mappedFaqs = dummyFaqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow">
        <BlogHero />

        {formattedFeatured && (
          <section className="py-12 bg-background transition-colors">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-8">
                <span className="text-primary font-semibold tracking-wider text-sm">Featured Article</span>
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
            <span className="text-primary font-semibold tracking-wider text-sm mb-10">Articles</span>
            <div className="grid lg:grid-cols-[1fr_3fr] gap-12">
              <BlogSidebar categories={categories} recentPosts={recentPosts} />
              <div>
                <BlogGrid posts={formattedPosts} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <FAQ faqs={mappedFaqs} />
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}
