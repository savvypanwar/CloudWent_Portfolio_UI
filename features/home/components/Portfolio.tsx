import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string | null;
  stack: string[];
}

interface PortfolioProps {
  projects: PortfolioProject[];
}

export const Portfolio = ({ projects }: PortfolioProps) => {
  return (
    <section id="work" className="relative overflow-hidden py-24 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
              OUR PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link href="/portfolio" className="text-primary font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-effect border-border rounded-2xl overflow-hidden hover:border-primary/40 transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/30">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              <div className="p-6">
                <span className="inline-block text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-primary text-white mb-3">
                  {project.category.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map((s) => (
                    <span key={s} className="text-[11px] font-medium px-2 py-1 rounded bg-background/10 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          <Button variant="outline" size="icon" className="glass-effect border-border hover:bg-muted/50">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="glass-effect border-border hover:bg-muted/50">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
