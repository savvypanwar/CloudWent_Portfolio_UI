"use client";

import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

const categories = [
  { name: "Technology", count: 12 },
  { name: "AI/ML", count: 8 },
  { name: "Cloud", count: 6 },
  { name: "Design", count: 5 },
  { name: "Productivity", count: 4 },
  { name: "Development", count: 7 },
];

const recentPosts = [
  { title: "The Future of Web Development", slug: "future-of-web-development-2025" },
  { title: "Building Scalable AI Solutions", slug: "building-scalable-ai-solutions" },
  { title: "Cloud-Native DevOps Strategies", slug: "cloud-native-devops-strategies" },
  { title: "Designing for AI Interfaces", slug: "designing-for-ai-interfaces" },
];

export const BlogSidebar = () => {
  return (
    <div className="space-y-8 ">
      {/* Search */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Search</h3>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/blog/category/${cat.name.toLowerCase()}`}
              className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>{cat.name}</span>
              <span className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
          className="mt-4 inline-flex items-center gap-2 bg-white text-blue-600 dark:bg-slate-800 dark:text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition-transform"
        >
          Subscribe <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};