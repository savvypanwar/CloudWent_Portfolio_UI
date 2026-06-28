// components/ui/Tabs/Tabs.tsx

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

export interface TabsProps {
  tabs: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string; // ✅ Add className here
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ 
  tabs, 
  value, 
  onChange, 
  className, 
  ...props 
}, ref) => {
  const [selected, setSelected] = useState(value || tabs[0]?.value);

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <div className="flex space-x-1 rounded-xl bg-surface p-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleSelect(tab.value)}
            className={cn(
              "flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
              selected === tab.value
                ? "bg-background text-blue-600 shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
});
Tabs.displayName = "Tabs";

export { Tabs };