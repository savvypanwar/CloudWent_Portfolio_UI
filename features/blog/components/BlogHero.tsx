import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import LottiePlayer from "@/components/common/LottiePlayer";
import serviceAnimation from "@/assets/lottie/website-maintenance.json";

export const BlogHero = () => {
  const categories = [
    { label: "Technology", color: "from-blue-400 to-blue-600", position: "top-4 left-2" },
    { label: "Design", color: "from-purple-400 to-purple-600", position: "top-32 left-0" },
    { label: "AI/ML", color: "from-emerald-400 to-emerald-600", position: "top-4 right-2" },
    { label: "Productivity", color: "from-orange-400 to-orange-600", position: "top-32 right-0" },
  ];

  return (
   <section className="relative overflow-hidden py-10">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg--background dark:hidden" />
      
      {/* ✅ Dark Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg--foreground" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Our Blog
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
              Insights & Stories<br />
              <span className="text-primary">From Our </span><br />
              Team
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Stay updated with the latest insights, tutorials, and trends in web development, AI, cloud computing, and digital innovation from our team of experts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="primary" size="lg" className="shadow-md hover:opacity-90 transition">
                <Link href="/blog">
                  Browse Posts <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-border hover:bg-muted/50">
                <Link href="/blog/categories">
                  View Categories <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
           
          </div>

          <LottiePlayer
            animationData={serviceAnimation}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};