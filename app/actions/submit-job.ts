"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const jobSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Invalid URL").optional().or(z.literal("")),
  coverLetter: z.string().optional(),
  jobTitle: z.string().min(1, "Job title is required"),
  resumeUrl: z.string().url("Invalid resume URL"),
});

export async function submitJobApplication(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());

  // Parse optional fields properly
  const parsed = jobSchema.safeParse({
    ...rawData,
    resumeUrl: rawData.resumeUrl || "", // Will be handled by upload API
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await db.jobApplication.create({
      data: {
        ...parsed.data,
        status: "pending",
      },
    });

    return { success: true, message: "Application submitted successfully!" };
  } catch (error) {
    console.error("Job application error:", error);
    return {
      success: false,
      errors: { _form: ["Failed to submit application. Please try again."] },
    };
  }
}