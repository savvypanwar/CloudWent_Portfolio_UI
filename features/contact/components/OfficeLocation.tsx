import Link from "next/link";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const OfficeLocation = () => {
  const pins = [
    
    { city: "Bhopal, MP", label: "Development Center", top: "42%", left: "68%", color: "bg-amber-500" }, 
  ];

  return (
    <section className="relative overflow-hidden pb-20 transition-colors">
      {/* Light Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      
      {/* Dark Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
              OUR LOCATIONS
            </p>
            <h2 className="text-4xl font-extrabold text-foreground leading-tight">
              We're Global,<br />Working for You
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Our team is distributed around the world, allowing us to work closely with clients across different time zones.
            </p>

            {/* ✅ Updated Button */}
            <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50">
              <Link href="#">
                <Briefcase className="w-4 h-4 text-primary"/> <span className="p-2">View Open Positions </span>   <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right Map */}
          <div className="relative aspect-[16/9] rounded-2xl bg-[radial-gradient(circle,oklch(0.92_0.02_255)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,oklch(0.15_0.02_255)_1px,transparent_1px)] [background-size:14px_14px]">
            {pins.map((p) => (
              <div
                key={p.city}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ top: p.top, left: p.left }}
              >
                {/* Pin Card */}
                <div className="glass-effect border-border rounded-xl shadow-sm px-3 py-2 flex items-center gap-2 whitespace-nowrap mb-1">
                  <MapPin
                    className={`w-4 h-4 ${
                      p.color === "bg-amber-500" ? "text-amber-500" : "text-primary"
                    }`}
                  />
                  <div>
                    <div className="text-xs font-bold leading-tight text-foreground">
                      {p.city}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {p.label}
                    </div>
                  </div>
                </div>
                {/* Pin Dot */}
                <div
                  className={`w-3 h-3 rounded-full ${p.color} mx-auto ring-4 ring-primary/15`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};