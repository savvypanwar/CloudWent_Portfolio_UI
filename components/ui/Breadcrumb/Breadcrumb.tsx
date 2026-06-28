// components/ui/Breadcrumb/Breadcrumb.tsx

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string; // ✅ Add className here
}

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(({ items, className, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={cn("flex items-center space-x-1 text-sm", className)}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />}
          {item.href ? (
            <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
});
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };