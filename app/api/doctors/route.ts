import doctorModel from "@/models/doctor";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        connectToDb()
        const users = await doctorModel.find({}).populate("img").lean()
        if (users) {
            return NextResponse.json({ resulte: true , users })
        } else {
            return NextResponse.json({ resulte: false, message: "users not found", })
        }

    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}