import { Star } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

interface TestimonialItem {
  id: string;
  content: string;
  name: string;
  role: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="WHAT OUR CLIENTS SAY" className="mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-effect border-border rounded-2xl p-6 transition card-hover cursor-pointer"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < item.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                ))}
              </div>

              <p className="text-foreground leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-300 to-purple-500" />
                <div>
                  <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
