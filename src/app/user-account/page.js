import React from "react"
import './style.css'
import Menu from "../menu/Menu"
export default function MyAccount() {
    return (
        <div className="my-account-page bg-[#faf2ec]">
            <div className="wrapper container">
                <div className="heading text-center border-t font-crimson text-[#3c2f27] text-3xl py-5">
                    <h1>Hello Pratik</h1>
                </div>

                <div className="grid grid-cols-6 gap-5">
                    <Menu/>
                </div>
            </div>
        </div>
    )
}