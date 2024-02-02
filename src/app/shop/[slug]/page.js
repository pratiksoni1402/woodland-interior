"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { IndianRupee } from 'lucide-react';
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import { BASE_MEDIA_URL } from "@/app/_lib/constants/images";
import { CATEGORY_IMAGE_SUBFOLDER } from "@/app/_lib/constants/images";
import { useQuery } from "@tanstack/react-query";
export default function Bedroom({ params }) {
  
  // Fetching All Products
  const { isPending, data:allproducts, error} = useQuery({
    queryKey: ['product-list'],
    queryFn: () =>
      axios.get(`/api/product-listing?slug=${params.slug}`)
      .then((response) =>{
        return response.data.productlist
      })
  })
  // End

  // Images path 
  const getCategoryImageSubfolder = (category) => {
    return CATEGORY_IMAGE_SUBFOLDER[category] || 'default-category';
  };
  // End


  return (
    <div className="bedroom-products-page bg-[#faf2ec] border-t">
      <div className="container">
        <div className="page-banner py-5">
          <div className="grid grid-cols-12 md:gap-10 sm:gap-5 gap-0" >
            <div className="md:col-span-8 sm:col-span-12 col-span-12 md:order-1 sm:order-2 order-2">
              <div className="content-wrapper h-full flex items-center">
                <div>
                  <div className="title font-crimson text-[#3c2f27] font-medium text-4xl md:py-4 py-2">
                    <h1>Bedroom Furniture</h1>
                  </div>
                  <div className="description">
                    <p className="text-justify  text-[#4f4537] font-roboto leading-6 text-base">
                      Indulge in the warmth and comfort of our exquisite wooden
                      beds, where dreams find their perfect sanctuary. Crafted
                      with passion and precision, each bed is a symphony of
                      natural beauty and timeless design. Carefully selected
                      hardwoods are transformed into works of art, boasting not
                      only durability but also a graceful aesthetic that
                      complements any bedroom. Whether you envision a modern
                      minimalist retreat or a cozy rustic haven, our diverse
                      collection offers a range of styles to suit your unique
                      taste. Immerse yourself in the embrace of natures finest
                      materials, where every curve and joint tells a story of
                      exceptional craftsmanship. Our wooden beds are more than
                      just pieces of furniture; they are a promise of restful
                      nights and cherished mornings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 sm:col-span-12 col-span-12 md:order-2 sm:order-1 order-1">
              <div className="Image-wrapper h-full flex items-center">
                <div className="image relative">
                  <Image
                    src="/uploads/images/shop/bedroom/banner.jpg"
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
        </div>
        <div className="total-products text-center border border-x-0 py-3 my-3">
          <span className="font-roboto text-sm text-[#54595f]">
            Showing 17 of 17 Products
          </span>
        </div>
        <div className="product-listing-section py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">

            {
              allproducts && allproducts.map((category) => (
                category.products && category.products.map((product) => (
                  <Link href={`/shop/bedroom/${product.id}`} key={product.id} className="my-4 group ">
                    <div className="product-image overflow-hidden relative h-[327px]">
                      <LazyImage src={`${BASE_MEDIA_URL}/${getCategoryImageSubfolder(category.name)}/products/${product.image}`} alt={product.name} width={427} height={427} className=" group-hover:scale-125 transition-transform duration-300" />
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
        </div>
        <div className="new-data">
          <h1>This is new data</h1>
          {/* {
                        allproducts && allproducts.map((item) =>(
                            console.log(item.products.name)
                        ))
                    } */}

          {/* {
                        allproducts && allproducts.map((category) => (
                            category.products && category.products.map((product) => (
                                <div key={product.id}>
                                    <h2>{product.name}</h2>
                                </div>
                            ))
                        ))
                    } */}

          {/* {
                        product && productlist.map((category) => (
                            category.products && category.products.map((product) => (
                                console.log(product.name)
                            ))
                        ))
                    }  */}
        </div>
      </div>
    </div>
  );
}
