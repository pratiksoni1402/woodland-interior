"use client"
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { IndianRupee } from 'lucide-react';
import { SOFA_SETS_MEDIA_URL } from "@/app/_lib/constants/images";
import { useEffect, useState } from "react";
export default function Bedroom() {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get("/api/sofaset-products")
            .then((response) => {
                setProducts(response.data.sofa_products);
                console.log(response)
            })
            .catch((error) => {
                console.log("Error Occured While fetching data", error)
            });
    })

    return (
        <div className="sofaset-products-page
     bg-[#faf2ec]">
            <div className="container">
                <div className="page-banner py-5">
                    <div className="grid grid-cols-12 md:gap-10 sm:gap-5 gap-0">
                        <div className="col-span-8">
                            <div className="content-wrapper h-full flex items-center">
                                <div>
                                    <div className="title font-crimson text-[#3c2f27] font-medium text-4xl py-4">
                                        Sofa Sets
                                    </div>
                                    <div className="description">
                                        <p className="text-justify text-[#4f4537] font-roboto leading-6 text-base">
                                            Unwind in Style discover the Ultimate Comfort with Our Sofa Sets! Immerse yourself in the art of relaxation with our thoughtfully curated collection of sofa sets. From contemporary chic to timeless classics, each piece is a testament to craftsmanship and comfort. Explore a world of design diversity, where plush seating meets exquisite aesthetics. Elevate your living space with our exclusive range of sofa sets that seamlessly balance style and functionality. Whether you prefer sleek modern lines or the warmth of traditional designs, our collection has something for every taste. Dive into a realm of luxury and transform your living room into a haven of comfort and sophistication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="Image-wrapper">
                                <div className="image">
                                    <Image
                                        src="/uploads/images/shop/sofa-sets/banner.jpg"
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
                        Showing 12 of 12 Products
                    </span>
                </div>
                <div className="product-listing-section py-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {products && products.map((product) => (
                            <Link href={`/shop/sofa-sets/${product.id}`} key={product.id} className="my-4 group ">
                                <div className="product-image overflow-hidden">
                                    <Image src={`${SOFA_SETS_MEDIA_URL}/${product.image}`} alt={product.name} width={427} height={427} className=" group-hover:scale-125 transition-transform duration-300" />
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
