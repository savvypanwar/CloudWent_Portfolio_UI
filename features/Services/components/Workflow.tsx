import { Search, ClipboardList, Palette, Hammer, FlaskConical, Send } from "lucide-react";

const iconMap: Record<string, any> = {
  search: Search,
  "clipboard-list": ClipboardList,
  palette: Palette,
  hammer: Hammer,
  "flask-conical": FlaskConical,
  send: Send,
};

interface WorkflowStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface WorkflowProps {
  steps: WorkflowStep[];
}

const colorPalette = [
  "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
  "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
];

export const Workflow = ({ steps }: WorkflowProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-3">
            HOW WE WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-16">
            A Proven Process<br />For Successful Delivery
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-border" />
          {steps.map((s, i) => {
            const IconComponent = iconMap[s.icon] || Search;
            return (
              <div key={s.id} className="relative text-center">
                <div className={`mx-auto w-20 h-20 rounded-full grid place-items-center ${colorPalette[i % colorPalette.length]} relative z-10 glass-effect border-border shadow-card`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-muted-foreground mt-3">0{i + 1}</div>
                <h3 className="font-bold text-lg text-foreground mt-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};