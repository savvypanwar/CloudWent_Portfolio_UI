// features/about/components/Testimonials.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/images/hero-cloud.png";

export const Testimonials = () => {
  const quotes = [
    { name: "James Carter", role: "CTO, EduSmart", text: "CloudWent transformed our idea into a powerful platform. Their technical expertise and communication are exceptional." },
    { name: "Sarah Johnson", role: "Head of Operations, LearnHub", text: "The team is professional, responsive and truly invested in our success. Highly recommended!" },
    { name: "Michael Brown", role: "CEO, FinTrack", text: "Reliable, innovative and a great partner for our digital journey. We're extremely satisfied." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">What Our Clients Say</h2>
      </div>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-4">
            {quotes.map((q, i) => (
              <div
                key={q.name}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover-lift"
                data-reveal
                data-delay={String(i + 1)}
              >
                <Quote className="w-7 h-7 text-primary/30 dark:text-blue-400/30" />
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">"{q.text}"</p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-indigo-800" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{q.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6">
            <button className="w-9 h-9 grid place-items-center rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 grid place-items-center rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-[#0B101B] text-white p-7 relative overflow-hidden">
          <h3 className="text-2xl font-bold leading-tight">Let's Build Something Amazing Together</h3>
          <p className="text-white/70 text-sm mt-3">Have a project in mind? We'd love to hear from you and explore how we can help.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Image src={heroImg} alt="" className="absolute -right-10 -bottom-10 w-48 opacity-70" />
        </div>
      </div>
    </section>
  );
}