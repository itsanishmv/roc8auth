import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless"
import { SUCCESS , ERROR } from "../_constants/constants";
export async function POST(request: Request, response: Response, context: any) {
    try {
        const formData = await request.json()
        const sql = neon(process.env.DATABASE_URL)
    
        const data = await sql`INSERT INTO users(id , name , email , password)
                                VALUES (${formData.id} , ${formData.name}, ${formData.email},${formData.password})
        `
        return NextResponse.json(SUCCESS)
    } catch(err) {
        return NextResponse.json(ERROR)
    }
 
}