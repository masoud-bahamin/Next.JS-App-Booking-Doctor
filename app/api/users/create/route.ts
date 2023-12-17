import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { hashPassword } from "@/utils/hashPassword";
import { tokenGenarator } from "@/utils/tokenGenerator";
import userValidator from "@/validations/serverValidatins/userValidation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        connectToDb()
        const data = await req.json()
        const validation = userValidator(data)
        if (validation === true) {
            const isExistUser = await userModel.findOne({ $or: [{ email: data.email }, { username: data.username }] })
            if (isExistUser) {
                return NextResponse.json({ resulte: false, message: "username or email exist already", }, {
                    status: 422,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            }
            const hashedPass = await hashPassword(data.password)
            const user = await userModel.create({ ...data, password: hashedPass })
            if (user) {
                const token = tokenGenarator({ email: user.email })
                return NextResponse.json({ resulte: true, message: "user created successfully", token }, {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            } else {
                return NextResponse.json({ resulte: false, message: "error , user not found", }, {
                    status: 420,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "your informations not valid", error: validation }, {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error }, {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    }
}