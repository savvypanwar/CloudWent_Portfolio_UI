import { 
  NextJs1Icon,
  TailwindCSSIcon,
  TypescriptIcon,
  AWSIcon,
  DockerIconSrc,
  VercelIcon,
} from "@/assets/icons";
import { IconWrapper } from "@/assets/icons/IconWrapper";

export const TechnologyBar = () => {
  const techs = [
    { name: "NEXT.", icon: <IconWrapper src={NextJs1Icon} alt="Next.js" className="h-12 w-auto object-contain" /> },
    { name: "Tailwindcss", icon: <IconWrapper src={TailwindCSSIcon} alt="Tailwind CSS" className="h-10 w-auto object-contain" /> },
    { name: "TypeScript", icon: <IconWrapper src={TypescriptIcon} alt="TypeScript" className="h-6 w-auto object-contain" /> },
    { name: "", icon: <IconWrapper src={AWSIcon} alt="AWS" className="h-10 w-auto object-contain" /> },
    { name: "Docker", icon: <IconWrapper src={DockerIconSrc} alt="Docker" className="h-10 w-auto object-contain" /> },
    { name: "", icon: <IconWrapper src={VercelIcon} alt="Vercel" className="h-4 w-auto object-contain" /> },
  ];

  return (
    <section className="border-y border-border bg-surface py-6 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="mb-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground dark:text-foreground/80 group-hover:text-primary transition-colors duration-300">
            Trusted by innovative companies
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-muted-foreground dark:text-foreground/90">
          {techs.map((tech, index) => {
            // Agar icon missing hai to skip karo
            if (!tech.icon) return null;
            return (
              <div
                key={index}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                {tech.icon}
                {tech.name !== "" && tech.name !== "NEXT." && (
                  <span className="text-lg font-semibold">
                    {tech.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
