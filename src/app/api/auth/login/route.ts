import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless"
import { SUCCESS , ERROR } from "../_constants/constants";
export async function POST(request: Request, response: Response, context: any) {
    try {
        const formData = await request.json()
        const sql = neon(process.env.DATABASE_URL)
    
        const data = await sql`SELECT email
        FROM users
        WHERE email = ${formData.email} AND password = ${formData.password}`
        console.log(formData)
        if (data.length > 0) {
            return NextResponse.json({
                status: 200,
                message: "user found ",
                data : data
            })
        }else throw new Error("user not found")                                                                 
      
    } catch(err) {
        return NextResponse.json({
            status : 404,
            message : err.message
        })
    }
 
}