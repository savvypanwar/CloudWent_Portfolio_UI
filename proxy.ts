import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ Proxy function (Replaces Next.js Middleware)
export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  });
  const isLoggedIn = !!token;
  const { pathname } = request.nextUrl;

  const isDashboardRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin-dashboard") ||
    pathname.startsWith("/hr-dashboard") ||
    pathname.startsWith("/employee-dashboard") ||
    pathname.startsWith("/applications") ||
    pathname.startsWith("/users");

  // 1. Agar user dashboard pe ja raha hai lekin login nahi hai -> Login page pe bhejo
  if (isDashboardRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. Agar user login page pe hai lekin already logged in hai -> Dashboard pe bhejo
  if (pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 3. Baaki sab kuch normal chalo
  return NextResponse.next();
}

// ✅ Config: Ye routes hain jinpe proxy run karna hai
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
    "/hr-dashboard/:path*",
    "/employee-dashboard/:path*",
    "/applications/:path*",
    "/users/:path*",
    "/login",
  ],
};
