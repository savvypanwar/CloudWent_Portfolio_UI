import { BlogCard } from "./BlogCard";

export const BlogGrid = () => {
  const blogPosts = [
    {
      slug: "future-of-web-development-2025",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Discover the emerging technologies and frameworks shaping the future of web development, from AI-driven tools to edge computing.",
      author: "Aamila Khan",
      date: "January 15, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    },
    {
      slug: "building-scalable-ai-solutions",
      title: "Building Scalable AI Solutions for Enterprise Applications",
      excerpt: "Learn how to design and implement AI-powered features that scale seamlessly across large enterprise environments.",
      author: "Usman Tariq",
      date: "January 8, 2025",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      slug: "cloud-native-devops-strategies",
      title: "Cloud-Native DevOps Strategies for Modern Teams",
      excerpt: "Explore best practices for implementing cloud-native DevOps workflows that accelerate delivery and improve reliability.",
      author: "Bilal Ahmed",
      date: "December 20, 2024",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
      slug: "designing-for-ai-interfaces",
      title: "Designing for AI Interfaces: UX Best Practices",
      excerpt: "A comprehensive guide to designing intuitive, user-centered interfaces for AI-powered applications.",
      author: "Sarah Ahmed",
      date: "December 10, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1581291518857-4e27d48c24a8?w=600&h=400&fit=crop",
    },
    {
      slug: "productivity-hacks-for-developers",
      title: "Top 10 Productivity Hacks for Developers in 2025",
      excerpt: "Practical tips and tools to help developers code smarter, not harder, and boost daily productivity.",
      author: "Waseem Ahmad",
      date: "November 28, 2024",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    },
    {
      slug: "postgresql-performance-optimization",
      title: "PostgreSQL Performance Optimization: Advanced Techniques",
      excerpt: "Deep dive into query optimization, indexing strategies, and performance tuning for PostgreSQL databases.",
      author: "Ahmed Hassan",
      date: "November 15, 2024",
      category: "Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, i) => (
        <BlogCard
          key={i}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
          category={post.category}
          image={post.image}
        />
      ))}
    </div>
  );
};