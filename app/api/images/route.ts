import imageModel from '@/models/image';
import userModel from '@/models/user';
import connectToDb from '@/utils/db';
import { exportToken } from '@/utils/tokenGenerator';
import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from "@/utils/helps";

export async function POST(request: NextRequest): Promise<NextResponse> {

    const token = request.cookies.get("token")
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (filename && request.body && token) {

        try {

            connectToDb()

            const {email} = exportToken(token.value) as {email : string}

            const user = await userModel.findOne({email})

            const blob = await put(filename, request.body, {
                access: 'public',
            });

            const image = await imageModel.create({ filename : blob.url , userId : user._id })

            return NextResponse.json({ resulte: true, blob }, {
                status: 201,
                headers
            })

        } catch (error) {
            return NextResponse.json({ resulte: false, error, message: "catch error" }, {
                status: 500,
                headers
            })
        }






    } else {
        return NextResponse.json({ resulte: false, message: "file not found" }, {
            status: 400,
            headers
        })
    }


}

