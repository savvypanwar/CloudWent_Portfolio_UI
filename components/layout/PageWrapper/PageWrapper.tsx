"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {children}
    </div>
  );
};