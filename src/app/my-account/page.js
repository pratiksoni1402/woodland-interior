
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from "react"
import { Tabbing } from "../components/tabbing"
import { getSession } from "@/lib/session"
import Logoutbutton from "../components/logout-button";
import { redirect } from "next/navigation";
export default async function MyAccount() {
  const session = await getSession();
  console.log('This is session from my-account', session)
  if (!session?.user_details) {
    return redirect('/auth/login')
  }
  return (
    <div className="my-account-page bg-[#faf2ec]">
      <div className="wrapper container">
        <div className="heading text-center border-t font-crimson text-[#3c2f27] text-3xl py-5">
          <h1 className="capitalize">Hello {session.user_details.firstname}</h1>
        </div>
        <div className="actions pb-10 sm:w-3/4 w-full m-auto flex justify-between">
          <div className="activity">
            <div className="font-roboto pb-2 text-[#3c2f27] font-semibold">You can do following things in you account.</div>
            <ul className="list-disc list-inside">
              <li className="text-sm text-[#6c4428]">Edit your Profile</li>
              <li className="text-sm text-[#6c4428]">View your wishlist</li>
              <li className="text-sm text-[#6c4428]">Your Previous Order History</li>
              <li className="text-sm text-[#6c4428]">Password Updation</li>
              <li className="text-sm text-[#6c4428]">Account Deletion</li>
            </ul>
          </div>
          <div className="logout">
            <Logoutbutton />
          </div>

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