import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";


 const headersJson = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}
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

export default headersJson