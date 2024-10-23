import userModel from "@/models/user";
import connectToDb from "@/utils/db";
import { exportToken } from "@/utils/tokenGenerator";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("token");
    
    if (!cookie?.value) {
      return NextResponse.json(
        { resulte: false, message: "token not found" },
        {
          status: 401,
        }
      );
    }
    
    const { email } = exportToken(cookie?.value) as { email: string };
    connectToDb();

    if (email) {
      const user = await userModel
        .findOne({ email }, "-__v")
        .populate("img")
        .populate("comments")
        .populate("appointments")
        .lean();
      if (user) {
        return NextResponse.json(
          { resulte: true, message: "successfull", user },
          {
            status: 200, 
          }
        );
      } else {
        return NextResponse.json(
          { resulte: false, message: "user not found" },
          {
            status: 400,
          }
        );
      }
    } else {
      return NextResponse.json(
        { resulte: false, message: "email not found" },
        {
          status: 420,   
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
