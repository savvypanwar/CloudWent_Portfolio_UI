import Link from "next/link";
import { MapPin, Briefcase, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const OfficeLocation = () => {
  const pins = [
    { city: "Bhopal, MP", label: "Development Center", top: "45%", left: "70%", color: "bg-amber-500" },
  ];

  return (
    <section className="relative overflow-hidden pb-20 transition-colors">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      
      {/* Dark Mode Gradient */}
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

            <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50 card-hover">
              <Link href="/careers">
                <Briefcase className="w-4 h-4 text-primary"/> <span className="p-2">View Open Positions</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right Map */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-glow">
            {/* Embedded Map */}
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.25%2C23.15%2C77.55%2C23.35&layer=mapnik&marker=23.25%2C77.40"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "grayscale(1) contrast(1.1)" }}
              loading="lazy"
              title="Office Location Map"
            />
            
            {/* Dark mode overlay - invert colors for dark theme */}
            <div className="absolute inset-0 pointer-events-none dark:invert dark:opacity-90 opacity-0" />

            {/* Pin Overlay */}
            {pins.map((p) => (
              <div
                key={p.city}
                className="absolute -translate-x-1/2 -translate-y-full z-10"
                style={{ top: p.top, left: p.left }}
              >
                {/* Pin Card */}
                <div className="glass-effect border-border rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 whitespace-nowrap mb-1 card-hover">
                  <MapPin className={`w-4 h-4 ${p.color === "bg-amber-500" ? "text-amber-500" : "text-primary"}`} />
                  <div>
                    <div className="text-xs font-bold leading-tight text-foreground">
                      {p.city}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {p.label}
                    </div>
                  </div>
                </div>
                {/* Pin Dot with pulse animation */}
                <div className="relative mx-auto w-3 h-3">
                  <div className={`absolute inset-0 rounded-full ${p.color} animate-ping opacity-75`} />
                  <div className={`relative w-3 h-3 rounded-full ${p.color} ring-4 ring-primary/15`} />
                </div>
              </div>
            ))}

            {/* Map attribution link */}
            <div className="absolute bottom-2 right-2 z-10">
              <a
                href="https://www.openstreetmap.org/?mlat=23.25&mlon=77.40#map=12/23.25/77.40"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-muted-foreground hover:text-primary flex items-center gap-1 bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> OpenStreetMap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
