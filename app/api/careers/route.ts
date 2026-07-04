import { NextResponse } from "next/server";
import { z } from "zod";

import { handleApiError } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma/prisma";

const jobOpeningSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1, "Title is required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  type: z.string().min(1, "Type is required"),
  salary: z.string().optional().nullable(),
  description: z.string().min(1, "Description is required"),
  requirements: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const jobs = await prisma.jobOpening.findMany({
      where: status ? { status: status as "DRAFT" | "PUBLISHED" | "ARCHIVED" } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const parsed = jobOpeningSchema.safeParse(await req.json());

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid job opening data" },
        { status: 400 }
      );
    }

    const job = await prisma.jobOpening.create({ data: parsed.data });

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
