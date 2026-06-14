"use client";

import { Star } from "lucide-react";

export const Testimonials = () => {
  const items = [
    {
      quote: "CloudWent transformed our idea into a powerful platform. Their technical expertise and communication are exceptional.",
      name: "James Carter",
      role: "CTO, EduSmart",
    },
    {
      quote: "The team is professional, responsive and truly invested in our success. Highly recommended!",
      name: "Sarah Johnson",
      role: "Head of Operations, LearnHub",
    },
    {
      quote: "Reliable, innovative and a great partner for our digital journey. We're extremely satisfied.",
      name: "Michael Brown",
      role: "CEO, FinTrack",
    },
  ];

  return (
    <section className="pb-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <p className="text-xs font-bold tracking-[0.2em] text-primary mb-10">
          WHAT OUR CLIENTS SAY
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/50">
                {/* Avatar Placeholder */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-300 to-purple-500" />
                
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
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