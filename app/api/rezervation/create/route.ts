import { bookingModel } from "@/models/booking";
import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        connectToDb()
        const rezerve = await bookingModel.create(body)
        return NextResponse.json({ result: true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ result: false }, { status: 500 })
    }

}