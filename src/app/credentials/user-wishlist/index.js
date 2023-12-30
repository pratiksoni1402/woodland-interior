'use client'
import Image from "next/image"
import { IndianRupee } from "lucide-react"
import './style.css'
import { Button } from "@/app/components/ui/button"
import { useState } from "react"
export default function Wishlist(){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <div className="wishlist-component flex justify-center">
            <div className='user-wishlist w-3/4 bg-[#faf2ec]'>
                {/* <div className="container"> */}
                    <div className="grid grid-col-1">
                        <div className="col">
                            <div className='my-items'>
                                <div className='product-wrapper mb-10 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    {isHovered && (
                                        <div className='buttons absolute z-10 text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                                            {/* Add your buttons here */}
                                            
                                                <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>View</Button>
                                                <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Move to Cart</Button>
                                                <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Delete from Wishlist</Button>
                                            
                                        </div>
                                    )}
                                    <div className='product'>
                                        <div className="grid grid-cols-12">
                                            <div className="xl:col-span-3 sm:col-span-2 col-span-12">
                                                <div className='image'>
                                                    <Image src="/uploads/images/shop/bedroom/products/image1.jpg" alt='Storage' width={150} height={150} />

                                                </div>
                                            </div>
                                            <div className="xl:col-span-7 sm:col-span-8 col-span-12">
                                                <div className='description'>
                                                    <div className='title'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione asperiores velit esse praesentium architecto maiores eos nisi nihil quam.
                                                    </div>
                                                    <div className='constant'>Product SKU: <span className='variation'>TIM0358-B</span></div>
                                                    <div className='constant'>Material: <span className='variation'>Timber</span></div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 col-span-12">
                                                <div className='amount'>
                                                    <span className='constant'><IndianRupee /><span className='variation'>10,000</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {isHovered && <div className='backdrop absolute top-0 left-0 w-full h-full bg-[#faf2ec] opacity-70 backdrop-blur z-[1] pointer-events-none'></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}