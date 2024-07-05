import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("token")?.value;
  const publicRoutes = ["/signin", "/signup"];
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  if (isPublicRoute && authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (!isPublicRoute && !authToken) {
    const redirectUrl = new URL("/signin", request.url);

    return NextResponse.redirect(redirectUrl);
  }
}
export const config = {
  matcher: ["/", "/signin", "/signup", "/loan", "/market"],
};
