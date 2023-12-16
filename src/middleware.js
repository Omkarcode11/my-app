import { NextResponse } from "next/server"

function middleware(req) {
     
    if(req.url!="/login")
    return NextResponse.redirect(new URL('/login',req.url))
}

export default middleware