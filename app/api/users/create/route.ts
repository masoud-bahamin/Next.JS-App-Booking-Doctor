import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import userValidator from "@/validations/serverValidatins/userValidation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        connectToDb()
        const data = await req.json()
        const validation = userValidator(data)
        if (validation === true) {
            const user = await userModel.create(data)
            if (user) {
                return NextResponse.json({ resulte: true, message: "user created successfully", user }, {
                    status: 200,
                    headers: {
                      'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }})
            } else {
                return NextResponse.json({ resulte: false, message: "user not found", })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "user not found", error: validation })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}