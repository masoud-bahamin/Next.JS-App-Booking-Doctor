import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { hashPassword } from "@/utils/hashPassword";
import { tokenGenarator } from "@/utils/tokenGenerator";
import userValidator from "@/validations/serverValidatins/userValidation";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'


export async function POST(req: Request) {
  try {
    connectToDb();
    const data = await req.json();
    const validation = userValidator(data);
    if (validation !== true) {
      return NextResponse.json(
        {
          resulte: false,
          message: "your informations not valid",
          error: validation,
        },
        {
          status: 400
        }
      );
    }
    const isExistUser = await userModel.findOne({
      $or: [{ email: data.email }, { username: data.username }],
    });
    if (isExistUser) {
      return NextResponse.json(
        { resulte: false, message: "username or email exist already" },
        {
          status: 422
        }
      );
    }
    const hashedPass = await hashPassword(data.password);
    const user = await userModel.create({ ...data, password: hashedPass });
    if (!user) {
      return NextResponse.json(
        { resulte: false, message: "error , user not found" },
        {
          status: 420
        }
      );
    }

    const token = tokenGenarator({ email: user.email });
    if (!token) {
      return NextResponse.json(
        { resulte: false, message: "error , token not found" },
        {
          status: 420
        }
      );
    }
    console.log(token);
    const Cookies = cookies()
     Cookies.set("doctor-booking-app", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json(
      { resulte: true, message: "user created successfully" },
      {
        status: 200
      }
    );


  } catch (error) {
    return NextResponse.json(
      { resulte: false, message: "catch error", error },
      {
        status: 500
      }
    );
  }
}
