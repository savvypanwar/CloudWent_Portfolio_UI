import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/Button/Button";

export const Team = () => {
  const members = [
    { name: "Waseem Ahmad", role: "CEO & Founder", initials: "WA", color: "from-blue-500 to-indigo-700" },
    { name: "Ayesha Khan", role: "CTO", initials: "AK", color: "from-pink-500 to-rose-700" },
    { name: "Usman Tariq", role: "Lead Developer", initials: "UT", color: "from-green-500 to-emerald-700" },
    { name: "Sarah Ahmed", role: "UI/UX Designer", initials: "SA", color: "from-purple-500 to-violet-700" },
    { name: "Bilal Ashraf", role: "DevOps Engineer", initials: "BA", color: "from-orange-500 to-amber-700" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid lg:grid-cols-[1fr_2.5fr] gap-10 items-start">
        <div>
          <span className="text-primary font-semibold tracking-wider text-sm">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            The People Behind Our Success
          </h2>
          <p className="mt-4 text-muted-foreground">
            We're a team of innovators, problem solvers, and dreamers who love what we do.
          </p>

          {/* ✅ Updated Button */}
          <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50">
            <Link href="/careers">
              Join Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="rounded-2xl border border-border bg-background overflow-hidden text-center group hover-lift"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${m.color} flex items-center justify-center`}>
                <span className="text-white text-3xl font-bold">{m.initials}</span>
              </div>
              <div className="p-4">
                <div className="font-semibold text-foreground">{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
                <div className="flex justify-center gap-3 mt-3 text-muted-foreground">
                  <FiLinkedin className="w-4 h-4 hover:text-primary cursor-pointer" />
                  <FiTwitter className="w-4 h-4 hover:text-primary cursor-pointer" />
                  <FiGithub className="w-4 h-4 hover:text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};