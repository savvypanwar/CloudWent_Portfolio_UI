

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const ContactCta = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="relative overflow-hidden rounded-3xl glass-effect border-border px-8 md:px-12 py-10 shadow-glow">
        {/* Decorative Cloud Shape */}
        <div className="absolute -left-4 -top-4 opacity-20">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-primary/30">
            <path d="M17.5 19a3.5 3.5 0 1 0 0-7h-1.5A5.5 5.5 0 0 0 5 12.5a5.5 5.5 0 0 0 5.5 5.5h7z" />
          </svg>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="text-foreground max-w-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold">
             Ready to do your best work?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Browse open roles, or send an open application — we love meeting talented people even when there's no posting.
            </p>
          </div>

          {/* Button */}
          <Button asChild variant="primary" size="lg" className="shadow-md hover:scale-105 transition-transform hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Link href="/contact">
               See Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};