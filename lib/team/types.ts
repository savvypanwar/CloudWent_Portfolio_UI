export interface TeamExperienceItem {
  period: string;
  title: string;
  company: string;
  desc: string;
}

export interface TeamEducationItem {
  degree: string;
  school: string;
  years: string;
}

export interface TeamProjectItem {
  name: string;
  type: string;
  desc: string;
  tags: string[];
  badge?: string;
}

export interface TeamMemberProfile {
  id: string;
  slug: string;
  name: string;
  role: string;
  initials: string;
  team: string;
  avatarColor: string;
  color: string;
  bio?: string;
  location?: string;
  experience?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  order: number;
  image?: string;
  expertise: string[];
  skills: string[];
  experience_timeline: TeamExperienceItem[];
  education: TeamEducationItem[];
  projects: TeamProjectItem[];
  certifications: string[];
}

export interface TeamSectionConfig {
  key: string;
  label: string;
  subtitle: string;
}

export interface TeamStat {
  value: string;
  label: string;
}

export interface TeamMemberInput {
  slug: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  bio?: string;
  location?: string;
  experience?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  team: string;
  order?: number;
  image?: string;
  expertise?: string[];
  skills?: string[];
  experienceTimeline?: TeamExperienceItem[];
  education?: TeamEducationItem[];
  projects?: TeamProjectItem[];
  certifications?: string[];
}

export interface TeamQueryOptions {
  team?: string;
  limit?: number;
}
