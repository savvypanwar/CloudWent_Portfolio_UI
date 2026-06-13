"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface HeaderProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export const Header = ({ title, description, actions, className }: HeaderProps) => {
  return (
    <header className={cn("py-12 border-b border-gray-100", className)}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            {title && (
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{title}</h1>
            )}
            {description && (
              <p className="mt-2 text-gray-500 max-w-2xl">{description}</p>
            )}
          </div>
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
      </div>
    </header>
  );
};
