import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const where: any = {};
    if (status) where.status = status;

    const applications = await prisma.application.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(applications);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, coverLetter, resumeUrl, linkedin, portfolio, jobTitle, status } = body;

    const application = await prisma.application.create({
      data: {
        name,
        email,
        phone,
        coverLetter,
        resumeUrl,
        linkedin,
        portfolio,
        jobTitle,
        status: status || "pending",
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
