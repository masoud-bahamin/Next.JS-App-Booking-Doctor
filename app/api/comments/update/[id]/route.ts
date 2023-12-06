import commentModel from "@/models/comment";
import commentValidator from "@/validations/serverValidatins/commentValidation";
import connectToDb from "@/utils/db";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const data = await req.json()
        const { id } = context.params
        const validation = commentValidator(data)

        if (!isValidObjectId(id)) return NextResponse.json({ resulte: false, message: "id not found" })

        if (validation === true) {
            const comment = await commentModel.findOneAndUpdate({ _id: id }, data)
            if (comment) {
                return NextResponse.json({ resulte: true, message: "comment update successfully", comment })
            } else {
                return NextResponse.json({ resulte: false, message: "server error comment not found", })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "comment not found", error: validation })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}