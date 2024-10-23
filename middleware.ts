
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.headers.get("cookie")
    
    if (!token && request.nextUrl.pathname.startsWith("/account")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
 
  return NextResponse.next()

}

export const config = {
    matcher: ["/account", "/login", "/signup"]
}