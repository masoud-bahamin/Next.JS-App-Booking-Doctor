import doctorModel from "@/models/doctor";
import doctorValidator from "@/validations/serverValidatins/doctorValidator";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        connectToDb()
        const data = await req.json()
        const validation = doctorValidator(data)
        if (validation === true) {
            const user = await doctorModel.create(data)
            if (user) {
                return NextResponse.json({ resulte: true, message: "user created successfully", user })
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