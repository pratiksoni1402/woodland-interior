'use client'
import Image from "next/image"
export default function Shoppingbag() {
    return (
        <div className="shopping-bag">
            <div className="heading text-center border-b pb-3 font-crimson text-[#3c2f27] text-2xl">
                Products in your cart
            </div>
            <div className="product-wrapper pt-5">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3">
                        <div className="product-image">
                            <Image src='/uploads/images/shop/bedroom/products/image2.jpg' alt="image2" width={100} height={100} className="w-full" />
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className="description">
                            <div className="name text-xs ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat possimus, quam eligendi consequuntur reiciendis aliquam? Nisi perspiciatis doloremque neque?
                            </div>
                            <div className="sku py-2 text-xs">
                                BED-6P-AED
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="pricing text-xs text-right">
                            5000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}