"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  // ✅ HTTP-only cookie delete karo
  (await cookies()).delete("authToken");
  
  // ✅ Redirect to login
  redirect("/login");
}