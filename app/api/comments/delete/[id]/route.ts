import commentModel from "@/models/comment";
import connectToDb from "@/utils/db";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const { id } = context.params

        if (!isValidObjectId(id)) return NextResponse.json({ resulte: false, message: "id not found" })


        const comment = await commentModel.findOneAndDelete({ _id: id })
        if (comment) {
            return NextResponse.json({ resulte: true, message: "comment deleted successfully"})
        } else {
            return NextResponse.json({ resulte: false, message: "server error comment not found", })
        }

    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}