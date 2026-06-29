import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

interface TechnologyItem {
  id: string;
  name: string;
}

interface TechnologiesProps {
  technologies: TechnologyItem[];
}

export const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <section className="border-y border-border bg-background dark:bg-dark py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="TECH STACK"
          title="Tools we trust in production"
          description="Battle-tested across dozens of launches. No résumé-driven choices."
          className="mb-14"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {technologies.map((t) => (
            <span
              key={t.id}
              className="px-5 py-2.5 rounded-full glass-effect border-border text-sm font-semibold text-foreground hover:bg-muted/50 hover:-translate-y-0.5 transition-all"
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};