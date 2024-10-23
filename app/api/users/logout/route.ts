import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie"


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
           
        })
    } catch (error) {
        return NextResponse.json({ resulte: false, message: "logout NOT successfull" }, {
            status: 500,
            
        })
    }

}