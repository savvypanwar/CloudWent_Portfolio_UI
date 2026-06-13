// components/ui/Pagination/Pagination.tsx

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string; // ✅ Add className here
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className, 
  ...props 
}, ref) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center justify-center gap-1", className)} {...props}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "h-9 min-w-[2.25rem] rounded-md flex items-center justify-center text-sm transition-colors",
            currentPage === page
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "hover:bg-gray-50 text-gray-700"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
});
Pagination.displayName = "Pagination";

export { Pagination };