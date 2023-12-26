'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IndianRupee } from 'lucide-react';
import { OUTDOOR_MEDIA_URL } from "@/app/_lib/constants/images";
import { useEffect, useState } from "react";
export default function Outdoor() {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get("/api/outdoor-products")
            .then((response) => {
                setProducts(response.data.backyard_products)
            })
            .catch((error) => {
                console.log("Error Occured while fetching data", error)
            });
    }, [])
    return (
        <div className="outdoor-products-page bg-[#faf2ec]">
            <div className="container">
                <div className="page-banner py-5">
                    <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-8">
                            <div className="content-wrapper h-full flex items-center">
                                <div>
                                    <div className="title font-crimson text-[#54595f] text-4xl py-4">
                                        Outdoor
                                    </div>
                                    <div className="description">
                                        <p className="text-justify text-[#54595f] font-roboto leading-6 text-base">
                                            Elevate Your Space with Our Outdoor Furniture Collection! Step into a world of alfresco elegance with our handpicked outdoor furniture range. Each piece is a harmonious blend of durability and design, crafted to enhance your outdoor living experience. Explore a diverse array of styles, from contemporary chic to rustic charm, designed to complement any outdoor setting. Immerse yourself in the beauty of open-air relaxation as you browse our curated collection of outdoor furniture. Create an oasis in your backyard with our thoughtfully designed pieces that withstand the elements without compromising on style. Transform your outdoor space into a retreat of comfort and sophistication with our exclusive selection. Whether you envision a cozy patio or a sprawling garden retreat, our outdoor furniture promises to bring your vision to life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="Image-wrapper">
                                <div className="image">
                                    <Image
                                        src="/uploads/images/shop/outdoor/banner.jpg"
                                        alt=""
                                        width={640}
                                        height={853}
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total-products text-center border border-x-0 py-3 my-3">
                    <span className="font-roboto text-sm text-[#54595f]">
                        Showing 10 of 38 Products
                    </span>
                </div>
                <div className="product-listing-section py-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {products && products.map((product) => (
                            <Link href='/' key={product.id} className="my-4 group ">
                                <div className="product-image overflow-hidden">
                                    <Image src={`${OUTDOOR_MEDIA_URL}/${product.image}`} alt={product.name} width={427} height={427} className=" group-hover:scale-125 transition-transform duration-300" />
                                </div>
                                <div className="detail text-center text-sm text-[#54595f] font-roboto group-hover:text-[#3c2f27] group-hover:font-bold transition duration-150">
                                    <div className="p-2">{product.name}</div>
                                    <div className="pricing font-bold flex justify-center items-center">
                                        <div className=""><IndianRupee width={18} /></div>
                                        <div>{product.price}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
