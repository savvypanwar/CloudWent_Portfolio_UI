"use client";

import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export const OfficeLocation = () => {
  const pins = [
    { city: "New York, USA", label: "Sales & Partnerships", top: "32%", left: "26%", color: "bg-primary" },
    { city: "London, UK", label: "Business Development", top: "26%", left: "50%", color: "bg-primary" },
    { city: "San Francisco, USA", label: "Head Office", top: "44%", left: "14%", color: "bg-primary" },
    { city: "Lahore, Pakistan", label: "Development Center", top: "42%", left: "68%", color: "bg-amber-500" },
    { city: "Sydney, Australia", label: "Client Success", top: "72%", left: "78%", color: "bg-primary" },
  ];

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">OUR LOCATIONS</p>
          <h2 className="text-4xl font-extrabold text-dark leading-tight">We're Global,<br />Working for You</h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">Our team is distributed around the world, allowing us to work closely with clients across different time zones.</p>
          <Link href="#" className="mt-6 inline-flex items-center gap-2 bg-card border border-border px-5 py-3 rounded-xl font-semibold text-sm hover:bg-surface transition">
            <Briefcase className="w-4 h-4 text-primary" /> View Open Positions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative aspect-[16/9] rounded-2xl bg-[radial-gradient(circle,oklch(0.92_0.02_255)_1px,transparent_1px)] [background-size:14px_14px]">
          {pins.map(p => (
            <div key={p.city} className="absolute -translate-x-1/2 -translate-y-full" style={{ top: p.top, left: p.left }}>
              <div className="bg-card border border-border rounded-xl shadow-card px-3 py-2 flex items-center gap-2 whitespace-nowrap mb-1">
                <MapPin className={`w-4 h-4 ${p.color === "bg-amber-500" ? "text-amber-500" : "text-primary"}`} />
                <div>
                  <div className="text-xs font-bold leading-tight">{p.city}</div>
                  <div className="text-[10px] text-muted-foreground">{p.label}</div>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${p.color} mx-auto ring-4 ring-primary/15`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};