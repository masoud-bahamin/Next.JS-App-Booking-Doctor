import connectToDb from "@/utils/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path"

export async function POST(req: any) {
    try {
        connectToDb()

        const formData = await req.formData()

        const file = formData.get("image")

        if (!file) return NextResponse.json({ resulte: false, message: "image not found , error" })

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = Date.now() + file.name.replaceAll(" ", "_");

        try {
            await writeFile(
                path.join(process.cwd(), "public/images/" + filename),
                buffer
            )
        } catch (error) {

        }

        return NextResponse.json({ resulte: true, file })

    } catch (error) {
        return NextResponse.json({ resulte: false, error, message: "catch error" })
    }

}