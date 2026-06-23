import { prisma } from "@/lib/prisma/prisma";
import bcrypt from "bcryptjs";
import { signupSchema } from "../schemas/signup.schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    
    const result = signupSchema.safeParse(body);

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

    const { firstName, lastName, email, password } =
      result.data;

    // ✅ Check existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ⚠️ temporary OTP (replace with real email service later)
    const otp = "00000";

    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    // ✅ Create user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        emailOtp: otp,
        emailOtpExpiry: otpExpiry,
      },
    });

    return Response.json(
      {
        success: true,
        message: "User created successfully. Verify email.",
        userId: user.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP_ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}