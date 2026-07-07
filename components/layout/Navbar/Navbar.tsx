"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu/MobileMenu";
import Logo from "@/components/common/Logo/Logo";
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services"},
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  // Active link check karne ka function
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 lg:border-border bg-black/50 dark:bg-black/60 lg:bg-background/80 lg:dark:bg-background/80 backdrop-blur-xl lg:backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-3 sm:px-4 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap ${
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3 lg:gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 bg-surface/50 hover:bg-muted transition-colors backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-4 lg:h-5 w-4 lg:w-5 text-yellow-500" />
            ) : (
              <Moon className="h-4 lg:h-5 w-4 lg:w-5 text-muted-foreground" />
            )}
          </button>

          <Link href="/contact">
            {/* ✅ Updated to match exactly the 'primary' variant used across all pages */}
            <Button variant="primary" size="sm">
              Book a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white dark:text-white hover:text-primary transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} navLinks={navLinks} />
    </header>
  );
};