import { z } from "zod";

const optionalEmail = z.union([z.literal(""), z.string().email()]);
const optionalUrl = z.union([z.literal(""), z.string().url()]);

export const teamExperienceSchema = z.object({
  period: z.string().min(1),
  title: z.string().min(1),
  company: z.string().min(1),
  desc: z.string().min(1),
});

export const teamEducationSchema = z.object({
  degree: z.string().min(1),
  school: z.string().min(1),
  years: z.string().min(1),
});

export const teamProjectSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  desc: z.string().min(1),
  tags: z.array(z.string()),
  badge: z.string().optional(),
});

export const teamMemberSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  initials: z.string().min(1),
  avatarColor: z.string().min(1),
  bio: z.string().optional(),
  location: z.string().optional(),
  experience: z.string().optional(),
  email: optionalEmail.optional(),
  linkedin: optionalUrl.optional(),
  twitter: optionalUrl.optional(),
  github: optionalUrl.optional(),
  team: z.string().min(1),
  order: z.coerce.number().optional().default(0),
  image: z.string().optional(),
  expertise: z.array(z.string()).optional().default([]),
  skills: z.array(z.string()).optional().default([]),
  experienceTimeline: z.array(teamExperienceSchema).optional().default([]),
  education: z.array(teamEducationSchema).optional().default([]),
  projects: z.array(teamProjectSchema).optional().default([]),
  certifications: z.array(z.string()).optional().default([]),
});

export const teamMemberUpdateSchema = teamMemberSchema.partial().extend({
  slug: z.string().min(1).optional(),
  name: z.string().min(1).optional(),
  role: z.string().min(1).optional(),
  initials: z.string().min(1).optional(),
  avatarColor: z.string().min(1).optional(),
  team: z.string().min(1).optional(),
});
