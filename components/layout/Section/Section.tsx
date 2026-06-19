import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "gray" | "dark" | "gradient";
  size?: "sm" | "md" | "lg"; // ✅ Yeh add karo
}

const variantClasses = {
  default: "bg-background", // Root color use kiya
  gray: "bg-surface",
  dark: "bg-dark text-dark-foreground",
  gradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
};

const sizeClasses = {
  sm: "py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24",
};

export const Section = ({
  children,
  className,
  id,
  variant = "default",
  size = "lg",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full transition-colors duration-300",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};