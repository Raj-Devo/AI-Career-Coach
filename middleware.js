import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here if needed
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/resume/:path*",
    "/interview/:path*",
    "/ai-cover-letter/:path*",
    // Removed "/onboarding/:path*" since users need to access it after first sign-in
  ],
};
