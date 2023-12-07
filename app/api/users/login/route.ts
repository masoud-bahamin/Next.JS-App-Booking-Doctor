import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import loginValidator from "@/validations/serverValidatins/login";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        connectToDb()
        const data = await req.json()
        const validation = loginValidator(data)
        if (validation === true) {
            const user = await userModel.findOne({ email: data.email })
            if (user) {
                if (user.password === data.password) {
                    return NextResponse.json({ resulte: true, user })
                } else {
                    return NextResponse.json({ resulte: false, error: "informatin not valid" })
                }
            } else {
                return NextResponse.json({ resulte: false, error: "user not found" })
            }
        } else {
            return NextResponse.json({ resulte: false, error: validation })
        }
    } catch (error) {
        return NextResponse.json({ resulte: false, error, massage: "catch error" })
    }

}