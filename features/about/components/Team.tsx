import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Linkedin, Twitter, Github, Youtube, Instagram, Facebook } from "@/components/common/SocialIcons";
import { Button } from "@/components/ui/Button/Button";
import type { TeamMemberProfile } from "@/lib/team";

interface TeamProps {
  members: TeamMemberProfile[];
}

export const Team = ({ members }: TeamProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid lg:grid-cols-[1fr_2.5fr] gap-10 items-start">
        <div>
          <span className="text-primary font-semibold tracking-wider text-sm">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground group-hover:text-primary transition-colors duration-300">
            The People Behind Our Success
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re a team of innovators, problem solvers, and dreamers who love what we do.
          </p>

          <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50">
            <Link href="/careers">
              Join Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="rounded-2xl border border-border bg-background overflow-hidden text-center group hover-lift block"
            >
              <div className="w-full aspect-square overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                    <span className="text-white text-3xl font-bold">{member.initials}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="font-semibold text-foreground">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.role}</div>
                <div className="flex justify-center gap-3 mt-3 text-muted-foreground">
                  {member.linkedin ? (
                    <Linkedin className="w-4 h-4 hover:text-primary cursor-pointer" />
                  ) : null}
                  {member.twitter ? (
                    <Twitter className="w-4 h-4 hover:text-primary cursor-pointer" />
                  ) : null}
                  {member.github ? (
                    <Github className="w-4 h-4 hover:text-primary cursor-pointer" />
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
