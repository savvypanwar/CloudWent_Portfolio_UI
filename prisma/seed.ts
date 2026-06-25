import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

import { teamMembers } from "../lib/team-data";

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: "Admin User", email: "admin@cloudwent.com", role: UserRole.admin },
    { name: "HR User", email: "hr@cloudwent.com", role: UserRole.hr },
    { name: "Employee User", email: "employee@cloudwent.com", role: UserRole.employee },
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });
  }

  for (const [index, member] of teamMembers.entries()) {
    await prisma.teamMember.upsert({
      where: { slug: member.slug },
      update: {
        name: member.name,
        role: member.role,
        initials: member.initials,
        avatarColor: member.color,
        bio: member.bio,
        location: member.location,
        experience: member.experience,
        email: member.email,
        linkedin: member.linkedin,
        team: member.team,
        order: index,
        expertise: member.expertise,
        skills: member.skills,
        experienceTimeline: member.experience_timeline,
        education: member.education,
        projects: member.projects,
        certifications: member.certifications,
      },
      create: {
        slug: member.slug,
        name: member.name,
        role: member.role,
        initials: member.initials,
        avatarColor: member.color,
        bio: member.bio,
        location: member.location,
        experience: member.experience,
        email: member.email,
        linkedin: member.linkedin,
        team: member.team,
        order: index,
        expertise: member.expertise,
        skills: member.skills,
        experienceTimeline: member.experience_timeline,
        education: member.education,
        projects: member.projects,
        certifications: member.certifications,
      },
    });
  }

  console.log("✅ Seed users and team members created!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
