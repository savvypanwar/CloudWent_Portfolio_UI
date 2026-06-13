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
    <div className="lg:hidden fixed inset-0 z-40 bg-white animate-in fade-in slide-in-from-top-2">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-gray-600 hover:text-blue-600">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col gap-2 px-6 text-lg font-medium text-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="py-3 border-b border-gray-100 hover:text-blue-600 transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-6">
          <Button variant="gradient" size="lg" className="w-full">
            Book a Consultation
          </Button>
        </div>
      </nav>
    </div>
  );
};
