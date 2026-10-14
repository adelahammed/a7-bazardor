import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { pathname } = request.nextUrl;

  if (pathname === "/profile" && !user) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if ((pathname === "/signin" || pathname === "/signup") && user) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/signin", "/signup"],
};
