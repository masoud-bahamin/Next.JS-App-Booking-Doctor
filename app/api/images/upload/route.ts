import imageModel from "@/models/image";
import connectToDb from "@/utils/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path"
import fs from "fs"


export async function POST(req: any) {

    connectToDb()

    const formData = await req.formData()

    const file = formData.get("image")
    const userId = formData.get("userId")

    if (!file) return NextResponse.json({ resulte: false, message: "image not found , error" })

    // const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");

    try {
        const stream = fs.createWriteStream(`public/uploads/${filename}`)
        const bufferdImage = await file.arrayBuffer()
        stream.write(Buffer.from(bufferdImage) , (error) => {
            if (error)
            throw new Error (' saving image failed mas :((')
        })

        // await writeFile(
        //     path.join(process.cwd(), "public/uploads/" + filename),
        //     buffer
        // )
        const image = await imageModel.create({ filename, userId })
        if (image) {
            return NextResponse.json({ resulte: true, message: "image upload successfully" }, {
                status: 200,
                
            })
        } else {
            return NextResponse.json({ resulte: false, message: "image not made" }, {
                status: 400,
                
            })
        }
    } catch (error) {
        return NextResponse.json({ resulte: false, error, message: "catch error" }, {
            status: 500,
           
        })
    }


}