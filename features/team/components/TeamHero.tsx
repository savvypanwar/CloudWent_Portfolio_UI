import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import LottiePlayer from "@/components/common/LottiePlayer";
import serviceAnimation from "@/assets/lottie/designer-building-website.json";

export const TeamHero = () => {
  // Team members as floating bubbles
  const teamBubbles = [
    { initials: "WA", color: "from-blue-500 to-indigo-600", position: "top-4 left-2" },
    { initials: "AK", color: "from-purple-500 to-fuchsia-600", position: "top-32 left-0" },
    { initials: "UT", color: "from-green-500 to-emerald-600", position: "top-4 right-2" },
    { initials: "SA", color: "from-pink-500 to-rose-600", position: "top-32 right-0" },
  ];

  return (
    <section className="relative overflow-hidden ">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      {/* Dark Mode Gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Meet The Team
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
              Experts Behind<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Your Success
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Passionate professionals with expertise in modern technologies and a drive for excellence.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg" className="shadow-md hover:opacity-90 transition">
                <Link href="#opportunities">
                  Join Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
                <Link href="#work">
                  View Our Work <Play className="w-4 h-4 fill-current" />
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 rounded-full border-2 border-background bg-gradient-to-br ${["from-blue-400 to-blue-600", "from-purple-400 to-purple-600", "from-pink-400 to-rose-500", "from-amber-400 to-orange-500"][i - 1]
                      }`}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold ml-1 text-foreground">5.0</span>
                  <span className="text-sm text-muted-foreground">(50+ Reviews)</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Trusted by 50+ companies worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image + Floating Bubbles */}
          <LottiePlayer
            animationData={serviceAnimation}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};