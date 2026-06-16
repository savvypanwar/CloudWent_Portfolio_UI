// features/about/components/Culture.tsx
"use client";

import { Users, MessageSquare, TrendingUp, Heart, Smile,  } from "lucide-react";
import { FiInstagram } from "react-icons/fi";

import Link from "next/link";

export const Culture = () => {
  const items = [
    { icon: Users, title: "Collaborative", text: "We work together, win together." },
    { icon: MessageSquare, title: "Transparent", text: "Open communication is our foundation." },
    { icon: TrendingUp, title: "Growth Mindset", text: "We learn, adapt, and keep improving." },
    { icon: Heart, title: "Work-Life Balance", text: "We value balance and well-being." },
    { icon: Smile, title: "Have Fun", text: "We celebrate wins and enjoy the journey." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="rounded-3xl bg-[#0B101B] text-white p-10">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Our Culture</h3>
            <p className="text-white/60 mt-2 text-sm max-w-xs">We believe a great culture builds great products.</p>
            <Link href="#" className="mt-5 inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/10 transition">
              <FiInstagram className="w-4 h-4" /> Life At CloudWent
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {items.map((it, i) => (
              <div key={it.title} data-reveal data-delay={String(i + 1)}>
                <div className="w-11 h-11 grid place-items-center rounded-full bg-white/10 text-blue-400 mb-3">
                  <it.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-sm">{it.title}</div>
                <p className="text-white/60 text-xs mt-1">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}