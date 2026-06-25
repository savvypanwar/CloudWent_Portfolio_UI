import type { TeamMember as PrismaTeamMember, Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma/prisma";
import { teamMembers as fallbackMembers, teamSections, stats } from "@/lib/team-data";

import type {
  TeamEducationItem,
  TeamExperienceItem,
  TeamMemberInput,
  TeamMemberProfile,
  TeamProjectItem,
  TeamQueryOptions,
} from "./types";

export { teamSections, stats };

function parseJsonArray<T>(value: unknown, fallback: T[] = []): T[] {
  return Array.isArray(value) ? (value as T[]) : fallback;
}

function mapStaticMember(
  member: (typeof fallbackMembers)[number],
  index: number
): TeamMemberProfile {
  return {
    id: member.slug,
    slug: member.slug,
    name: member.name,
    role: member.role,
    initials: member.initials,
    team: member.team,
    avatarColor: member.color,
    color: member.color,
    bio: member.bio,
    location: member.location,
    experience: member.experience,
    email: member.email,
    linkedin: member.linkedin,
    order: index,
    expertise: member.expertise,
    skills: member.skills,
    experience_timeline: member.experience_timeline,
    education: member.education,
    projects: member.projects,
    certifications: member.certifications,
  };
}

export function mapTeamMember(member: PrismaTeamMember): TeamMemberProfile {
  return {
    id: member.id,
    slug: member.slug,
    name: member.name,
    role: member.role,
    initials: member.initials,
    team: member.team,
    avatarColor: member.avatarColor,
    color: member.avatarColor,
    bio: member.bio ?? undefined,
    location: member.location ?? undefined,
    experience: member.experience ?? undefined,
    email: member.email ?? undefined,
    linkedin: member.linkedin ?? undefined,
    twitter: member.twitter ?? undefined,
    github: member.github ?? undefined,
    order: member.order,
    image: member.image ?? undefined,
    expertise: member.expertise,
    skills: member.skills,
    experience_timeline: parseJsonArray<TeamExperienceItem>(
      member.experienceTimeline
    ),
    education: parseJsonArray<TeamEducationItem>(member.education),
    projects: parseJsonArray<TeamProjectItem>(member.projects),
    certifications: member.certifications,
  };
}

function getFallbackMembers(options?: TeamQueryOptions): TeamMemberProfile[] {
  let members = fallbackMembers.map(mapStaticMember);

  if (options?.team) {
    members = members.filter((member) => member.team === options.team);
  }

  members.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

  if (options?.limit) {
    members = members.slice(0, options.limit);
  }

  return members;
}

export function isObjectId(value: string): boolean {
  return /^[a-f\d]{24}$/i.test(value);
}

export function buildMemberWhere(identifier: string) {
  return isObjectId(identifier) ? { id: identifier } : { slug: identifier };
}

function normalizeInput(input: TeamMemberInput) {
  return {
    slug: input.slug,
    name: input.name,
    role: input.role,
    initials: input.initials,
    avatarColor: input.avatarColor,
    bio: input.bio || null,
    location: input.location || null,
    experience: input.experience || null,
    email: input.email || null,
    linkedin: input.linkedin || null,
    twitter: input.twitter || null,
    github: input.github || null,
    team: input.team,
    order: input.order ?? 0,
    image: input.image || null,
    expertise: input.expertise ?? [],
    skills: input.skills ?? [],
    experienceTimeline: (input.experienceTimeline ?? []) as unknown as Prisma.InputJsonValue,
    education: (input.education ?? []) as unknown as Prisma.InputJsonValue,
    projects: (input.projects ?? []) as unknown as Prisma.InputJsonValue,
    certifications: input.certifications ?? [],
  };
}

export async function getTeamMembers(
  options?: TeamQueryOptions
): Promise<TeamMemberProfile[]> {
  try {
    const members = await prisma.teamMember.findMany({
      where: options?.team ? { team: options.team } : undefined,
      orderBy: [{ order: "asc" }, { name: "asc" }],
      take: options?.limit,
    });

    if (members.length > 0) {
      return members.map(mapTeamMember);
    }
  } catch (error) {
    console.error("Failed to fetch team members from database:", error);
  }

  return getFallbackMembers(options);
}

export async function getManagedTeamMembers(): Promise<TeamMemberProfile[]> {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: [{ order: "asc" }, { name: "asc" }],
    });

    return members.map(mapTeamMember);
  } catch (error) {
    console.error("Failed to fetch managed team members:", error);
    return [];
  }
}

export async function getTeamMemberByIdentifier(
  identifier: string
): Promise<TeamMemberProfile | null> {
  try {
    const member = await prisma.teamMember.findFirst({
      where: buildMemberWhere(identifier),
    });

    if (member) {
      return mapTeamMember(member);
    }
  } catch (error) {
    console.error("Failed to fetch team member from database:", error);
  }

  return (
    getFallbackMembers().find(
      (member) => member.slug === identifier || member.id === identifier
    ) ?? null
  );
}

export async function getTeamSlugs(): Promise<string[]> {
  const members = await getTeamMembers();
  return members.map((member) => member.slug);
}

export async function createTeamMember(input: TeamMemberInput) {
  const member = await prisma.teamMember.create({
    data: normalizeInput(input),
  });

  return mapTeamMember(member);
}

export async function updateTeamMember(
  identifier: string,
  input: Partial<TeamMemberInput>
) {
  const data: Record<string, unknown> = {};

  if (input.slug !== undefined) data.slug = input.slug;
  if (input.name !== undefined) data.name = input.name;
  if (input.role !== undefined) data.role = input.role;
  if (input.initials !== undefined) data.initials = input.initials;
  if (input.avatarColor !== undefined) data.avatarColor = input.avatarColor;
  if (input.bio !== undefined) data.bio = input.bio || null;
  if (input.location !== undefined) data.location = input.location || null;
  if (input.experience !== undefined) data.experience = input.experience || null;
  if (input.email !== undefined) data.email = input.email || null;
  if (input.linkedin !== undefined) data.linkedin = input.linkedin || null;
  if (input.twitter !== undefined) data.twitter = input.twitter || null;
  if (input.github !== undefined) data.github = input.github || null;
  if (input.team !== undefined) data.team = input.team;
  if (input.order !== undefined) data.order = input.order;
  if (input.image !== undefined) data.image = input.image || null;
  if (input.expertise !== undefined) data.expertise = input.expertise;
  if (input.skills !== undefined) data.skills = input.skills;
  if (input.experienceTimeline !== undefined) {
    data.experienceTimeline = input.experienceTimeline as unknown as Prisma.InputJsonValue;
  }
  if (input.education !== undefined) {
    data.education = input.education as unknown as Prisma.InputJsonValue;
  }
  if (input.projects !== undefined) {
    data.projects = input.projects as unknown as Prisma.InputJsonValue;
  }
  if (input.certifications !== undefined) data.certifications = input.certifications;

  const member = await prisma.teamMember.update({
    where: buildMemberWhere(identifier),
    data,
  });

  return mapTeamMember(member);
}

export async function deleteTeamMember(identifier: string) {
  await prisma.teamMember.delete({
    where: buildMemberWhere(identifier),
  });
}
