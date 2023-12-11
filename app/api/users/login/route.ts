import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import loginValidator from "@/validations/serverValidatins/login";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        connectToDb()
        const data = await req.json()
        const validation = loginValidator(data)
        if (validation === true) {
            const user = await userModel.findOne({ email: data.email })
            if (user) {
                if (user.password === data.password) {
                    return NextResponse.json({ resulte: true, user }, {
                        status: 200,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                        }
                    })
                } else {
                    return NextResponse.json({ resulte: false, error: "informatin not valid" }, {
                        status: 200,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                        }
                    })
                }
            } else {
                return NextResponse.json({ resulte: false, error: "user not found" }, {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            }
        } else {
            return NextResponse.json({ resulte: false, error: validation }, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        }
    } catch (error) {
        return NextResponse.json({ resulte: false, error, massage: "catch error" }, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    }

}