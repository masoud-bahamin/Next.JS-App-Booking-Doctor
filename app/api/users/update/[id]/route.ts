import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import userValidator from "@/validations/serverValidatins/userValidation";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const data = await req.json()
        const { id } = context.params
        const validation = userValidator(data)

        if (!isValidObjectId(id)) return NextResponse.json({ resulte: false, message: "id not found" })

        if (validation === true) {
            const user = await userModel.findOneAndUpdate({ _id: id }, data)
            if (user) {
                return NextResponse.json({ resulte: true, message: "user update successfully", user })
            } else {
                return NextResponse.json({ resulte: false, message: "server error user not found", })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "user not found", error: validation })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}