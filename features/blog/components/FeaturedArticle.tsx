import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";

export interface FeaturedArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string | StaticImageData;
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
      <div className="group relative rounded-2xl overflow-hidden glass-effect border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-square relative overflow-hidden bg-muted/20">
            {/* ✅ Directly pass image, Next.js handles both string and StaticImageData */}
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Featured
              </span>
              <span className="text-xs text-muted-foreground">{category}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{date}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Read article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};