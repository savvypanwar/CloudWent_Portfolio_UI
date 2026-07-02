import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get("role");
    const status = searchParams.get("status");

    const where: any = {};
    if (role) where.role = role;
    if (status) where.status = status;

    const users = await prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        phone: true,
        avatar: true,
        lastLoginAt: true,
        createdAt: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, role } = body;
    if (!id || !role) {
      return NextResponse.json({ error: "id and role required" }, { status: 400 });
    }
    const user = await prisma.user.update({ where: { id }, data: { role } });
    return NextResponse.json(user);
  } catch (error) {
    return handleApiError(error);
  }
}
