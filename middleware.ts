// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/CreateUser"] };

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // console.log("pathname", req.nextUrl.pathname);
    // console.log("role", req.nextauth?.token?.role);
    // console.log("request", req.nextauth);

    if (
      req.nextUrl.pathname.startsWith("/CreateUser") &&
      req.nextauth?.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/CreateUser"] };
