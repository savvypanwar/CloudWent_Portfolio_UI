import { Users, MessageSquare, TrendingUp, Heart, Smile } from "lucide-react";
import { Linkedin, Twitter, Github, Youtube, Instagram, Facebook } from "@/components/common/SocialIcons";
import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

export const Culture = () => {
  const items = [
    { icon: Users, title: "Collaborative", text: "We work together, win together." },
    { icon: MessageSquare, title: "Transparent", text: "Open communication is our foundation." },
    { icon: TrendingUp, title: "Growth Mindset", text: "We learn, adapt, and keep improving." },
    { icon: Heart, title: "Work-Life Balance", text: "We value balance and well-being." },
    { icon: Smile, title: "Have Fun", text: "We celebrate wins and enjoy the journey." },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="rounded-3xl glass-effect p-10 border-border">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-8 items-start">
          <div>
            <SectionHeader title="Our Culture" description="We believe a great culture builds great products." className="mb-5" />
            
            {/* ✅ Updated Button */}
            <Button asChild variant="outline" size="sm" className="mt-5 glass-effect border-border hover:bg-muted/50">
              <Link href="#">
                <Instagram className="w-4 h-4" /> Life At CloudWent
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {items.map((it, i) => (
              <div key={it.title}>
                <div className="w-11 h-11 grid place-items-center rounded-full bg-primary/10 text-primary mb-3">
                  <it.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-sm text-foreground">{it.title}</div>
                <p className="text-muted-foreground text-xs mt-1">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};