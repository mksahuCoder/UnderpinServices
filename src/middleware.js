import { NextResponse } from "next/server";

export function middleware(request) {
  const Id = request.cookies.get("UserId");
  const p = request.cookies.get("Pass");

  const mobileEmail = Id?.value;
  const password = p?.value;

  // Check if the user is authenticated
  const isAuthenticated =
    (mobileEmail === "6376317484" && password === "mithilesh") ||
    (mobileEmail === "mithilesh@gmail.com" && password === "mithilesh");

  // If not authenticated and trying to access a page other than the login page, redirect to login
  if (!isAuthenticated && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is authenticated and trying to access the login page, redirect to home
  if (isAuthenticated && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"], 
};
