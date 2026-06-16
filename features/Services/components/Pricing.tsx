"use client";

import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const plans = [
  { name: "Starter", price: "$4,900", sub: "/ project", desc: "For landing pages, MVPs and small marketing sites.", features: ["Up to 6 pages", "CMS integration", "Responsive design", "Basic SEO", "2 weeks delivery"], cta: "Start small", featured: false },
  { name: "Growth", price: "$14,900", sub: "/ project", desc: "For SaaS dashboards, web apps and production launches.", features: ["Custom web app", "Auth & payments", "API + database", "Analytics & SEO", "6–8 weeks delivery"], cta: "Most popular", featured: true },
  { name: "Scale", price: "Custom", sub: "", desc: "For multi-product platforms, AI features and enterprise needs.", features: ["Dedicated squad", "Cloud architecture", "AI integrations", "SLA + on-call", "Quarterly roadmaps"], cta: "Talk to us", featured: false },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 border-y border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-[#0B101B] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
         <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-primary dark:text-blue-400 mb-3">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white">
            Straightforward Plans.<br />No Surprises.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
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
                  ? "bg-blue-600 border-blue-600 shadow-xl shadow-blue-600/30 text-white" 
                  : "bg-white border-gray-200 shadow-sm hover:shadow-md text-gray-900")
              }
              data-reveal
              data-delay={String(i + 1)}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="font-bold text-lg">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-sm opacity-80">{p.sub}</span>
              </div>
              <p className="mt-3 text-sm opacity-90">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={
                  "mt-8 inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-xl font-semibold transition " +
                  (p.featured
                    ? "bg-white text-blue-600 hover:bg-gray-100 shadow-md"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/30")
                }
              >
                {p.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 inline-flex items-center gap-2 justify-center w-full" data-reveal>
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" /> All plans include NDA, source code ownership, and 30 days of post-launch support.
        </div>
      </div>
    </section>
  );
};