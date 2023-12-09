import mongoose, { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("bookingToken")

    if (token) {
        if (token.value ) {
            return NextResponse.next()
        }
    }

    return NextResponse.redirect(new URL("login", request.url))

}

export const config = {
    matcher: ["/account"]
}