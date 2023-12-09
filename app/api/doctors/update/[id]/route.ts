import doctorModel from "@/models/doctor";
import connectToDb from "@/utils/db";
import doctorValidator from "@/validations/serverValidatins/doctorValidator";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const data = await req.json()
        const { id } = context.params
        const validation = doctorValidator(data)

        if (!isValidObjectId(id)) return NextResponse.json({ resulte: false, message: "id not found" })

        if (validation === true) {
            const user = await doctorModel.findOneAndUpdate({ _id: id }, data)
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


// import { NextResponse } from "next/server";
// import path from "path";
// import { writeFile } from "fs/promises";
// import imageModel from "@/models/image";
// import connectToDb from "@/utils/db";

// export const POST = async (req: any) => {
//     connectToDb()
//     const formData = await req.formData();

//     const file = formData.get("image");
//     const userId = formData.get("userId");

//     if (!file) {
//         return NextResponse.json({ error: "No files received." }, { status: 400 });
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     const filename = Date.now() + file.name.replaceAll(" ", "_");

//     try {
//         await writeFile(
//             path.join(process.cwd(), "public/uploads/" + filename),
//             buffer
//         );

//         const image = await imageModel.create({
//             filename,
//             path: buffer,
//             userId
//         })

//         console.log("mas image", image);

//         return NextResponse.json({ Message: "Success", status: 201, resulte: true });
//     } catch (error) {
//         return NextResponse.json({ Message: "catch Failed", status: 500, error, resulte: false });
//     }
// };
