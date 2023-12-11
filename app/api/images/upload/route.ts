import imageModel from "@/models/image";
import connectToDb from "@/utils/db";
import { writeFileSync } from "fs";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path"
const fs = require('fs');


export async function POST(req: any) {

    connectToDb()

    const formData = await req.formData()

    const file = formData.get("image")
    const userId = formData.get("userId")

    if (!file) return NextResponse.json({ resulte: false, message: "image not found , error" })

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");

    const filePath = `/var/task/public/uploads/${filename}`;

    fs.access(filePath, fs.constants.W_OK, (err : any) => {
        if (err) {
          console.error(`خطا: فایل ${filePath} دسترسی نوشتن ندارد.`);
          return;
        }
      
        // 2. بررسی وضعیت مونت سیستم فایل
        // (این قسمت به توجه به سیستم فایل شما نیاز به تنظیمات خاص دارد)
      
        // 3. بررسی صحت مسیر
        fs.access(filePath, fs.constants.F_OK, (err : any) => {
          if (err) {
            console.error(`خطا: مسیر ${filePath} صحیح نیست یا فایل وجود ندارد.`);
            return;
          }
         writeFileSync(
            path.join(process.cwd(), "public/uploads/" + filename),
            buffer
        )
          // اجرای عملیات نوشتن به فایل
          // این قسمت را با کدهای مربوط به عملیات نوشتن خود جایگزین کنید
      
          console.log(`عملیات نوشتن به فایل ${filePath} با موفقیت انجام شد.`);
        });
      });

    try {
      
        const image = await imageModel.create({ filename, userId })
        if (image) {
            return NextResponse.json({ resulte: true, message: "image upload successfully" }, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        } else {
            return NextResponse.json({ resulte: false, message: "image not made" }, {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        }
    } catch (error) {
        return NextResponse.json({ resulte: false, error, message: "catch error" }, {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    }


}