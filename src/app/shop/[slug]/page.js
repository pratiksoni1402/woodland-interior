"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { IndianRupee } from 'lucide-react';
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import { BANNER_MEDIA_URL } from "@/app/_lib/constants/images";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
export default function Bedroom({ params }) {

  // Fetching All Products
  const { isPending, data: allproducts, error, fetchNextPage, hasNextPage } = useQuery({
    queryKey: ['product-list'],
    queryFn: () =>
      axios.get(`/api/product-listing?slug=${params.slug}`)
        .then((response) => {
          console.log(response.data.productlist)
          return response.data.productlist
        })
  })
  // End



  return (
    <div className="bedroom-products-page bg-[#faf2ec] border-t">
      <div className="container">
        <div className="page-banner py-5">
          {
            allproducts && allproducts.map((bannerinfo) => (
              <div className="grid grid-cols-12 md:gap-10 sm:gap-5 gap-0" key={bannerinfo.id}>
                <div className="md:col-span-8 sm:col-span-12 col-span-12 md:order-1 sm:order-2 order-2">
                  <div className="content-wrapper h-full flex items-center">
                    <div>
                      <div className="title font-crimson text-[#3c2f27] font-medium text-4xl md:py-4 py-2">
                        <h1>{bannerinfo.heading}</h1>
                      </div>
                      <div className="description">
                        <p className="text-justify  text-[#4f4537] font-roboto leading-6 text-base">
                          {bannerinfo.intro}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 sm:col-span-12 col-span-12 md:order-2 sm:order-1 order-1">
                  <div className="Image-wrapper h-full flex items-center">
                    <div className="image relative">
                      <Image
                        src={`${BANNER_MEDIA_URL}/${bannerinfo.image}`}
                        alt=""
                        width={640}
                        height={853}
                        quality={100}
                        className="sm:w-[640px] w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="total-products text-center border border-x-0 py-3 my-3">
          {
            allproducts && allproducts.map((counting, index) => (
              <div key={index}>
                <span className="font-crimson font-semibold text-base text-[#3c2f27]">
                  <span>Showing</span>
                  <span className="px-1">{counting.products.length}</span>
                  <span>of</span>
                  <span className="px-1">{counting.products.length}</span>
                  <span>Products</span>
                </span>
              </div>
            ))
          }

        </div>
        <div className="product-listing-section py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">

            {
              allproducts && allproducts.map((category) => (
                category.products && category.products.map((product) => (
                  <Link href={`/product-detail/${product.id}`} key={product.id} className="my-4 group ">
                    <div className="product-image overflow-hidden relative h-[327px]">
                      <LazyImage src={`${PRODUCT_MEDIA_URL}/${product.image}`} alt={product.name} width={427} height={427} className=" group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div className="detail text-center text-sm text-[#54595f] font-roboto group-hover:text-[#3c2f27] group-hover:font-bold transition duration-150">
                      <div className="p-2">{product.name}</div>
                      <div className="pricing font-bold flex justify-center items-center">
                        <div className=""><IndianRupee width={18} /></div>
                        <div>{product.price}</div>
                      </div>
                    </div>
                  </Link>
                ))
              ))
            }
          </div>
          {/* <div>
            <h1>This is mock drill</h1>
            {
              allproducts && allproducts.map((items) => (
                console.log('This id drilling',items.heading)
              ))
            }
          </div> */}
        </div>
      </div>
    </div>
  );
}
