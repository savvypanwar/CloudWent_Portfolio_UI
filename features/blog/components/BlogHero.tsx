import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import heroImg from "@/assets/images/hero-cloud.png";

export const BlogHero = () => {
  const categories = [
    { label: "Technology", color: "from-blue-400 to-blue-600", position: "top-4 left-2" },
    { label: "Design", color: "from-purple-400 to-purple-600", position: "top-32 left-0" },
    { label: "AI/ML", color: "from-emerald-400 to-emerald-600", position: "top-4 right-2" },
    { label: "Productivity", color: "from-orange-400 to-orange-600", position: "top-32 right-0" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      {/* Dark Mode Gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Our Blog
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
              Insights & Stories<br />
              <span className="text-primary">From Our Team</span>
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
            <div className="mt-8 flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                <span className="text-sm font-bold ml-1 text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">Trusted by 50+ teams</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image + Floating Categories */}
          <div className="relative">
            <Image
              src={heroImg}
              alt="CloudWent Blog"
              width={1024}
              height={1024}
              priority
              className="w-full max-w-xl mx-auto animate-float-slow drop-shadow-2xl"
            />
            <div className="absolute inset-0 pointer-events-none">
              {categories.map((cat, i) => (
                <div
                  key={cat.label}
                  className={`absolute ${cat.position} glass-effect rounded-2xl px-3 py-2 flex items-center gap-2 animate-float`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <div className={`w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br ${cat.color} text-white text-xs font-bold`}>
                    {cat.label[0]}
                  </div>
                  <span className="text-xs font-semibold pr-1 text-foreground">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};