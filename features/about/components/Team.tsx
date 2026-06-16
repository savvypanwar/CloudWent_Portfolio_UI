// features/about/components/Team.tsx
"use client";

import Link from "next/link";
import { ArrowRight, } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

export const Team = () => {
  const members = [
    { name: "Waseem Ahmad", role: "CEO & Founder", initials: "WA", color: "from-blue-500 to-indigo-700" },
    { name: "Ayesha Khan", role: "CTO", initials: "AK", color: "from-pink-500 to-rose-700" },
    { name: "Usman Tariq", role: "Lead Developer", initials: "UT", color: "from-green-500 to-emerald-700" },
    { name: "Sarah Ahmed", role: "UI/UX Designer", initials: "SA", color: "from-purple-500 to-violet-700" },
    { name: "Bilal Ashraf", role: "DevOps Engineer", initials: "BA", color: "from-orange-500 to-amber-700" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid lg:grid-cols-[1fr_2.5fr] gap-10 items-start">
        <div>
          <span className="text-primary dark:text-blue-400 font-semibold tracking-wider text-sm">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark dark:text-white">The People Behind Our Success</h2>
          <p className="mt-4 text-muted-foreground dark:text-slate-400">We're a team of innovators, problem solvers, and dreamers who love what we do.</p>
          <Link href="/careers" className="mt-6 inline-flex items-center gap-2 border border-border dark:border-slate-700 bg-card dark:bg-slate-800 px-5 py-2.5 rounded-xl font-semibold hover:bg-muted dark:hover:bg-slate-700 transition">
            Join Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden text-center group hover-lift"
              data-reveal
              data-delay={String(i + 1)}
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${m.color} flex items-center justify-center`}>
                <span className="text-white text-3xl font-bold">{m.initials}</span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-gray-900 dark:text-white">{m.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{m.role}</div>
                <div className="flex justify-center gap-3 mt-3 text-gray-400 dark:text-gray-500">
                  <FiLinkedin className="w-4 h-4 hover:text-primary dark:hover:text-blue-400 cursor-pointer" />
                  <FiTwitter className="w-4 h-4 hover:text-primary dark:hover:text-blue-400 cursor-pointer" />
                  <FiGithub className="w-4 h-4 hover:text-primary dark:hover:text-blue-400 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}