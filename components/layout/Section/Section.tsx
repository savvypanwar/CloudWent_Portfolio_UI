"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gray" | "dark" | "gradient";
  id?: string;
}

const variantClasses = {
  default: "bg-white",
  gray: "bg-gray-50/50",
  dark: "bg-[#0B101B]",
  gradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
};

export const Section = ({ children, className, variant = "default", id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-24", variantClasses[variant], className)}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};