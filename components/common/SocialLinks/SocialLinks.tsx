"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Github, Youtube, Instagram, Facebook } from "@/components/common/SocialIcons";

export interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "light" | "dark" | "primary";
}

const variantClasses = {
  light: "text-gray-400 hover:text-white",
  dark: "text-gray-500 hover:text-blue-600",
  primary: "text-white hover:text-blue-200",
};

export const SocialLinks = ({
  className,
  iconSize = 4,
  variant = "light",
}: SocialLinksProps) => {
  const links = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            "transition-colors duration-200",
            variantClasses[variant]
          )}
          aria-label={label}
        >
          <Icon className={`h-${iconSize} w-${iconSize}`} />
        </Link>
      ))}
    </div>
  );
};