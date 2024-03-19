import { NextRequest, NextResponse } from "next/server";

export async function verifyOtp(request : NextRequest , response : NextResponse) {
    const { otp } = await request.json()
    
}