"use server";

import { prisma } from "@/lib/prisma/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.create({
      data: parsed.data,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      errors: { _form: ["Something went wrong. Please try again."] },
    };
  }
}
