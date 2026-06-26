import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/Button/Button";
import type { TeamMemberProfile } from "@/lib/team";

interface TeamProps {
  members: TeamMemberProfile[];
}

export const Team = ({ members }: TeamProps) => {
  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
              OUR TEAM
            </p>
            <h2 className="text-4xl font-extrabold text-foreground leading-tight">
              Experts Behind<br />Your Success
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Passionate professionals with expertise in modern technologies and a drive for excellence.
            </p>

            <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50">
              <Link href="/team">
                <span className="px-2"> View all team</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {members.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="glass-effect border-border rounded-2xl p-4 text-center hover:shadow-lg transition block"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.color} grid place-items-center text-3xl font-bold text-white/90`}>
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-sm text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {member.role}
                </p>

                <div className="flex justify-center gap-2 mt-3 text-muted-foreground">
                  {member.linkedin ? (
                    <FiLinkedin className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                  ) : null}
                  {member.twitter ? (
                    <FiTwitter className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                  ) : null}
                  {member.github ? (
                    <FiGithub className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
