"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { ThemeToggle } from "@/components/common/ThemeToggle/ThemeToggle";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string; hasDropdown?: boolean }[];
}

export const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-slate-950 animate-in fade-in slide-in-from-top-2 transition-colors">
      <div className="flex items-center justify-end gap-3 p-6">
        <ThemeToggle />
        <button
          onClick={onClose}
          className="rounded-lg p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col gap-2 px-6 text-lg font-medium text-gray-700 dark:text-gray-200">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="py-3 border-b border-gray-100 hover:text-blue-600 dark:border-gray-800 dark:hover:text-blue-400 transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-6">
          <Button
            href="/contact"
            variant="gradient"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            Book a Consultation
          </Button>
        </div>
      </nav>
    </div>
  );
};
