import {
  BlogHero,
  FeaturedArticle,
  BlogGrid,
  BlogSidebar,
  BlogCta,
} from "@/features/blog/components";

// ✅ Imported images
import featuredImage from "@/assets/images/blog/19362653.jpg";
import featuredImage1 from "@/assets/images/blog/971.jpg";
import devopsImg from "@/assets/images/blog/7046558.jpg";
import aiUxImg from "@/assets/images/blog/5785419.jpg";
import productivityImg from "@/assets/images/blog/20944170.jpg";
import postgresImg from "@/assets/images/blog/6505016.jpg";

export const metadata = {
  title: "Blog | CloudWent",
  description: "Stay updated with the latest insights, tutorials, and trends in web development, AI, cloud computing, and digital innovation.",
};

const featuredPost = {
  slug: "future-of-web-development-2025",
  title: "The Future of Web Development: Trends to Watch in 2025",
  excerpt: "Discover the emerging technologies and frameworks shaping the future of web development, from AI-driven tools to edge computing.",
  author: "Aamila Khan",
  date: "January 15, 2025",
  category: "Technology",
  image: featuredImage, 
};

const posts = [
  {
    id: 1,
    title: "Building Scalable AI Solutions for Enterprise Applications",
    excerpt: "Learn how to design and implement AI-powered features that scale seamlessly across large enterprise environments.",
    author: "Usman Tariq",
    date: "January 8, 2025",
    category: "AI/ML",
    image: featuredImage1,
    slug: "building-scalable-ai-solutions",
  },
  {
    id: 2,
    title: "Cloud-Native DevOps Strategies for Modern Teams",
    excerpt: "Explore best practices for implementing cloud-native DevOps workflows that accelerate delivery and improve reliability.",
    author: "Bilal Ahmed",
    date: "December 20, 2024",
    category: "Cloud",
    image: devopsImg,
    slug: "cloud-native-devops-strategies",
  },
  {
    id: 3,
    title: "Designing for AI Interfaces: UX Best Practices",
    excerpt: "A comprehensive guide to designing intuitive, user-centered interfaces for AI-powered applications.",
    author: "Sarah Ahmed",
    date: "December 10, 2024",
    category: "Design",
    image: aiUxImg,
    slug: "designing-for-ai-interfaces",
  },
  {
    id: 4,
    title: "Top 10 Productivity Hacks for Developers in 2025",
    excerpt: "Practical tips and tools to help developers code smarter, not harder, and boost daily productivity.",
    author: "Waseem Ahmad",
    date: "November 28, 2024",
    category: "Productivity",
    image: productivityImg,
    slug: "productivity-hacks-2025",
  },
  {
    id: 5,
    title: "PostgreSQL Performance Optimization: Advanced Techniques",
    excerpt: "Deep dive into query optimization, indexing strategies, and performance tuning for PostgreSQL databases.",
    author: "Ahmed Hassan",
    date: "November 15, 2024",
    category: "Development",
    image: postgresImg,
    slug: "postgresql-performance-optimization",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B101B] flex flex-col transition-colors">
      <main className="flex-grow">
        <BlogHero />
        
        {/* Featured Article */}
        <section className="py-12 bg-white dark:bg-[#0B101B] transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Article</h2>
            </div>
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
        </section>
        
        {/* Blog Grid with Sidebar - ✅ FIXED LAYOUT */}
        <section className="py-24 bg-white dark:bg-[#0B101B] transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* ✅ Title ko grid ke bahar le aaya */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Articles</h2>
            
            <div className="grid lg:grid-cols-[1fr_3fr] gap-12">
              <BlogSidebar />
              <div>
                <BlogGrid posts={posts} />
              </div>
            </div>
          </div>
        </section>
        
        <BlogCta />
      </main>
    </div>
  );
}