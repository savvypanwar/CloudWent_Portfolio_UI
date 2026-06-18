import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

const plans = [
  {
    name: "Starter",
    price: "$4,900",
    sub: "/ project",
    desc: "For landing pages, MVPs and small marketing sites.",
    features: ["Up to 6 pages", "CMS integration", "Responsive design", "Basic SEO", "2 weeks delivery"],
    cta: "Start small",
    featured: false,
  },
  {
    name: "Growth",
    price: "$14,900",
    sub: "/ project",
    desc: "For SaaS dashboards, web apps and production launches.",
    features: ["Custom web app", "Auth & payments", "API + database", "Analytics & SEO", "6–8 weeks delivery"],
    cta: "Most popular",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    sub: "",
    desc: "For multi-product platforms, AI features and enterprise needs.",
    features: ["Dedicated squad", "Cloud architecture", "AI integrations", "SLA + on-call", "Quarterly roadmaps"],
    cta: "Talk to us",
    featured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 border-y border-border bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Straightforward Plans.<br />No Surprises.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fixed-scope packages to start, retainers to scale.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={
                "relative rounded-2xl p-8 border transition-all hover:-translate-y-1 " +
                (p.featured
                  ? "glass-effect border-primary shadow-glow text-foreground"
                  : "glass-effect border-border text-foreground")
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="font-bold text-lg text-foreground">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.sub}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "primary" : "outline"} size="md" className="mt-8 w-full justify-center shadow-md">
                <Link href="/contact">
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground inline-flex items-center gap-2 justify-center w-full">
          <ShieldCheck className="w-4 h-4 text-primary" /> All plans include NDA, source code ownership, and 30 days of post-launch support.
        </div>
      </div>
    </section>
  );
};