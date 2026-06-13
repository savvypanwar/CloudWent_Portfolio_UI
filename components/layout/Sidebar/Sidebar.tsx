"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarProps {
  className?: string;
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

export const Sidebar = ({ className, items }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-64 border-r border-gray-200 bg-white min-h-screen p-6",
        className
      )}
    >
      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};