import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const ContactCta = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glass-effect border-border px-8 md:px-16 py-14 md:py-20 text-center shadow-glow">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,oklch(0.6_0.2_260)_0%,transparent_50%)]" />
          <div className="relative">
            <Briefcase className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Ready to do your best work?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Browse open roles, or send an open application — we love meeting talented people even when there's no posting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="primary" size="lg" className="shadow-md hover:scale-105 transition-transform">
                <Link href="#openings">
                  See Open Roles <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
                <Link href="/contact">
                  Send Open Application
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};