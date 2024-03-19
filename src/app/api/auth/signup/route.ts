import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless"
import { SUCCESS, ERROR } from "../_constants/constants";
import { sendmail } from "../_helpers/sendEmail";
import { generateOtp } from "../_helpers/generateOtp";
export async function POST(request: Request, response: Response, context: any) {
    try {
        const formData = await request.json()
        const sql = neon(process.env.DATABASE_URL)
        await  sendmail(formData.email , generateOtp())
        const data = await sql`INSERT INTO users(id , name , email , password)
                                VALUES (${formData.id} , ${formData.name}, ${formData.email},${formData.password})
        `
        // send otp to the given mail and verify it 
       
        return NextResponse.json(SUCCESS)
    } catch(err) {
        return NextResponse.json(ERROR)
    }
 
}