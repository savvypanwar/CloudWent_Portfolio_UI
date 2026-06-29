import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

interface ValueItem {
  id: string;
  title: string;
}

interface ValuesProps {
  values: ValueItem[];
}

export const Values = ({ values }: ValuesProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          label="HOW WE WORK"
          title="Values We Hire For"
          className="max-w-2xl mx-auto"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {values.map((v) => (
            <span
              key={v.id}
              className="px-5 py-2.5 rounded-full glass-effect border-border text-sm font-semibold text-foreground hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              {v.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};