import Shippingdetail from "./shipping-details"
import Shoppingbag from "./shopping-bag"
export default function Checkout() {
    return (
        <div className="checkout-page">
            <div className="container">
                <div className="grid grid-cols-12 gap-5">
                    <div className="xl:col-span-7 lg:col-span-7 md:col-span-5 sm:col-span-12 col-span-12">
                        <div className="left-section">
                            <Shippingdetail />
                        </div>
                    </div>
                    <div className="xl:col-span-5 lg:col-span-5 md:col-span-7 sm:col-span-12 col-span-12">
                        <div className="right-section">
                            <Shoppingbag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}