import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";



export async function GET() {

    try {
        connectToDb()
        const users = await userModel.find({})
        if (users) {
            return NextResponse.json({ resulte: true, users })
        } else {
            return NextResponse.json({ resulte: false, message: "users not found", })
        }

    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}

