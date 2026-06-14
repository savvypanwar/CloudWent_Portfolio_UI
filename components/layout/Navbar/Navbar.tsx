"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu/MobileMenu";
import Logo from "@/components/common/Logo/Logo";
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            )}
          </button>

          <Link href="/contact">
            <Button variant="gradient" size="sm">
              Book a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} navLinks={navLinks} />
    </header>
  );
};