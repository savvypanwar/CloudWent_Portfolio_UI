import { UserRole } from "@prisma/client";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { generateToken } from "@/lib/utils/jwt";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["admin", "hr", "employee"]),
});

const mapUiRoleToDbRole = (uiRole: string): UserRole => {
  const norm = uiRole.toUpperCase();
  if (norm === "ADMIN") return UserRole.ADMIN;
  if (norm === "HR") return UserRole.HR;
  return UserRole.EMPLOYEE;
};

const mapDbRoleToUiRole = (dbRole: UserRole): string => {
  const norm = dbRole.toUpperCase();
  if (norm === "ADMIN") return "admin";
  if (norm === "HR") return "hr";
  return "employee";
};

const isDatabaseUnavailableError = (error: unknown): boolean => {
  const message = error instanceof Error ? error.message : String(error);

  return (
    message.includes("Server selection timeout") ||
    message.includes("No connection could be made") ||
    message.includes("No available servers") ||
    message.includes("ECONNREFUSED") ||
    message.includes("connect ECONNREFUSED")
  );
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = loginSchema.safeParse(body);

    console.log("LOGIN_REQUEST:", body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: "Validation error",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, password, role } = result.data;

    // ==========================================
    // 🔐 SPECIAL ADMIN LOGIN (Hardcoded)
    // ==========================================
    if (email === "info.cloudwent@gmail.com" && password === "Admin@123") {
      try {
        // Try database-backed flow first when available.
        let user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          const hashedPassword = await bcrypt.hash("Admin@123", 10);
          user = await prisma.user.create({
            data: {
              email,
              password: hashedPassword,
              name: "Admin",
              role: UserRole.ADMIN,
            },
          });
        } else if (user.role.toUpperCase() !== "ADMIN") {
          console.warn(`User ${email} exists but is not an admin. Updating role to ADMIN.`);
          user = await prisma.user.update({
            where: { id: user.id },
            data: { role: UserRole.ADMIN },
          });
        }

        const token = generateToken(user.id);

        const cookieStore = await cookies();
        cookieStore.set("authToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60,
          path: "/",
        });

        return Response.json({
          success: true,
          message: "Login successful",
          token,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: "admin",
          },
        });
      } catch (error) {
        if (!isDatabaseUnavailableError(error)) {
          throw error;
        }

        const token = generateToken("demo-admin");

        const cookieStore = await cookies();
        cookieStore.set("authToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60,
          path: "/",
        });

        return Response.json({
          success: true,
          message: "Login successful (demo fallback)",
          token,
          user: {
            id: "demo-admin",
            email,
            name: "Admin",
            role: "admin",
          },
        });
      }
    }

    // ==========================================
    // 🧑‍💻 NORMAL LOGIN FLOW (Other users)
    // ==========================================
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return Response.json(
          { success: false, message: "Invalid credentials" },
          { status: 401 }
        );
      }

      const dbRole = mapUiRoleToDbRole(role);
      if (user.role.toUpperCase() !== dbRole.toUpperCase()) {
        return Response.json(
          {
            success: false,
            message: "You do not have access to this role. Please select the correct role.",
          },
          { status: 403 }
        );
      }

      const isPasswordValid = await bcrypt.compare(password, user.password || "");

      if (!isPasswordValid) {
        return Response.json(
          { success: false, message: "Invalid credentials" },
          { status: 401 }
        );
      }

      const token = generateToken(user.id);

      const cookieStore = await cookies();
      cookieStore.set("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
      });

      return Response.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: mapDbRoleToUiRole(user.role),
        },
      });
    } catch (error) {
      if (isDatabaseUnavailableError(error)) {
        return Response.json(
          {
            success: false,
            message: "Database is currently unavailable. Please start MongoDB or contact the administrator.",
          },
          { status: 503 }
        );
      }

      throw error;
    }
  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}