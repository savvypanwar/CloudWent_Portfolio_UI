"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles,
  Users,
  Smile,
  Clock,
  Wifi
} from "lucide-react";
import heroImg from "@/assets/images/hero-cloud.png";

export const CareerHero = () => {
  const roles = [
    { label: "Frontend Developer", color: "from-blue-400 to-blue-600", pos: "top-4 left-2" },
    { label: "UI/UX Designer", color: "from-purple-400 to-purple-600", pos: "top-32 left-0" },
    { label: "DevOps Engineer", color: "from-orange-400 to-orange-600", pos: "top-4 right-2" },
    { label: "AI Engineer", color: "from-green-400 to-green-600", pos: "top-32 right-0" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-card">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Join Our Team
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-dark dark:text-white">
            Build The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Future
            </span>
            <br />
            With CloudWent
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-muted-foreground dark:text-slate-400 max-w-md leading-relaxed">
            Join a team of innovators, engineers, designers, and strategists building world-class digital products for ambitious businesses worldwide.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#opportunities"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
            >
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#team"
              className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3.5 rounded-xl font-semibold hover:bg-surface transition"
            >
              Meet The Team <Play className="w-4 h-4 fill-current" />
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-11 h-11 rounded-full border-2 border-background bg-gradient-to-br ${
                  ["from-blue-400 to-blue-600","from-purple-400 to-purple-600","from-pink-400 to-rose-500","from-amber-400 to-orange-500"][i-1]
                }`} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                <span className="text-sm font-bold ml-1">5.0</span>
                <span className="text-sm text-muted-foreground dark:text-slate-400">(50+ Reviews)</span>
              </div>
              <p className="text-xs text-muted-foreground dark:text-slate-500 mt-0.5">Trusted by 50+ companies worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Column - Globe + Floating Badges */}
        <div className="relative">
          <Image src={heroImg} alt="Careers" width={1024} height={1024} className="w-full max-w-xl mx-auto animate-float-slow drop-shadow-2xl" />
          
          <div className="absolute inset-0 pointer-events-none">
            {roles.map((role, i) => (
              <div 
                key={role.label} 
                className={`absolute ${role.pos} bg-card dark:bg-slate-800 rounded-2xl shadow-card border border-border dark:border-slate-700 px-3 py-2 flex items-center gap-2 animate-float`} 
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div className={`w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br ${role.color} text-white text-xs font-bold`}>
                  {role.label[0]}
                </div>
                <span className="text-xs font-semibold pr-1 text-slate-900 dark:text-white">
                  {role.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};