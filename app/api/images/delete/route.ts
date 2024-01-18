import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";
import imageModel from "@/models/image";
import connectToDb from "@/utils/db";
import { exportToken } from "@/utils/tokenGenerator";
import userModel from "@/models/user";

export async function DELETE(req: NextRequest) {
    try {
        const cookie = req.cookies.get("token")
        
        if(!cookie) return NextResponse.json({ Result: false , message : "token not found!!"}, { status: 401 })
        connectToDb()

        const {email} = exportToken(cookie?.value) as {email : string}

        const user = await userModel.findOne({email})

        if(user.role !== "ADMIN") return NextResponse.json({ Result: false , message : "you are NOT admin!!"}, { status: 401 })

        const { url } = await req.json()
        await del(url)

        const image = await imageModel.deleteOne({filename : url})

        return NextResponse.json({ Result: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ Result: false }, { status: 500 })
    }

}