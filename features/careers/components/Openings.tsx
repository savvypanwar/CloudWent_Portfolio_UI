import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  color?: string;
}

interface OpeningsProps {
  jobs: JobOpening[];
}

const defaultColors = [
  "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-primary",
  "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
  "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400",
];

export const Openings = ({ jobs }: OpeningsProps) => {
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
          {jobs.map((o, i) => (
            <div
              key={o.id}
              className="group glass-effect border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl grid place-items-center ${o.color || defaultColors[i % defaultColors.length]} mb-4`}>
                <span className="text-lg font-bold">{o.title.charAt(0)}</span>
              </div>
              <div className="text-xs font-bold text-muted-foreground">{o.department}</div>
              <h3 className="font-bold text-lg mt-1 mb-3 text-foreground">{o.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {o.location}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {o.type}</span>
              </div>
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