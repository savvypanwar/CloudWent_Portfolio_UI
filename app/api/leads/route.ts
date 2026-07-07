import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const where: any = {};
    if (status) where.status = status;

    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, budget, subject, message } = body;

    const details = [
      message,
      company ? `Company: ${company}` : "",
      phone ? `Phone: ${phone}` : "",
      budget ? `Budget: ${budget}` : "",
    ].filter(Boolean).join("\n");

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject: service || subject || "General Inquiry",
        message: details || "No additional details provided.",
      },
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
