import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { id: string } }) {

    try {
        connectToDb()
        const { id } = context.params
        if (isValidObjectId(id)) {
            const user = await userModel.findOne({ _id: id }, "-__v").populate("img").populate("comments").lean()
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
            return NextResponse.json({ resulte: false, message: "id not found", })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error })
    }
}