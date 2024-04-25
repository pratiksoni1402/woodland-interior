export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { getSession } from "@/lib/session"
import Shippingdetail from "./shipping-details"
import Shoppingbag from "./shopping-bag"
import { redirect } from "next/navigation"

export default async function Checkout() {
  const session = await getSession()

  if (!session?.user_details) {
    return redirect('/auth/login')
  }
  return (
    <div className="checkout-page bg-[#faf2ec] pb-10">
      <div className="container">
        <div className="heading text-center pt-5 pb-10 font-crimson text-[#3c2f27] text-4xl">
          Secure Checkout
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="xl:col-span-7 lg:col-span-7 md:col-span-12 lg:order-1 order-2 sm:col-span-12 col-span-12">
            <div className="left-section">
              <Shippingdetail />
            </div>
          </div>
          <div className="xl:col-span-5 lg:col-span-5 md:col-span-12 lg:order-2 order-1 sm:col-span-12 col-span-12">
            <div className="right-section sticky top-24">
              <Shoppingbag />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}