import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const active = searchParams.get("active");

    const where: any = {};
    if (category) where.category = category;
    if (active === "true") where.active = true;

    const items = await (prisma as any).faq.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const item = await (prisma as any).faq.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
