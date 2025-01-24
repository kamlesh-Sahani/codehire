import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import userModel from "@/models/user.model";
import dbConnect from "@/lib/dbConnect";
export async function GET(req:NextRequest,res:NextResponse<any>){
    await dbConnect();
    console.log("hello")
    const cookieStore  = await cookies();
    const authToken = cookieStore.get("auth-token")?.value;
    try {
        
        if(!authToken){
            cookieStore.delete("auth-token");
            return NextResponse.json({
                message:"auth token is not found",
                success:false
            },{status:401})
        }        

        const userid =  jwt.verify(authToken,process.env.JWT_SECRET);
        if(!userid){
            cookieStore.delete("auth-token");
            return NextResponse.json({
                message:"user  is not found",
                success:false
            },{status:401})
        } 

        const user = await userModel.findById(userid);
        if(!user){
            cookieStore.delete("auth-token");
            return NextResponse.json({
                message:"user  is not found",
                success:false
            },{status:404})
        } 

        return NextResponse.json({
            message:"user   found",
            success:true,
            user
        },{status:200})
    } catch (error) {
        cookieStore.delete("auth-token");
        return NextResponse.json({
            message:error.message || "internal error",
            success:false
        },{status:500})
    }
}