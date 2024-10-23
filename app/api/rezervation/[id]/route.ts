import { bookingModel } from "@/models/booking";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";
import { Context } from "vm";

export async function GET(req: Request, context: Context) {
    try {
        const { id } = context.params
        connectToDb()
        const bookings = await bookingModel.find({ doctorId: id });
        return NextResponse.json({ result: true, bookings }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ result: false }, { status: 500 })
    }
}