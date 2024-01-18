import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { exportToken } from "@/utils/tokenGenerator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    try {
        connectToDb()
        const cookie = req.cookies.get("token")
        
        if (!cookie?.value) {
            return NextResponse.json({ resulte: false, message: "token not found", }, {
                status: 401,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            }) 
        }
        
        const {email} = exportToken(cookie?.value) as {email : string}

        if (email) {
            const user = await userModel.findOne({ email }, "-__v").populate("img").populate("comments").lean()
            if (user) {
                return NextResponse.json({ resulte: true, message: "successfull", user }, {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            } else {
                return NextResponse.json({ resulte: false, message: "user not found", }, {
                    status: 400,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }
                })
            }
        } else {
            return NextResponse.json({ resulte: false, message: "email not found", }, {
                status: 420,
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