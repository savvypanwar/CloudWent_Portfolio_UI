import { NextResponse } from "next/server";

import {
  createTeamMember,
  getTeamMembers,
  revalidateTeamPages,
  teamMemberSchema,
} from "@/lib/team";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const team = searchParams.get("team") ?? undefined;
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Number(limitParam) : undefined;

    const members = await getTeamMembers({
      team,
      limit: Number.isFinite(limit) ? limit : undefined,
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error("List team members error:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = teamMemberSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const member = await createTeamMember(parsed.data);
    revalidateTeamPages();
    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    console.error("Create team member error:", error);
    return NextResponse.json(
      { error: "Failed to create team member" },
      { status: 500 }
    );
  }
}
