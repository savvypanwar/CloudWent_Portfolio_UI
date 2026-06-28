"use client";

import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

interface Category {
  name: string;
  count: number;
}

interface RecentPost {
  title: string;
  slug: string;
}

interface BlogSidebarProps {
  categories: Category[];
  recentPosts: RecentPost[];
}

export const BlogSidebar = ({ categories, recentPosts }: BlogSidebarProps) => {
  return (
    <div className="space-y-8 ">
      {/* Search */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-foreground mb-4">Search</h3>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-9 pr-4 py-2 bg-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/blog/category/${cat.name.toLowerCase()}`}
              className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>{cat.name}</span>
              <span className="text-xs bg-surface px-2 py-0.5 rounded-full">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-foreground mb-4">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="hover:underline">{post.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-900 rounded-2xl p-5 text-white text-center shadow-sm">
        <h4 className="font-bold text-lg">Subscribe to Our Newsletter</h4>
        <p className="text-sm text-white/80 mt-2">Get the latest insights delivered to your inbox.</p>
        <Link
          href="/newsletter"
          className="mt-4 inline-flex items-center gap-2 bg-card text-primary dark:bg-surface dark:text-primary px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition-transform"
        >
          Subscribe <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
