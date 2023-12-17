import { NextResponse } from "next/server"

function middleware(req) {
     
    if(req.nextUrl.pathname=="/about")
    return NextResponse.redirect(new URL('/login',req.url))
}

export default middleware