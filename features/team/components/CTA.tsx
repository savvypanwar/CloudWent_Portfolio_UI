import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const CTA = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 pb-16">
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
            <div className="inline-flex items-center gap-2 glass-effect border-border rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Join Our Journey
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Want to Build Something <br />
              Amazing Together?
            </h3>
            <p className="mt-2 text-muted-foreground">
              We&apos;re always looking for talented people who are passionate about technology.
            </p>
          </div>

          {/* Button */}
          <Button asChild variant="primary" size="lg" className="shadow-md hover:scale-105 transition-transform">
            <Link href="#">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};