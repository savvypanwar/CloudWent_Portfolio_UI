import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Section } from "@/components/layout/Section/Section";
import { PageHeading } from "@/components/common/PageHeading/PageHeading";
import { BlogGrid, Categories, FeaturedArticle } from "@/features/blog/components";

export const metadata = {
  title: "Blog | CloudWent",
  description: "Stay updated with the latest insights, tutorials, and trends in web development, AI, cloud computing, and digital innovation.",
};

export default function BlogPage() {
  // Sample featured article data
  const featuredPost = {
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Discover the emerging technologies and frameworks shaping the future of web development, from AI-driven tools to edge computing.",
    author: "Aamila Khan",
    date: "January 15, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Blog Hero */}
        <Section className="pt-12 pb-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Insights & Stories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tutorials, and insights from our team of experts.
            </p>
          </div>
        </Section>

        {/* Categories */}
        <Section variant="gray" className="py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-semibold text-gray-700">Browse Categories:</span>
            <Categories />
          </div>
        </Section>

        {/* Featured Article */}
        <Section variant="default">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <FeaturedArticle
              slug={featuredPost.slug}
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              author={featuredPost.author}
              date={featuredPost.date}
              category={featuredPost.category}
              image={featuredPost.image}
            />
          </div>
        </Section>

        {/* All Articles */}
        <Section variant="gray">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
          <BlogGrid />
        </Section>
      </main>
      <Footer />
    </div>
  );
}