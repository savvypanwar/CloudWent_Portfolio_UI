import Link from "next/link";

export interface CategoriesProps {
  activeCategory?: string;
}

export const Categories = ({ activeCategory }: CategoriesProps) => {
  const categories = [
    { name: "All", slug: "" },
    { name: "Technology", slug: "technology" },
    { name: "Productivity", slug: "productivity" },
    { name: "Development", slug: "development" },
    { name: "AI & ML", slug: "ai-ml" },
    { name: "Cloud", slug: "cloud" },
    { name: "Design", slug: "design" },
    { name: "Business", slug: "business" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category.slug || (!activeCategory && category.slug === "");
        return (
          <Link
            key={category.name}
            href={`/blog${category.slug ? `?category=${category.slug}` : ""}`}
            className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};