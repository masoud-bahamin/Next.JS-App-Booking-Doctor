import mongoose, { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("bookingToken")

    if (token?.value && request.nextUrl.pathname.startsWith("/account")) {
        return NextResponse.next()
    }
    if (!token?.value && request.nextUrl.pathname.startsWith("/account")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    if (token?.value && request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/account", request.url))
    }
    if (!token?.value && request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.next()
    }
    if (token?.value && request.nextUrl.pathname.startsWith("/signup")) {
        return NextResponse.redirect(new URL("/account", request.url))
    }
    if (!token?.value && request.nextUrl.pathname.startsWith("/signup")) {
        return NextResponse.next()
    }


}

export const config = {
    matcher: ["/account", "/login", "/signup"]
}