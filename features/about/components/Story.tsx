// features/about/components/Story.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Cloud, Users, Rocket, Medal, Flag } from "lucide-react";

export const Story = () => {
  const steps = [
    { icon: Cloud, year: "2019", title: "Founded", text: "CloudWent was founded with a vision to deliver scalable digital solutions." },
    { icon: Users, year: "2020", title: "Team Growth", text: "Grew our team and expanded our service offerings." },
    { icon: Rocket, year: "2021", title: "Global Reach", text: "Started working with clients across different countries." },
    { icon: Medal, year: "2023", title: "Milestone Achieved", text: "200+ projects delivered with 5-star client satisfaction." },
    { icon: Flag, year: "Future", title: "Looking Ahead", text: "Continuing our mission to build a better digital future together." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
        <div>
          <span className="text-primary dark:text-blue-400 font-semibold tracking-wider text-sm">OUR STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark dark:text-white">From An Idea To A Digital Transformation Partner</h2>
          <p className="mt-4 text-muted-foreground dark:text-slate-400">
            CloudWent was founded with a simple idea — to help businesses unlock their full potential through technology. What started as a small team of passionate developers has grown into a full-service digital solutions company trusted by businesses worldwide.
          </p>
          <Link href="/about/story" className="mt-6 inline-flex items-center gap-2 border border-border dark:border-slate-700 bg-card dark:bg-slate-800 px-5 py-2.5 rounded-xl font-semibold hover:bg-muted dark:hover:bg-slate-700 transition">
            Read Our Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-px border-t border-dashed border-gray-300 dark:border-slate-700" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.year} className="text-center" data-reveal data-delay={String(i + 1)}>
                <div className="mx-auto w-16 h-16 rounded-full bg-card dark:bg-slate-800 border border-border dark:border-slate-700 shadow-elegant grid place-items-center text-primary dark:text-blue-400">
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="font-bold mt-4 text-dark dark:text-white">{s.year}</div>
                <div className="font-semibold text-sm mt-1 text-dark dark:text-white">{s.title}</div>
                <p className="text-xs text-muted-foreground dark:text-slate-400 mt-2 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}