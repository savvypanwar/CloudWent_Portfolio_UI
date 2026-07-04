import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import LottiePlayer from "@/components/common/LottiePlayer";
import serviceAnimation from "@/assets/lottie/security-research.json";

export const ContactHero = () => {
  const badges = [
    { icon: Zap, title: "Quick Response", desc: "We reply within 24h", pos: "top-8 left-2" },
    { icon: Sparkles, title: "Expert Support", desc: "Technical experts", pos: "top-8 right-2" },
    { icon: Target, title: "Project Focused", desc: "Results that scale", pos: "bottom-12 right-0" },
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
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Let's Talk
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
              Let's Build Something<br />
              <span className="text-primary">Amazing</span> Together
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Have a project in mind or need expert digital solutions? We'd love to hear from you. Our team is ready to turn your ideas into scalable, powerful digital products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg" className="shadow-md hover:opacity-90 transition">
                <Link href="#form">
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
                <Link href="/">
                  View Our Work <Play className="w-4 h-4 fill-current" />
                </Link>
              </Button>
            </div>

            {/* Social Proof */}

          </div>

          {/* Right Column - Image + Floating Badges */}
          <LottiePlayer
            animationData={serviceAnimation}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};