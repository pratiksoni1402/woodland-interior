'use client'
import React from "react";
import Register from "./register";
import Login from "./login";
const auth = () => {
    return (
        <div className="account-page bg-[#faf2ec] md:py-20 sm:py-10">
            
            <div className="container grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-20 sm:gap-10 justify-center content-wrapper">
                <div>
                    <Login />
                </div>
                <div>
                    <Register />
                </div>
            </div>
        </div>
    )
}

export default auth;