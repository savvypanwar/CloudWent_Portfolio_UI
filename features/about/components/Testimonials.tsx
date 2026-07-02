import Link from "next/link";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";
import Image from "next/image";
import heroImg from "@/assets/images/hero-cloud.png";

interface TestimonialItem {
  id: string;
  content: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader title="What Our Clients Say" className="mb-8" />
      <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((q) => (
              <div
                key={q.id}
                className="rounded-2xl border border-border bg-background p-6 hover-lift"
              >
                <Quote className="w-7 h-7 text-primary/30" />
                <p className="mt-3 text-sm text-foreground leading-relaxed">"{q.content}"</p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  <div>
                    <div className="font-semibold text-foreground">{q.name}</div>
                    <div className="text-xs text-muted-foreground">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6">
            <Button variant="outline" size="icon" className="glass-effect border-border hover:bg-muted/50">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="glass-effect border-border hover:bg-muted/50">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-2xl glass-effect border-border p-7 relative overflow-hidden">
          <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">Let's Build Something Amazing Together</h3>
          <p className="text-muted-foreground text-sm mt-3">
            Have a project in mind? We'd love to hear from you and explore how we can help.
          </p>
          
          <Button asChild variant="primary" size="md" className="mt-6 shadow-md hover:opacity-90 transition hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Link href="/contact">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          
          <Image
            src={heroImg}
            alt=""
            className="absolute -right-10 -bottom-10 w-48 opacity-70 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
