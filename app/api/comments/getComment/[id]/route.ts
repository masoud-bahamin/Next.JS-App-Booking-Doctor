import commentModel from "@/models/comment";
import connectToDb from "@/utils/db";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const { id } = context.params
        if (isValidObjectId(id)) {
            const comment = await commentModel.findOne({ _id: id })
            if (comment) {
                return NextResponse.json({ resulte: true, message: "comment created successfully", comment })
            } else {
                return NextResponse.json({ resulte: false, message: "comment not found", })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "id not found", })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}