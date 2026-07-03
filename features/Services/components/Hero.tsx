

import Link from "next/link";
import { ArrowRight, Sparkles, Star, Code2, Brain, Smartphone, CloudCog, Play } from "lucide-react";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/Button/Button";
import LottiePlayer from "@/components/common/LottiePlayer";
import serviceAnimation from "@/assets/lottie/web-design-layout.json";


export const Hero = () => {
  // ✅ Right side floating badges with Icons
  const serviceBadges = [
    { name: "Web Dev", icon: Code2, position: "top-4 left-2" },
    { name: "AI Solutions", icon: Brain, position: "top-32 left-0" },
    { name: "Mobile Apps", icon: Smartphone, position: "top-4 right-2" },
    { name: "Cloud & DevOps", icon: CloudCog, position: "top-32 right-0" },
  ];

  return (
    <section className="relative overflow-hidden py-10">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />

      {/* Dark Mode Gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-background" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> What we do
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
              Services That Ship<br />
              <span className="text-gradient-hero">Real Outcomes</span><br />
              For Your Business
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              From a single landing page to a multi-product platform — we design, build and scale software that earns its place in your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">


              <div className="mt-8 flex flex-wrap gap-3">
                {/* Start Your Project Button */}
                <Button asChild variant="primary" size="lg" className="shadow-md hover:opacity-90 transition">
                  <Link href="/contact">
                    <span className="px-2">Start A Project</span>  <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                {/* View Our Work Button */}
                <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
                  <Link href="#pricing">
                    <span className="px-2">View Pricing</span> <Play className="w-4 h-4 fill-current" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                <span className="text-sm font-bold ml-1 text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">Trusted by 50+ teams</span>
              </div>
            </div>
          </div>

          {/* ✅ Right Side - Floating Badges with Icons */}
          <LottiePlayer
            animationData={serviceAnimation}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};