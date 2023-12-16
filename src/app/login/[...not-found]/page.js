"use client";
import Link from "next/link";
import React from "react";

function LoginNotFound() {
  return (
    <div>
      <h1>This is not a login page to login click below</h1>
      <div>
        <Link href='/login'>Got to Login</Link>
      </div>
      <div>
        <Link href='/'>Got to HomePage</Link>
      </div>
    </div>
  );
}

export default LoginNotFound;
