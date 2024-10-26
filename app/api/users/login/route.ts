import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { checkPassword } from "@/utils/hashPassword";
import { tokenGenarator } from "@/utils/tokenGenerator";
import loginValidator from "@/validations/serverValidatins/login";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(req: Request) {
    try {
        connectToDb()
        const data = await req.json()
        const validation = loginValidator(data)
        if (validation === true) {
            const user = await userModel.findOne({ email: data.email })
            if (!user) {
                return NextResponse.json({ resulte: false, message: "user not found" }, {
                    status: 403,
                })
            }

            const isCkeckUser = await checkPassword(data.password, user.password)
            if (!isCkeckUser) {
                return NextResponse.json({ resulte: false, message: "informatin not valid" }, {
                    status: 401,
                })
            }

            const token = tokenGenarator({ email: user.email })
            const Cookies = cookies()
            Cookies.set("doctor-booking-app", token, {
             httpOnly: true,
             maxAge: 60 * 60 * 24,
           });

            return NextResponse.json({ resulte: true, message: "login successfully" }, {
                status: 200,

            })



        } else {
            return NextResponse.json({ resulte: false, error: validation, message: "your information is not valid" }, {
                status: 500,
            })
        }
    } catch (error) {
        return NextResponse.json({ resulte: false, error, massage: "catch error" }, {
            status: 500,
        })
    }

}