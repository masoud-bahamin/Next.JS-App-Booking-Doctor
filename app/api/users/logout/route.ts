import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie"
import  headers  from "../route";

export async function POST(req: NextRequest) {
    try {
        const setCookie = cookie.serialize("token" , "" , {
            httpOnly : true ,
            path : "/",
            maxAge : 1,
            secure : false ,
            sameSite : "strict"
        })

        return NextResponse.json({ resulte: true, message: "logout successfully" }, {
            status: 200,
            headers: {
                "Set-Cookie" : setCookie ,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    } catch (error) {
        return NextResponse.json({ resulte: false, message: "logout NOT successfull" }, {
            status: 500,
            headers
        })
    }

}