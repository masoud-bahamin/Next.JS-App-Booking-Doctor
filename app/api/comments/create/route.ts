import commentModel from "@/models/comment";
import commentValidator from "@/validations/serverValidatins/commentValidation";
import connectToDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        connectToDb()
        const data = await req.json()
        const validation = commentValidator(data)
        if (validation === true) {
            const comment = await commentModel.create(data)
            if (comment) {
                return NextResponse.json({ resulte: true, message: "comment created successfully", comment })
            } else {
                return NextResponse.json({ resulte: false, message: "comment not found", })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "comment not found", error: validation })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}