"use server";

import { db } from "@/lib/db";

export async function getApplications() {
  try {
    const applications = await db.jobApplication.findMany({
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