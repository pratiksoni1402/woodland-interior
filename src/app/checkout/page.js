import Shippingdetail from "./shipping-details"
import Shoppingbag from "./shopping-bag"
export default function Checkout() {
    return (
        <div className="checkout-page bg-[#faf2ec] pb-10">
            <div className="container">
                <div className="heading text-center pt-5 pb-10 font-crimson text-[#3c2f27] text-4xl">
                    Secure Checkout
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="xl:col-span-7 lg:col-span-7 md:col-span-5 lg:order-1 order-2 sm:col-span-12 col-span-12">
                        <div className="left-section">
                            <Shippingdetail />
                        </div>
                    </div>
                    <div className="xl:col-span-5 lg:col-span-5 md:col-span-7 lg:order-2 order-1 sm:col-span-12 col-span-12">
                        <div className="right-section sticky top-24">
                            <Shoppingbag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}