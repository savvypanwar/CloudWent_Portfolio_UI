import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

export interface ProjectHeroProps {
  title: string;
  description: string;
  client?: string;
  date?: string;
  role?: string;
}

export const ProjectHero = ({
  title,
  description,
  client,
  date,
  role,
}: ProjectHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
        
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            {title}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
            {description}
          </p>
          
          {(client || date || role) && (
            <div className="flex flex-wrap gap-6 text-sm text-blue-200">
              {client && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Client: {client}</span>
                </div>
              )}
              {date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Completed: {date}</span>
                </div>
              )}
              {role && (
                <div className="flex items-center gap-2">
                  <span>Role: {role}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};