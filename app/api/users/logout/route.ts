import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    try {
        const Cookies = cookies()
        const setCookie = Cookies.delete("doctor-booking-app")

        return NextResponse.json({ resulte: true, message: "logout successfully" }, {
            status: 200,
           
        })
    } catch (error) {
        return NextResponse.json({ resulte: false, message: "logout NOT successfull" }, {
            status: 500,
            
        })
    }

}