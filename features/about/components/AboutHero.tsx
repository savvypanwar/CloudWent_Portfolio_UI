import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

import LottiePlayer from "@/components/common/LottiePlayer";
import serviceAnimation from "@/assets/lottie/web-design-data.json";

export const AboutHero = () => {
  // Our values as floating badges (like tech icons)
  const values = [
    { icon: "💡", label: "Innovation", position: "top-4 left-2" },
    { icon: "🛡️", label: "Integrity", position: "top-32 left-0" },
    { icon: "🏆", label: "Excellence", position: "top-4 right-2" },
    { icon: "🎯", label: "Impact", position: "top-32 right-0" },
  ];

  return (
    <section className="relative overflow-hidden py-10">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg--background dark:hidden" />
      
      {/* ✅ Dark Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg--foreground" />

      <div className="max-w-7xl mx-auto px-6 pb-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Who We Are
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
            Building Digital Solutions That Drive <span className="text-primary">Real Impact</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            At CloudWent, we combine modern technologies, creative thinking, and a passion for excellence to build scalable digital products that help businesses grow and thrive.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Our Services Button */}
            <Button asChild variant="primary" size="lg" className="shadow-md hover:opacity-90 transition">
              <Link href="/services">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Work With Us Button */}
            <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
              <Link href="/contact">
                Work With Us <Play className="w-4 h-4 fill-current" />
              </Link>
            </Button>
          </div>
          
          
        </div>

        {/* Right Side */}
        <LottiePlayer
            animationData={serviceAnimation}
            className="w-full h-full"
          />
      </div>
    </section>
  );
};