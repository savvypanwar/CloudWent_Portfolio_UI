import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import LottiePlayer from "@/components/common/LottiePlayer";
import serviceAnimation from "@/assets/lottie/web-content-design.json";

export const CareerHero = () => {
  const roles = [
    { label: "Frontend Developer", color: "from-blue-400 to-blue-600", pos: "top-4 left-2" },
    { label: "UI/UX Designer", color: "from-purple-400 to-purple-600", pos: "top-32 left-0" },
    { label: "DevOps Engineer", color: "from-orange-400 to-orange-600", pos: "top-4 right-2" },
    { label: "AI Engineer", color: "from-green-400 to-green-600", pos: "top-32 right-0" },
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
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Join Our Team
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
              Build The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Future
              </span>
              <br />
              With CloudWent
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Join a team of innovators, engineers, designers, and strategists building world-class digital products for ambitious businesses worldwide.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg" className="shadow-md hover:opacity-90 transition">
                <Link href="#opportunities">
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
                <Link href="#team">
                  Meet The Team <Play className="w-4 h-4 fill-current" />
                </Link>
              </Button>
            </div>

           
            
          </div>

          {/* Right Column - Globe + Floating Badges */}
          <LottiePlayer
                      animationData={serviceAnimation}
                      className="w-full h-full"
                    />
        </div>
      </div>
    </section>
  );
};