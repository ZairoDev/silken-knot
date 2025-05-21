import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const token = req.cookies.get("token")?.value;

  if (token) {
    // const secret = new TextEncoder().encode(process.env.TOKEN_SECRET!);
    // const decodedToken = await jwtVerify(token, secret);
    // const tokenData = decodedToken.payload;

    // If token is valid, redirect away from signup
    if (path === "/signup" || path === "/sign-in") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // No token, allow to proceed
  return NextResponse.next();
}
