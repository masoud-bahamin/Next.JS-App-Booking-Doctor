import imageModel from "@/models/image";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        connectToDb()
        const users = await imageModel.findOne({})
        if (users) {
            return NextResponse.json( users )
        } else {
            return NextResponse.json({ resulte: false, message: "users not found", })
        }

    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}