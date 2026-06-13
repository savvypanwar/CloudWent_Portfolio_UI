// src/features/home/components/TechnologyBar.tsx

import { 
  NextJsIconSrc, 
  ReactIconSrc, 
  NestJsIconSrc, 
  PostgresqlIconSrc, 
  DockerIconSrc, 
  TailwindCSSSrc 
} from "@/assets/icons";
import { IconWrapper } from "@/assets/icons/IconWrapper";

export default function TechnologyBar() {
  const techs = [
    { name: "Next.js", icon: <IconWrapper src={NextJsIconSrc} alt="Next.js" className="h-5 w-5" /> },
    { name: "React", icon: <IconWrapper src={ReactIconSrc} alt="React" className="h-5 w-5" /> },
    { name: "NestJS", icon: <IconWrapper src={NestJsIconSrc} alt="NestJS" className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <IconWrapper src={PostgresqlIconSrc} alt="PostgreSQL" className="h-5 w-5" /> },
    { name: "Docker", icon: <IconWrapper src={DockerIconSrc} alt="Docker" className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <IconWrapper src={TailwindCSSSrc} alt="Tailwind CSS" className="h-5 w-5" /> },
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-900 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-slate-400">
          {techs.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 text-lg font-semibold tracking-wide hover:text-slate-200 transition-colors"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}