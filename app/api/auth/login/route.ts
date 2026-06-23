import { prisma } from "@/lib/prisma/prisma";
import bcrypt from "bcryptjs";
import { loginSchema } from "../schemas/login.schema";
import { generateToken } from "@/lib/utils/jwt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = loginSchema.safeParse(body);

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

    const { email, password } = result.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 }
      );
    }

    // 🔒 Check password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password || ""
    );

    if (!isPasswordValid) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 }
      );
    }

    // ⚠️ Optional: check email verification
    if (!user.emailVerified) {
      return Response.json(
        {
          success: false,
          message: "Please verify your email first",
        },
        { status: 400 }
      );
    }

    // 🔑 Generate token
    const token = generateToken(user.id);

    return Response.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN_ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}