'use client'
import axios from "axios";
import Image from "next/image";
import { BEDROOM_PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import { useEffect, useState } from "react"
import { MoonLoader } from 'react-spinners';
import { IndianRupee } from 'lucide-react';


export default function Detailpage({ params }) {
    const [productDetail, setProductDetail] = useState(null);
    useEffect(() => {
        axios.get(`/api/bedroom-detail/${params['product-detail']}`)
            .then((response) => {
                setProductDetail(response.data.product_detail)
                console.log(response)
            })
            .catch((error) => {
                console.log("Error occured while fetching product detail", error)
            })
    }, [params]);
    if (!productDetail) {
        return <div className='loading'><MoonLoader color="#3c2f27" /></div>;
    }
    return (
        <div className="product-detail-page bg-[#faf2ec]">
            <div className="container">
                <div className="product-wrapper py-10">
                    <div className="grid grid-cols-12">
                        <div className="col-span-7">
                            <div className="left-section">
                                <div className="product-image">
                                    <Image src={`${BEDROOM_PRODUCT_MEDIA_URL}/${productDetail?.image}`} width={500} height={500} alt={productDetail?.name} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="right-section">
                                <div className="detail-wrapper">
                                    <div className="variation">
                                        <span className="caption">SKU:</span><span className="value">{productDetail?.sku}</span>
                                    </div>
                                    <div className="product-name text-[#3c2f27] font-crimson text-2xl">
                                        {productDetail?.name}
                                    </div>
                                    <div className="description">
                                        {productDetail?.description}
                                    </div>
                                    <div className="pricing flex items-center">
                                        <span> <IndianRupee width={18} /></span><span>{productDetail?.price}</span>
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