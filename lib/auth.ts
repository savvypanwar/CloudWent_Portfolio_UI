import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma/prisma";
import { verifyToken } from "@/lib/utils/jwt";

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: "admin" | "hr" | "employee";
};

const normalizeRole = (role?: string | null): SessionUser["role"] => {
  if (role === "ADMIN" || role === "admin") return "admin";
  if (role === "HR" || role === "hr") return "hr";
  return "employee";
};

const displayName = (user: {
  name: string | null;
  firstName?: string | null;
  lastName?: string | null;
}) => user.name ?? ([user.firstName, user.lastName].filter(Boolean).join(" ") || "CloudWent User");

export async function getCurrentUser(): Promise<SessionUser | null> {
  const token = (await cookies()).get("authToken")?.value;

  if (!token) {
    return null;
  }

  try {
    const { userId } = verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        firstName: true,
        lastName: true,
        role: true,
      },
    });

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: displayName(user),
      role: normalizeRole(user.role),
    };
  } catch {
    return null;
  }
}

export const auth = async () => {
  const user = await getCurrentUser();
  return { user };
};
