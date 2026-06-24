import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;
  const isLoggedIn = !!token;
  const { pathname } = request.nextUrl;

  const isDashboardRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin-dashboard") ||
    pathname.startsWith("/hr-dashboard") ||
    pathname.startsWith("/employee-dashboard") ||
    pathname.startsWith("/applications") ||
    pathname.startsWith("/users");

  if (isDashboardRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

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
