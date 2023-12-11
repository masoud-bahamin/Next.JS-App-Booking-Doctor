import imageModel from "@/models/image";
import connectToDb from "@/utils/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path"

export async function POST(req: any) {

    connectToDb()

    const formData = await req.formData()

    const file = formData.get("image")
    const userId = formData.get("userId")

    if (!file) return NextResponse.json({ resulte: false, message: "image not found , error" })

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");

    try {
        await writeFile(
            path.join(process.cwd(), "uploads/" + filename),
            buffer
        )
        const image = await imageModel.create({ filename, userId })
        if (image) {
            return NextResponse.json({ resulte: true, message: "image upload successfully" }, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        } else {
            return NextResponse.json({ resulte: false, message: "image not made" }, {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        }
    } catch (error) {
        return NextResponse.json({ resulte: false, error, message: "catch error" }, {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    }


}