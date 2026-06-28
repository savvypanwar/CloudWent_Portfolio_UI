import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Mail,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Linkedin, Twitter, Github, Youtube, Instagram, Facebook } from "@/components/common/SocialIcons";

import { getTeamMemberByIdentifier, getTeamMembers, getTeamSlugs } from "@/lib/team";

export async function generateStaticParams() {
  const slugs = await getTeamSlugs();
  return slugs.map((slug) => ({ slug }));
}

const skillIcons: Record<string, string> = {
  AWS: "☁️",
  Docker: "🐳",
  Kubernetes: "⚙️",
  "Next.js": "N",
  NextUI: "U",
  TypeScript: "TS",
  React: "⚛️",
  "Node.js": "🟢",
  Python: "🐍",
  Figma: "🎨",
  Terraform: "🏗️",
  GCP: "☁️",
  Kafka: "📨",
  Redis: "🔴",
  MongoDB: "🍃",
  GraphQL: "◈",
  "Tailwind CSS": "💨",
  "After Effects": "🎬",
};

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getTeamMemberByIdentifier(slug);
  if (!member) notFound();

  const allMembers = await getTeamMembers();
  const teamMates = allMembers
    .filter((m) => m.team === member.team && m.slug !== member.slug)
    .slice(0, 4);

  const bioParagraphs = (member.bio ?? "").split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors">
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-5">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                <div className="w-28 h-28 rounded-2xl mx-auto mb-5 overflow-hidden shadow-lg">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                      <span className="text-primary-foreground text-3xl font-bold">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center mb-5">
                  <h1 className="text-xl font-extrabold text-foreground">
                    {member.name}
                  </h1>
                  <p className="text-blue-600 dark:text-primary font-medium text-sm mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    { icon: MapPin, label: "Location", value: member.location },
                    { icon: Clock, label: "Experience", value: member.experience },
                    { icon: Mail, label: "Email", value: member.email },
                    { icon: Linkedin, label: "LinkedIn", value: member.linkedin },
                  ]
                    .filter((item) => item.value)
                    .map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 text-xs">
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{label}</p>
                          <p className="text-foreground dark:text-gray-300 font-medium truncate max-w-[160px]">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex gap-2 justify-center pt-4 border-t border-border">
                  {[
                    { href: member.linkedin, Icon: Linkedin },
                    { href: member.twitter, Icon: Twitter },
                    { href: member.github, Icon: Github },
                    { href: member.email ? `mailto:${member.email}` : undefined, Icon: Mail },
                  ]
                    .filter((item) => item.href)
                    .map(({ href, Icon }, index) => (
                      <a
                        key={index}
                        href={href}
                        target={href?.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="w-8 h-8 bg-surface hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-primary-foreground text-muted-foreground dark:text-muted-foreground rounded-lg flex items-center justify-center transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                </div>
              </div>

              {member.expertise.length > 0 ? (
                <div className="bg-card rounded-2xl p-5 border border-border shadow-sm transition-colors">
                  <h3 className="text-sm font-bold text-foreground mb-4">
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {teamMates.length > 0 ? (
                <div className="bg-card rounded-2xl p-5 border border-border shadow-sm transition-colors">
                  <h3 className="text-sm font-bold text-foreground mb-4">
                    Same Team
                  </h3>
                  <div className="space-y-3">
                    {teamMates.map((m) => (
                      <Link
                        key={m.slug}
                        href={`/team/${m.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                          {m.image ? (
                            <Image
                              src={m.image}
                              alt={m.name}
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${m.color} flex items-center justify-center`}>
                              <span className="text-primary-foreground text-xs font-bold">
                                {m.initials}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                            {m.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {m.role}
                          </p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-muted-foreground ml-auto group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-2 space-y-6">
              {member.bio ? (
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                  <h2 className="text-base font-bold text-foreground mb-4">
                    About {member.name.split(" ")[0]}
                  </h2>
                  <div className="space-y-3">
                    {bioParagraphs.map((para, index) => (
                      <p
                        key={index}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}

              {member.skills.length > 0 ? (
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                  <h2 className="text-base font-bold text-foreground mb-5">
                    Skills & Technologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {member.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex flex-col items-center gap-1.5 bg-surface hover:bg-primary/10 rounded-xl p-3 transition-colors cursor-default min-w-[60px]"
                      >
                        <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center shadow-sm text-lg">
                          {skillIcons[skill] || "◆"}
                        </div>
                        <span className="text-xs text-muted-foreground font-medium text-center">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {(member.experience_timeline.length > 0 || member.education.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.experience_timeline.length > 0 ? (
                    <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                      <div className="flex items-center gap-2 mb-5">
                        <Briefcase className="w-4 h-4 text-blue-600 dark:text-primary" />
                        <h2 className="text-base font-bold text-foreground">
                          Experience
                        </h2>
                      </div>
                      <div className="space-y-5">
                        {member.experience_timeline.map(({ period, title, company, desc }) => (
                          <div
                            key={period}
                            className="relative pl-4 border-l-2 border-blue-100 dark:border-blue-800"
                          >
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white shadow-sm" />
                            <p className="text-xs text-blue-600 dark:text-primary font-semibold mb-0.5">
                              {period}
                            </p>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                              {title}
                            </p>
                            <p className="text-xs text-muted-foreground mb-1.5">
                              — {company}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {member.education.length > 0 ? (
                    <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                      <div className="flex items-center gap-2 mb-5">
                        <GraduationCap className="w-4 h-4 text-blue-600 dark:text-primary" />
                        <h2 className="text-base font-bold text-foreground">
                          Education
                        </h2>
                      </div>
                      <div className="space-y-5">
                        {member.education.map(({ degree, school, years }) => (
                          <div
                            key={degree}
                            className="relative pl-4 border-l-2 border-indigo-100 dark:border-indigo-800"
                          >
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white shadow-sm" />
                            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-0.5">
                              {years}
                            </p>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                              {degree}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {school}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )}

              {member.projects.length > 0 ? (
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-base font-bold text-foreground">
                      Featured Projects
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {member.projects.map(({ name, type, desc, tags, badge }) => (
                      <div
                        key={name}
                        className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
                      >
                        <div className="h-24 bg-gradient-to-br from-blue-600 to-indigo-800 relative flex items-end p-3">
                          <span className="text-primary-foreground text-xs font-semibold">
                            {name}
                          </span>
                          {badge ? (
                            <span className="absolute top-2 right-2 bg-background/20 text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">
                              {badge}
                            </span>
                          ) : null}
                          <ExternalLink className="absolute top-2 left-2 w-3 h-3 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="p-3">
                          <p className="text-xs text-blue-600 dark:text-primary font-semibold mb-1">
                            {type}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                            {desc}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-surface text-muted-foreground text-[10px] rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {member.certifications.length > 0 ? (
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm transition-colors">
                  <h2 className="text-base font-bold text-foreground mb-5">
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {member.certifications.map((cert) => (
                      <div
                        key={cert}
                        className="flex items-center gap-3 bg-surface rounded-xl p-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <span className="text-primary-foreground text-xs font-bold">✓</span>
                        </div>
                        <p className="text-xs font-medium text-foreground dark:text-gray-300 leading-snug">
                          {cert}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {member.email ? (
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 dark:from-blue-700 dark:to-indigo-900 p-8 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-40 h-40 bg-background/10 rounded-full -translate-y-1/4 translate-x-1/4 blur-2xl pointer-events-none" />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      Let&apos;s Work Together
                    </h3>
                    <p className="text-primary-foreground/60 text-sm mb-6">
                      Have a project in mind? Let&apos;s discuss how we can bring
                      your ideas to life.
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 bg-background text-primary font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary/10 transition-colors shadow-md"
                    >
                      Schedule a Meeting <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
