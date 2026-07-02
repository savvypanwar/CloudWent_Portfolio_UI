import { Search, FileText, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

const iconMap: Record<string, any> = {
  search: Search,
  "file-text": FileText,
  "pen-tool": PenTool,
  code: Code,
  "check-circle": CheckCircle,
  rocket: Rocket,
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

const colorPalette = [
  "text-blue-600",
  "text-amber-600",
  "text-emerald-600",
  "text-purple-600",
  "text-pink-600",
  "text-teal-600",
];

export const Process = ({ steps }: ProcessProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeader
            label="OUR PROCESS"
            title={<>A Proven Process<br />For Successful Delivery</>}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-border" />

          {steps.map((step, i) => {
            const IconComponent = iconMap[step.icon] || Search;
            return (
              <div key={step.id} className="relative text-center group card-hover border border-transparent hover:border-primary/30 rounded-2xl p-4 transition-all duration-300">
                <div className="mx-auto w-20 h-20 rounded-full grid place-items-center glass-effect border-border shadow-sm group-hover:shadow-md transition">
                  <IconComponent className={`w-8 h-8 ${colorPalette[i % colorPalette.length]} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-xs font-bold text-muted-foreground mt-3">{step.step}</div>
                <h3 className="font-bold text-lg mt-1 text-foreground group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
