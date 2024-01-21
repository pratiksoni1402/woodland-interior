"use client"
import { Button } from "./../../../components/ui/button";
export default function Pricing(){
    return(
        <div className="product-price-wrapper">
            <div className="wrapper border border-[#b2937e] p-4">
                <div className="heading font-roboto border-b border-[#b2937e] text-center py-5 text-[#3c2f27] font-semibold">
                    Summary
                </div>
                <div className="calculation">
                    <div className="sub-total pt-3 flex justify-between px-2 font-roboto text-[#4b4537]">
                        <div>Sub-Total:</div>
                        <div>8200</div>
                    </div>
                    <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
                        <div>Central GST:</div>
                        <div>900</div>
                    </div>
                    <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                        <div>State GST:</div>
                        <div>900</div>
                    </div>
                    <div className="total-price flex font-semibold pt-3 pb-5 border-t border-[#b2937e] justify-between px-2 font-roboto text-[#4b4537]">
                        <div>Total:</div>
                        <div>10000</div>
                    </div>
                </div>
                <div className="place-order text-center w-full ">
                    <Button type="submit" className="w-full bg-[#b2937e] rounded-none hover:bg-[#3c2f27]">Proceed To Checkout</Button>
                </div>
                 
            </div>
        </div>
    )
}