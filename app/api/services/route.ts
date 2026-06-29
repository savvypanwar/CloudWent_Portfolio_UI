import { genericList, genericCreate, handleApiError } from "@/lib/api-utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const active = searchParams.get("active");

    const where: Record<string, unknown> = {};
    if (active === "true") where.active = true;

    return genericList("service", { where, orderBy: { order: "asc" } });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return genericCreate("service", body);
  } catch (error) {
    return handleApiError(error);
  }
}
