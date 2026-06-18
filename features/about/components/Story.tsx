import Link from "next/link";
import { ArrowRight, Cloud, Users, Rocket, Medal, Flag } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const Story = () => {
  const steps = [
    { icon: Cloud, year: "2019", title: "Founded", text: "CloudWent was founded with a vision to deliver scalable digital solutions." },
    { icon: Users, year: "2020", title: "Team Growth", text: "Grew our team and expanded our service offerings." },
    { icon: Rocket, year: "2021", title: "Global Reach", text: "Started working with clients across different countries." },
    { icon: Medal, year: "2023", title: "Milestone Achieved", text: "200+ projects delivered with 5-star client satisfaction." },
    { icon: Flag, year: "Future", title: "Looking Ahead", text: "Continuing our mission to build a better digital future together." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
        {/* Left side */}
        <div>
          <span className="text-primary font-semibold tracking-wider text-sm">OUR STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            From An Idea To A Digital Transformation Partner
          </h2>
          <p className="mt-4 text-muted-foreground">
            CloudWent was founded with a simple idea — to help businesses unlock their full potential through technology. What started as a small team of passionate developers has grown into a full-service digital solutions company trusted by businesses worldwide.
          </p>

          <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50">
            <Link href="/about/story">
              Read Our Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Right side (Timeline) */}
        <div className="relative">
          {/* Dashed line */}
          <div className="absolute top-8 left-0 right-0 h-px border-t border-dashed border-border" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.year} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full glass-effect border-border grid place-items-center text-primary">
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="font-bold mt-4 text-foreground">{s.year}</div>
                <div className="font-semibold text-sm mt-1 text-foreground">{s.title}</div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};