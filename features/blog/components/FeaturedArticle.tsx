"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export interface FeaturedArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const FeaturedArticle = ({
  slug,
  title,
  excerpt,
  author,
  date,
  category,
  image,
}: FeaturedArticleProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 bg-white dark:bg-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="aspect-video lg:aspect-square relative overflow-hidden bg-gray-100 dark:bg-slate-900">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                Featured
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {category}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              {/* Author & Date */}
              <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-slate-500">
                <div className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{date}</span>
                </div>
              </div>

              {/* Read More Link */}
              <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};