"use client";

import { cn } from "@/lib/utils";
import { FileX } from "lucide-react";

export interface NoDataProps {
  title?: string;
  description?: string;
  className?: string;
}

export const NoData = ({
  title = "No data found",
  description = "We couldn't find any data matching your criteria.",
  className,
}: NoDataProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center border border-dashed border-gray-200 rounded-lg",
        className
      )}
    >
      <div className="mb-3 rounded-full bg-gray-50 p-3">
        <FileX className="h-8 w-8 text-gray-400" />
      </div>
      <h4 className="text-sm font-semibold text-gray-700 mb-1">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};