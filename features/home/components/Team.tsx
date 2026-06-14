"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

export const Team = () => {
  const team = [
    {
      name: "Waseem Ahmad",
      role: "CEO & Founder",
      grad: "from-blue-300 to-blue-500",
      initials: "WA",
    },
    {
      name: "Ayesha Khan",
      role: "CTO",
      grad: "from-pink-300 to-rose-500",
      initials: "AK",
    },
    {
      name: "Usman Tariq",
      role: "Lead Developer",
      grad: "from-amber-300 to-orange-500",
      initials: "UT",
    },
    {
      name: "Sarah Ahmed",
      role: "UI/UX Designer",
      grad: "from-purple-300 to-fuchsia-500",
      initials: "SA",
    },
    {
      name: "Bilal Ashraf",
      role: "DevOps Engineer",
      grad: "from-emerald-300 to-teal-500",
      initials: "BA",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
        
        {/* Left Side – Title & Description */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3 text-blue-400">
            OUR TEAM
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Experts Behind<br />Your Success
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-5 leading-relaxed">
            Passionate professionals with expertise in modern technologies and a drive for excellence.
          </p>
          <Link
            href="#"
            className="text-primary font-semibold inline-flex items-center gap-1.5 mt-6 hover:gap-2.5 transition-all"
          >
            View all team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Side – Team Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 text-center hover:shadow-lg transition"
            >
              {/* Avatar */}
              <div
                className={`w-full aspect-square rounded-xl bg-gradient-to-br ${member.grad} mb-3 grid place-items-center text-3xl font-bold text-white/90`}
              >
                {member.initials}
              </div>

              {/* Name & Role */}
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-2 mt-3 text-slate-500 dark:text-slate-400">
                <FiLinkedin className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                <FiTwitter className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                <FiGithub className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};