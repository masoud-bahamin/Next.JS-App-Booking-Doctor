import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import updateUserValidator from "@/validations/serverValidatins/updateUserValidation";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: { params: { id: string } }) {

    try {
        connectToDb()
        const data = await req.json()
        const { id } = context.params
        const validation = updateUserValidator(data)

        if (!isValidObjectId(id)) return NextResponse.json({ resulte: false, message: "id not found" }, {
            status: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })

        if (validation === true) {
            const user = await userModel.findOneAndUpdate({ _id: id }, data)
            if (user) {
                return NextResponse.json({ resulte: true, message: "user update successfully", user }, {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            } else {
                return NextResponse.json({ resulte: false, message: "server error user not found", }, {
                    status: 420,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "user not found", error: validation }, {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        }


    } catch (error) {
        return NextResponse.json({ resulte: false, message: "catch error", error }, {
            status: 530,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    }
}