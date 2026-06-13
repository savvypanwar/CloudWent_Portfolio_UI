import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const BlogCard = ({
  slug,
  title,
  excerpt,
  author,
  date,
  category,
  image,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 bg-white">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200">
              {category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};