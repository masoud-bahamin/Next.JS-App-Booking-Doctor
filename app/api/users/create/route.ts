import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { hashPassword } from "@/utils/hashPassword";
import { tokenGenarator } from "@/utils/tokenGenerator";
import userValidator from "@/validations/serverValidatins/userValidation";
import { NextResponse } from "next/server";

const cookie = require("cookie");

export async function POST(req: Request) {
  try {
    connectToDb();
    const data = await req.json();
    const validation = userValidator(data);
    if (validation === true) {
      const isExistUser = await userModel.findOne({
        $or: [{ email: data.email }, { username: data.username }],
      });
      if (isExistUser) {
        return NextResponse.json(
          { resulte: false, message: "username or email exist already" },
          {
            status: 422,
           
          }
        );
      }
      const hashedPass = await hashPassword(data.password);
      const user = await userModel.create({ ...data, password: hashedPass });
      if (user) {
        const token = tokenGenarator({ email: user.email });

        var setCookie = cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
          path: "/",
        });

        return NextResponse.json(
          { resulte: true, message: "user created successfully" },
          {
            status: 200,
          
          }
        );
      } else {
        return NextResponse.json(
          { resulte: false, message: "error , user not found" },
          {
            status: 420,
           
          }
        );
      }
    } else {
      return NextResponse.json(
        {
          resulte: false,
          message: "your informations not valid",
          error: validation,
        },
        {
          status: 400,
         
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { resulte: false, message: "catch error", error },
      {
        status: 500,
       
      }
    );
  }
}
