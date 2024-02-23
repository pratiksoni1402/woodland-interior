
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from "react"
import { Tabbing } from "../components/tabbing"
import { getSession } from "@/lib/session"
import Logoutbutton from "../components/logout-button";
import { redirect } from "next/navigation";
export default async function MyAccount() {

  const session = await getSession();
  console.log('This is session from my-account', session.user_details?.email)
  if (!session?.user_details) {
    return redirect('/auth/login')
  }

  function getGreeting() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 4 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  const greeting = getGreeting();
  const message = `${greeting}, ${session.user_details.firstname}`;

  return (
    <div className="my-account-page bg-[#faf2ec] h-screen">
      <div className="wrapper container">
        <div className="heading text-center border-t font-crimson text-[#3c2f27] text-3xl py-5">
          <h1 className="capitalize">{message}</h1>
        </div>
        <div className="actions pb-10 sm:w-3/4 w-full m-auto flex justify-between">
          <div className="activity">
            <div className="font-roboto pb-2 text-[#3c2f27] font-semibold">You can do following things in you account.</div>
            <ul className="list-disc list-inside">
              <li className="text-sm text-[#3c2f27]">Edit your Profile</li>
              <li className="text-sm text-[#3c2f27]">View your wishlist</li>
              <li className="text-sm text-[#3c2f27]">Your Previous Order History</li>
              <li className="text-sm text-[#3c2f27]">Password Updation</li>
              <li className="text-sm text-[#3c2f27]">Manage Addresses</li>
              <li className="text-sm text-[#3c2f27]">Browsing History</li>
              <li className="text-sm text-[#3c2f27]">Account Deletion</li>
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