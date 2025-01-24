import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest,res:NextResponse){
    try {

        await dbConnect();

        // if(!res.socket.server.io){
        //     console.log("initialing the socket server....");
        //     const io = new Server(res.socket.server,{
        //         path:"/api/editor",
        //         origin:"*"
        //     })


        //     await dbConnect();



        // io.on("connection",(socket)=>{
        //     console.log("user is connected");

        // })


        // }
        
    } catch (error) {
        return NextResponse.json({
            message:error.message || "internale error",
            success:false
        },{
            status:500
        })
    }
}