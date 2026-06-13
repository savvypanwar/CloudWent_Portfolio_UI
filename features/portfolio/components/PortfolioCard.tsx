import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export interface PortfolioCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  link: string;
}

export const PortfolioCard = ({
  title,
  description,
  tags,
  gradient,
  image,
  link,
}: PortfolioCardProps) => {
  return (
    <Link href={link}>
      <div className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 bg-white">
        <div className="aspect-video relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}
          ></div>
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-900 font-semibold text-lg">{title}</h3>
            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};