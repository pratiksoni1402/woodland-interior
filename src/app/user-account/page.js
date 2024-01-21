import React from "react"
import { Tabbing } from "./../components/tabbing"
export default function MyAccount() {
    return (
        <div className="my-account-page bg-[#faf2ec]">
            <div className="wrapper container">
                <div className="heading text-center border-t font-crimson text-[#3c2f27] text-3xl py-5">
                    <h1>Hello Pratik</h1>
                </div>
                <div className="actions pb-10 w-3/4 m-auto">
                    <div className="font-roboto pb-2 text-[#3c2f27] font-semibold">You can do following things in you account.</div>
                    <ul className="list-disc list-inside">
                        <li className="text-sm text-[#4f4537]">Edit your Profile</li>
                        <li className="text-sm text-[#4f4537]">View your wishlist</li>
                        <li className="text-sm text-[#4f4537]">Your Previous Order History</li>
                        <li className="text-sm text-[#4f4537]">GST and Tax Details</li>
                        <li className="text-sm text-[#4f4537]">Password Updation</li>
                        <li className="text-sm text-[#4f4537]">Account Deletion</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <div className=" ">
                        <Tabbing />
                    </div>
                </div>
            </div>
        </div>
    )
}