import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const { id } = context.params

        if (!isValidObjectId(id)) return NextResponse.json({ resulte: false, message: "id not found" })


        const user = await userModel.findOneAndDelete({ _id: id })
        if (user) {
            return NextResponse.json({ resulte: true, message: "user deleted successfully"})
        } else {
            return NextResponse.json({ resulte: false, message: "server error user not found", })
        }

    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}