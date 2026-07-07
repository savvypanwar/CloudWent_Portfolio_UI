"use client";

import Link from "next/link";
import { X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string; hasDropdown?: boolean }[];
}

export const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-gradient-to-b from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-black/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 bg-gray-200/60 dark:bg-white/5 hover:bg-gray-300/80 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </button>
        
        {/* Close Button */}
        <button onClick={onClose} className="text-gray-900 dark:text-white hover:text-primary transition-colors p-1">
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
      <nav className="flex flex-col gap-1 px-4 sm:px-6 text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 bg-background/90 dark:bg-background/90 backdrop-blur-md py-4 sm:py-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="py-2 sm:py-3 px-6 rounded-lg border-b border-gray-200/60 dark:border-white/10 hover:bg-gray-100/80 dark:hover:bg-white/5 hover:text-primary transition-colors text-center w-full sm:w-auto"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        {/* ✅ Fixed Button with asChild and Link */}
        <div className="pt-4 sm:pt-6 px-3 w-full sm:w-auto">
          <Button asChild variant="gradient" size="lg" className="w-full text-sm sm:text-base">
            <Link href="/contact" onClick={onClose}>
              Book a Consultation
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};