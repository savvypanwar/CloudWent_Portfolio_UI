import Link from "next/link";
import { ArrowRight, MapPin, Clock, Code2, Palette, CloudCog, Sparkles, Megaphone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

const openingsData = [
  { icon: Code2, title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote", type: "Full-time", color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
  { icon: Palette, title: "Product Designer", dept: "Design", location: "Remote", type: "Full-time", color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
  { icon: CloudCog, title: "DevOps Engineer", dept: "Platform", location: "Remote", type: "Full-time", color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
  { icon: Sparkles, title: "AI Engineer", dept: "AI / ML", location: "Remote", type: "Full-time", color: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400" },
  { icon: Megaphone, title: "Growth Marketer", dept: "Marketing", location: "Remote", type: "Full-time", color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
  { icon: GraduationCap, title: "Engineering Intern", dept: "Engineering", location: "Remote", type: "Internship", color: "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400" },
];

export const Openings = () => {
  return (
    <section id="openings" className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">OPEN ROLES</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Find Your Next<br />Adventure</h2>
          </div>
          <Button asChild variant="outline" size="sm" className="glass-effect border-border hover:bg-muted/50">
            <Link href="/contact">
              Don't see your role? Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {openingsData.map((o, i) => (
            <div
              key={o.title}
              className="group glass-effect border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl grid place-items-center ${o.color} mb-4`}>
                <o.icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-muted-foreground">{o.dept}</div>
              <h3 className="font-bold text-lg mt-1 mb-3 text-foreground">{o.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {o.location}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {o.type}</span>
              </div>
              
              {/* ✅ FIXED: Link now points to the new Apply Page with the job title as a query parameter */}
              <Button asChild variant="primary" size="sm" className="mt-5 shadow-md hover:opacity-90 transition">
                <Link href={`/careers/apply?role=${encodeURIComponent(o.title)}`}>
                  Apply now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};