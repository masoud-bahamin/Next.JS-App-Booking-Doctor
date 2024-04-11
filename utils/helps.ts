import { cookies } from "next/headers";
import { exportToken } from "./tokenGenerator";
import userModel from "@/models/user";

export async function isUser() {
  const myCookies = cookies();
  const token = myCookies.get("token")?.value;
  if (!token) return false;
  const email = exportToken(token);
  if (!email) {
    return false;
  } else {
    return true;
  }
}
export async function isAdmin() {
  const myCookies = cookies();
  const token = myCookies.get("token")?.value;
  if (!token) return false;
  const email = exportToken(token);
  if (!email) {
    return false;
  } else {
    const userInfo = await userModel.find({ email });
    if (userInfo.role !== "ADMIN") return false;
    return true;
  }
}

export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
