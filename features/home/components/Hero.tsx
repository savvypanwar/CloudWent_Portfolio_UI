

import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import heroImg from "@/assets/images/hero-cloud.png";
// Import your downloaded PNG icons
import nextjsIcon from "@/assets/icons/nextjs.svg";
import nestjsIcon from "@/assets/icons/nestjs.svg";
import postgresIcon from "@/assets/icons/PostgresSQL.svg";
import awsIcon from "@/assets/icons/aws-svgrepo-com.svg";
import aiIcon from "@/assets/icons/reactjs.svg";
import dockerIcon from "@/assets/icons/Docker.svg";

export const Hero = () => {
  const stack = [
    { name: "Next.js", icon: nextjsIcon, alt: "Next.js", position: "top-4 left-2" },
    { name: "NestJS", icon: nestjsIcon, alt: "NestJS", position: "top-32 left-0" },
    { name: "PostgreSQL", icon: postgresIcon, alt: "PostgreSQL", position: "top-64 left-8" },
    { name: "AWS", icon: awsIcon, alt: "AWS", position: "top-4 right-2" },
    { name: "React.js", icon: aiIcon, alt: "AI", position: "top-32 right-0" },
    { name: "Docker", icon: dockerIcon, alt: "Docker", position: "top-64 right-8" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      
      {/* ✅ Dark Mode Gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div data-reveal>
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-card dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> We Build Digital Excellence
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-dark dark:text-white">
            Building Scalable<br />Digital Solutions<br />
            <span className="text-blue-600 dark:text-blue-400">For Ambitious</span><br />
            <span className="text-blue-600 dark:text-blue-400">Businesses</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-muted-foreground dark:text-slate-400 max-w-md leading-relaxed">
            CloudWent empowers businesses to transform ideas into powerful digital products with modern technologies, AI, and cloud solutions.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3.5 rounded-xl font-semibold hover:bg-surface transition dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700">
              View Our Work <Play className="w-4 h-4 fill-current" />
            </a>
          </div>
          
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
                <span className="text-sm font-bold ml-1 text-slate-800 dark:text-slate-300">5.0</span>
                <span className="text-sm text-muted-foreground dark:text-slate-400">(50+ Reviews)</span>
              </div>
              <p className="text-xs text-muted-foreground dark:text-slate-500 mt-0.5">Trusted by 50+ companies worldwide</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image src={heroImg} alt="CloudWent platform" width={1024} height={1024} className="w-full max-w-xl mx-auto animate-float-slow drop-shadow-2xl" />
          
          <div className="absolute inset-0 pointer-events-none">
            {stack.map((s, i) => (
              <div 
                key={s.name} 
                className={`absolute ${s.position} bg-card dark:bg-slate-800 rounded-2xl shadow-card border border-border dark:border-slate-700 px-3 py-2 flex items-center gap-2 animate-float`} 
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <img src={s.icon.src} alt={s.alt} className="w-9 h-9 object-contain" />
                <span className="text-xs font-semibold pr-1 text-slate-800 dark:text-white">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};