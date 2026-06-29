import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Linkedin, Twitter, Github, Youtube, Instagram, Facebook } from "@/components/common/SocialIcons";
import { SectionHeader } from "@/components/layout/SectionHeader/SectionHeader";

interface TeamSectionProps {
  label: string;
  subtitle: string;
  members: {
    slug: string;
    name: string;
    role: string;
    image?: string;
    initials: string;
    color: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  }[];
  viewAllLink?: string;
}

export const TeamSection = ({ label, subtitle, members, viewAllLink = "#" }: TeamSectionProps) => {
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionHeader
          title={label}
          description={subtitle}
          action={viewAllLink ? { text: "View all", href: viewAllLink } : undefined}
          className="mb-10"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map(({ slug, name, role, image, initials, color, linkedin, twitter, github }) => (
            <article
              key={name}
              className="group glass-effect border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all text-center"
            >
              <Link href={`/team/${slug}`} className="block">
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <span className="text-white text-2xl font-bold">{initials}</span>
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </Link>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3 mt-4">
                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    className="w-8 h-8 bg-muted/20 hover:bg-primary hover:text-white text-muted-foreground rounded-lg flex items-center justify-center transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                ) : null}
                {twitter ? (
                  <a
                    href={twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} on Twitter`}
                    className="w-8 h-8 bg-muted/20 hover:bg-primary hover:text-white text-muted-foreground rounded-lg flex items-center justify-center transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                ) : null}
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} on GitHub`}
                    className="w-8 h-8 bg-muted/20 hover:bg-primary hover:text-white text-muted-foreground rounded-lg flex items-center justify-center transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                ) : null}
                {!linkedin && !twitter && !github ? (
                  <div className="h-8" aria-hidden="true" />
                ) : null}
                  </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-6 text-center lg:hidden">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
