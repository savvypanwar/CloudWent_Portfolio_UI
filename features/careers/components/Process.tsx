import { Search, MessageSquare, ClipboardCheck, Handshake, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

const iconMap: Record<string, any> = {
  search: Search,
  message: MessageSquare,
  "clipboard-check": ClipboardCheck,
  handshake: Handshake,
};

interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessProps {
  steps: ProcessStep[];
}

export const Process = ({ steps }: ProcessProps) => {
  return (
    <section className="py-24 border-y border-border bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="HIRING PROCESS"
          title={<>Simple, Respectful<br />Of Your Time</>}
          className="mb-16"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-border" />
          {steps.map((s, i) => {
            const IconComponent = iconMap[s.icon] || Search;
            return (
              <div key={s.id} className="relative text-center">
                <div className="mx-auto w-20 h-20 rounded-full glass-effect border-border grid place-items-center text-primary relative z-10">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-muted-foreground mt-3">0{i + 1}</div>
                <h3 className="font-bold text-lg mt-1 text-foreground">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground inline-flex items-center gap-2 justify-center w-full">
          <ShieldCheck className="w-4 h-4 text-primary" /> Paid craft rounds. Feedback at every stage, even if it's a no.
        </div>
      </div>
    </section>
  );
};