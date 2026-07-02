"use server";

import { prisma } from "@/lib/prisma/prisma";
import { z } from "zod";

const jobSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Invalid URL").optional().or(z.literal("")),
  coverLetter: z.string().optional(),
  jobTitle: z.string().min(1, "Job title is required"),
  resumeUrl: z.string().min(1, "Resume URL is required"),
});

export async function submitJobApplication(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());

  const parsed = jobSchema.safeParse({
    ...rawData,
    resumeUrl: rawData.resumeUrl || "",
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.application.create({
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
