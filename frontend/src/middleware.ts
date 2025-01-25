import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';
import {cookies} from "next/headers"
export async function middleware(request: NextRequest) {
    const cookiesStore = await cookies();
    const authToken = cookiesStore.get("auth-token")?.value;
    console.log(authToken,"token")
    const protectedRoutes = ["/interview","/profile"];
    const withoutLoginRoute = ["/register","/login"];

    if( protectedRoutes.some((route)=>request.nextUrl.pathname.startsWith(route)) ){
        if(!authToken){
        return NextResponse.redirect(new URL("/login",request.url));
        }
    }

    if(withoutLoginRoute.some((route)=> request.nextUrl.pathname.startsWith(route))){
        if(authToken){
            return NextResponse.redirect(new URL("/",request.url))
        }
    }


    return NextResponse.next();
}
 
export const config = {
  matcher: ['/','/interview/:path*','/login','/register',"/api/:path*","/profile"]
}