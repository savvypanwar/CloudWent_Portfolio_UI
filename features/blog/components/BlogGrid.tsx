"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
        >
          <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-slate-900">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                {post.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};