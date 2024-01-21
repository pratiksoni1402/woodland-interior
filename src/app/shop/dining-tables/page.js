'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { IndianRupee } from 'lucide-react';
import { Skeleton } from "../../components/ui/skeleton"
import { DINE_TABLE_MEDIA_URL } from "@/app/_lib/constants/images";
import { useEffect, useState } from "react";
export default function Dining() {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get("/api/dining-products")
            .then((response) => {
                setProducts(response.data.dining_sets)
            })
            .catch((error) => {
                console.log("Error Occured", error)
            });

    }, [])

    if (!products) {
        return <div className="skeleton flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" /> 
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    }
    return (
        <div className="dining-table-products-page bg-[#faf2ec]">
            <div className="container">
                <div className="page-banner py-5">
                    <div className="grid grid-cols-12 md:gap-10 sm:gap-5 gap-0">
                        <div className="col-span-8">
                            <div className="content-wrapper h-full flex items-center">
                                <div>
                                    <div className="title font-crimson text-[#3c2f27] font-medium  text-4xl py-4">
                                        Dining Tables
                                    </div>
                                    <div className="description">
                                        <p className="text-justify text-[#4f4537]  font-roboto leading-6 text-base">
                                            Elevate Your Dining Experience: Discover Exquisite Dining Tables at Our Showcase! Immerse yourself in a world of sophistication and functionality as you explore our curated collection of dining table products. From sleek modern designs to timeless classics, each piece is meticulously crafted to add a touch of elegance to your dining space. Unleash your creativity and transform your dining area into a stylish haven with our diverse range of high-quality tables. Whether you prefer minimalist chic or opulent charm, our selection caters to diverse tastes. Explore the fusion of form and function – redefine your dining space with our exceptional tables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="Image-wrapper">
                                <div className="image">
                                    <Image
                                        src="/uploads/images/shop/dining-tables/banner.jpg"
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
                            <Link href={`/shop/dining-tables/${product.id}`} key={product.id} className="my-4 group ">
                                <div className="product-image overflow-hidden">
                                    <Image src={`${DINE_TABLE_MEDIA_URL}/${product.image}`} alt={product.name} width={427} height={427} className=" group-hover:scale-125 transition-transform duration-300" />
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
