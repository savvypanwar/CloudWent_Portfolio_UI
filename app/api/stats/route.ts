import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");

    const where: any = {};
    if (section) where.section = section;

    const stats = await prisma.siteStat.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(stats);
  } catch (error) {
    return handleApiError(error);
  }
}
