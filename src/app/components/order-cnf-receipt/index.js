'use client'
import Image from "next/image"
export default function Cnforder() {
  return (
    <div className="cnf-order-receipt">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="heading py-3 text-3xl font-crimson text-[#3f2f27]">
            <h1 className="text-center">Woodland Interiors</h1>
          </div>
        </div>
        <div className="col-span-12">
          <div className="order-status pl-4">
            <h2 className="text-2xl font-crimson text-green-950 pb-3">Thanks for your Order, Pratik</h2>
            <p className="text-sm font-roboto text-[#3c2f27]">Tracking information will be emailed as soon as your order shipped.</p>
          </div>
        </div>
        <div className="col-span-12">
          <div className="order-number text-sm pl-4 font-roboto text-[#3c2f27]">
            <span>Order Number:</span>
            <span className="font-semibold"> 3464546</span>
          </div>
        </div>
        <div className="col-span-12">
          <div className="address-wrapper pt-4">
            <div className="grid grid-cols-2 gap-5">
              <div className="col">
                <div className="shipping-address">
                  <div className="heading  bg-[#3c2f27] pl-4 text-[#faf2ec] text-sm font-roboto mb-2 py-1">
                    Shipping Address
                  </div>
                  <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Name:</span>
                    <span className="value font-semibold pl-1">Pratik</span>
                  </div>
                  <div className="address font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Address:</span>
                    <span className="value font-semibold pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae!</span>
                  </div>
                  <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">State:</span>
                    <span className="value font-semibold pl-1">Rajasthan</span>
                  </div>
                  <div className="city font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">City:</span>
                    <span className="value font-semibold pl-1">Jodhpur</span>
                  </div>
                  <div className="pincode font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Pincode:</span>
                    <span className="value font-semibold pl-1">342005</span>
                  </div>
                  <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Phone Number:</span>
                    <span className="value font-semibold pl-1">7531594862</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="billing-address">
                  <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                    Billing Address
                  </div>
                  <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Name</span>
                    <span className="value font-semibold pl-1">Pratik</span>
                  </div>
                  <div className="address font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Address:</span>
                    <span className="value font-semibold pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae!</span>
                  </div>
                  <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">State:</span>
                    <span className="value font-semibold pl-1">Rajasthan</span>
                  </div>
                  <div className="city font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">City:</span>
                    <span className="value font-semibold pl-1">Jodhpur</span>
                  </div>
                  <div className="pincode font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Pincode:</span>
                    <span className="value font-semibold pl-1">342005</span>
                  </div>
                  <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="caption">Phone Number:</span>
                    <span className="value font-semibold pl-1">7531594862</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="billing-address">
                  <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                    Payment Method
                  </div>
                  <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                    <span className="value font-semibold pl-1">Cash on Delivery</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}