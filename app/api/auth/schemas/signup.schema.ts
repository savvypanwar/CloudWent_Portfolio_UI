import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string(
      "First name is required",
    )
    .min(2, "First name must be at least 2 characters")
    .max(50),

  lastName: z
    .string(
      "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50),

  email: z
    .string( "Email is required",
    )
    .email("Invalid email address")
    .toLowerCase()
    .trim(),

  password: z
    .string("Password is required",
    )
    .min(8, "Password must be at least 8 characters")
    .max(100),
});

