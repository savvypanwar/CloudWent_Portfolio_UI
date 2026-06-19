import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/Button/Button";

export const Team = () => {
  const team = [
    {
      name: "Waseem Ahmad",
      role: "CEO & Founder",
      grad: "from-blue-300 to-blue-500",
      initials: "WA",
    },
    {
      name: "Ayesha Khan",
      role: "CTO",
      grad: "from-pink-300 to-rose-500",
      initials: "AK",
    },
    {
      name: "Usman Tariq",
      role: "Lead Developer",
      grad: "from-amber-300 to-orange-500",
      initials: "UT",
    },
    {
      name: "Sarah Ahmed",
      role: "UI/UX Designer",
      grad: "from-purple-300 to-fuchsia-500",
      initials: "SA",
    },
    {
      name: "Bilal Ashraf",
      role: "DevOps Engineer",
      grad: "from-emerald-300 to-teal-500",
      initials: "BA",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 transition-colors">
      {/* ✅ Light Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />
      
      {/* ✅ Dark Mode Gradient (Bilkul Hero jaisa) */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
          
          {/* Left Side – Title & Description */}
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
            
            {/* ✅ Updated Button */}
            <Button asChild variant="outline" size="md" className="mt-6 glass-effect border-border hover:bg-muted/50">
              <Link href="/team">
               <span className="px-2"> View all team</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right Side – Team Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass-effect border-border rounded-2xl p-4 text-center hover:shadow-lg transition"
              >
                {/* Avatar */}
                <div
                  className={`w-full aspect-square rounded-xl bg-gradient-to-br ${member.grad} mb-3 grid place-items-center text-3xl font-bold text-white/90`}
                >
                  {member.initials}
                </div>

                {/* Name & Role */}
                <h3 className="font-bold text-sm text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2 mt-3 text-muted-foreground">
                  <FiLinkedin className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                  <FiTwitter className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                  <FiGithub className="w-3.5 h-3.5 hover:text-primary cursor-pointer transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};