"use server";

import { prisma } from "@/lib/prisma/prisma";

export async function getApplications() {
  try {
    const applications = await prisma.application.findMany({
  orderBy: {
    createdAt: "desc",
  },
});
    return { success: true, applications };
  } catch (error) {
    console.error("Error fetching applications:", error);
    return { success: false, applications: [] };
  }
}