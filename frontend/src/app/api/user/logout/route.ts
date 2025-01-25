import dbConnect from "@/lib/dbConnect";
import { cookies } from "next/headers";
import {  NextResponse } from "next/server";

interface ResponseData{
    message:string;
    success:boolean;
}
export async function GET(){
    try {
        await dbConnect();
        const cookieStore  = await cookies();
        cookieStore.delete("auth-token");
        return NextResponse.json({
            message:"logout successuly",
            success:true
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            message:error.message || "internal error",
            success:false
        },{status:500})
    }
}