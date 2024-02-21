'use client'
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IndianRupee } from 'lucide-react';
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
export default function Shoppingbag() {
  let grandtotal = 0;
  let taxamount = 0;
  let subtotal = 0;
  const { isPending, data: cartdata, error } = useQuery({
    queryKey: ['cart-items'],
    queryFn: () =>
      axios.get('/api/cart-items/get-data')
        .then((response) => {
          console.log("Checkout page", response.data.cartdata)
          return response.data.cartdata

        })
        .catch((error) => {
          console.log('Error', error)
        })
  })
  return (
    <div className="shopping-bag border border-[#b2937e]">
      <div className="heading text-center py-3 font-crimson text-[#3c2f27] text-2xl">
        Your cart items
      </div>
      <div className="product-wrapper">
        {cartdata && cartdata?.map((productlist) => (

          grandtotal += productlist.products.price * productlist.quantity,
          taxamount = (grandtotal * 9) / 100,
          subtotal = grandtotal - (taxamount * 2),
          
          <div className="product border-t border-[#b2937e] py-5 px-3" key={productlist.id}>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3">
                <div className="product-image">
                  <Image src={`${PRODUCT_MEDIA_URL}/${productlist.products.image}`} alt={productlist.products.name} width={100} height={100} className="w-full" />
                </div>
              </div>
              <div className="col-span-7">
                <div className="description">
                  <div className="name text-sm font-crimson text-[#3c2f27] font-semibold ">
                    {productlist.products.name}
                  </div>
                  <div className="sku py-2 text-xs">
                    <span>SKU:</span>
                    <span className=" text-[#3c2f27] font-semibold "> {productlist.sku}</span>
                  </div>
                  <div className="sku py-2 text-xs">
                    <span>Quantity:</span>
                    <span className=" text-[#3c2f27] font-semibold pl-1">{productlist.quantity}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex pricing text-xs text-right items-center justify-end text-[#3c2f27] font-semibold ">
                  <div className="inline"><IndianRupee width={14}/></div>
                  <div>
                    {productlist.products.price * productlist.quantity}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        }

      </div>
      <div className="grand-total">
        <div className="order-summary-wrapper sticky top-20">
          <div className="wrapper border-t border-[#b2937e] ">
            <div className="heading font-roboto border-b border-[#b2937e] text-center py-5 text-[#3c2f27] font-semibold">
              Summary
            </div>
            <div className="calculation p-4">
              <div className="sub-total flex pb-2 justify-between font-roboto text-[#4b4537] text-sm">
                <div>Sub-Total:</div>
                <div>{subtotal}</div>
              </div>
              <div className="sub-total flex pb-2 justify-between font-roboto text-[#4b4537] text-sm">
                <div>Central GST:</div>
                <div>{taxamount}</div>
              </div>
              <div className="sub-total flex pb-2 justify-between font-roboto text-[#4b4537] text-sm">
                <div>State GST:</div>
                <div>{taxamount}</div>
              </div>
            </div>
            <div className="total-price flex font-semibold border-t border-[#b2937e] justify-between p-4  font-roboto text-[#4b4537]">
              <div>Total:</div>
              <div>{grandtotal}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}