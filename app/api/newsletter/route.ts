import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const where: any = {};
    if (status) where.status = status;

    const items = await (prisma as any).newsletterSubscriber.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const item = await (prisma as any).newsletterSubscriber.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
