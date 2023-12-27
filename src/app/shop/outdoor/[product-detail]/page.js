"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { MoonLoader } from 'react-spinners';
import { IndianRupee } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ShoppingBag } from 'lucide-react';
import Image from "next/image";
import { OUTDOOR_MEDIA_URL } from '@/app/_lib/constants/images';
export default function Detail({params}){
    const [productDetail, setProductDetail] = useState();
    useEffect(()=>{
        axios.get(`/api/outdoor-page/${params['product-detail']}`)
        .then((response)=>{
            setProductDetail(response.data.product_detail)
        })
        .catch((error)=>{
            console.log("Error Occured", error)
        });
    }, [params])

    if (!productDetail) {
        return <div className='loading h-screen w-full flex justify-center items-center'><MoonLoader color="#3c2f27" />
        </div>;
    }

    return(
        <div className="product-detail-page bg-[#faf2ec]">
            <div className="container">
                <div className="product-wrapper py-10 border-t ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8">
                            <div className="left-section">
                                <div className="product-image">
                                    <Image src={`${OUTDOOR_MEDIA_URL}/${productDetail?.image}`} width={500} height={500} alt={productDetail?.name} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="right-section">
                                <div className="detail-wrapper">
                                    <div className="variation font-roboto text-sm text-[#3c2f27]">
                                        <span className="caption">SKU:</span><span className="value">{productDetail?.sku}</span>
                                    </div>
                                    <div className="product-name text-[#3c2f27] font-semibold font-crimson text-2xl">
                                        {productDetail?.name}
                                    </div>
                                    <div className="description text-[#3c2f27] text-sm py-2 font-roboto">
                                        {productDetail?.description}
                                    </div>
                                    <div className="pricing flex items-center  text-[#3c2f27] font-semibold font-crimson text-lg">
                                        <span> <IndianRupee width={18} /></span><span>{productDetail?.price}</span>
                                        <span className="text-xs px-1">(inclusive of all taxes)</span>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div className="wishlist py-3">
                                        <Button variant="outline" className="text-sm w-full text-[#54595f] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27]  rounded-none h-12">ADD TO WISHLIST 
                                            <span className="px-2"><Heart width={18}/></span>
                                        </Button>
                                    </div>
                                    <div className="wishlist py-3">
                                        <Button variant="outline" className="text-sm w-full text-[#54595f] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27] rounded-none h-12">ADD TO BAG
                                            <span className="px-2"><ShoppingBag width={18}/></span>
                                        </Button>
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