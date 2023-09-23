import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicPaths = path === "/" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";

  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}


export const config = {
  matcher: ["/", "/signup", "/dashboard"],
};
