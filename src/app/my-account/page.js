
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from "react"
import { Tabbing } from "../components/tabbing"
import { getSession } from "@/lib/session"
import Logoutbutton from "../components/logout-button";
import { redirect } from "next/navigation";
export default async function MyAccount() {

  const session = await getSession();
  if (!session?.user_details) {
    return redirect('/auth/login')
  }

  function getGreeting() {
    const now = new Date();
  
    // Setting time zone to Indian Standard Time (IST)
    const ISTTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  
    const currentHour = ISTTime.getHours();
  
    if (currentHour >= 4 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
  // End
  
  const greeting = getGreeting();
  const message = `${greeting}, ${session.user_details.firstname}`;
  

  return (
    <div className="my-account-page bg-[#faf2ec] h-full border-t border-[#b2937e]">
      <div className="wrapper container">
        <div className="heading text-center font-crimson text-[#3c2f27] text-3xl py-5">
          <h1 className="capitalize md:text-4xl text-base">{message}</h1>
        </div>
        <div className="actions pb-10 lg:w-3/4 w-full m-auto flex sm:flex-row flex-col justify-between">
          <div className="activity sm:order-1 order-2">
            <div className="font-roboto pb-2 text-[#3c2f27] font-semibold text-sm">You can do following things in you account.</div>
            <ul className="list-disc list-inside font-roboto">
              <li className="text-sm text-[#3c2f27]">Edit your Profile</li>
              <li className="text-sm text-[#3c2f27]">View your wishlist</li>
              <li className="text-sm text-[#3c2f27]">Your Previous Order History</li>
              <li className="text-sm text-[#3c2f27]">Password Updation</li>
            </ul>
          </div>
          <div className="logout sm:order-2 order-1 text-right text-white">
            <Logoutbutton />
          </div>

        </div>
        <div className="">
          <div className="account-actions">
            <Tabbing />
          </div>
        </div>
      </div>
    </div>
  )
}