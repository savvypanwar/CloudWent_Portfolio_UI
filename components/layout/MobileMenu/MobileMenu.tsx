"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string; hasDropdown?: boolean }[];
}

export const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-background dark:bg-[#0B101B] animate-in fade-in slide-in-from-top-2">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-muted-foreground hover:text-primary">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col gap-2 px-6 text-lg font-medium text-foreground dark:text-gray-200">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="py-3 border-b border-border dark:border-gray-800 hover:text-primary transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        {/* ✅ Fixed Button with asChild and Link */}
        <div className="pt-6">
          <Button asChild variant="gradient" size="lg" className="w-full">
            <Link href="/contact" onClick={onClose}>
              Book a Consultation
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};