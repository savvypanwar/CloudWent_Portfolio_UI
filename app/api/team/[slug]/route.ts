import { NextResponse } from "next/server";

import {
  deleteTeamMember,
  getTeamMemberByIdentifier,
  revalidateTeamPages,
  teamMemberSchema,
  updateTeamMember,
} from "@/lib/team";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: identifier } = await params;
    const member = await getTeamMemberByIdentifier(identifier);

    if (!member) {
      return NextResponse.json({ error: "Team member not found" }, { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error("Get team member error:", error);
    return NextResponse.json(
      { error: "Failed to fetch team member" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: identifier } = await params;
    const body = await req.json();
    const parsed = teamMemberSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const member = await updateTeamMember(identifier, parsed.data);
    revalidateTeamPages();
    return NextResponse.json(member);
  } catch (error) {
    console.error("Update team member error:", error);
    return NextResponse.json(
      { error: "Failed to update team member" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: identifier } = await params;
    await deleteTeamMember(identifier);
    revalidateTeamPages();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete team member error:", error);
    return NextResponse.json(
      { error: "Failed to delete team member" },
      { status: 500 }
    );
  }
}
