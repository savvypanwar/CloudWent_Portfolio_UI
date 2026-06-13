// ✅ NO 'use client' - Pure Server Component
import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/10 mb-6">
            <Info className="h-4 w-4" />
            About CloudWent
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Driving Digital
            <br />
            <span className="text-blue-200">Excellence</span>
          </h1>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate engineers, designers, and strategists 
            dedicated to building digital products that drive real business outcomes.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-lg font-semibold text-blue-600 hover:bg-gray-100 shadow-xl shadow-blue-900/30 transition-colors">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};