"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title?: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {label && (
        <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3 uppercase">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-muted-foreground max-w-xl">
          {description}
        </p>
      )}
      {action && (
        <Link
          href={action.href}
          className="mt-6 inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 transition-all"
        >
          {action.text} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};
