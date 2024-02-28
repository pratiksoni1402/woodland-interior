"use client"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import axios from "axios";
import { MoonLoader } from 'react-spinners';
import { ClipLoader } from "react-spinners";
import { IndianRupee } from 'lucide-react';
import { Button } from "./../../components/ui/button";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import { useQueryClient } from "@tanstack/react-query";
import Reviews from "@/app/components/customer-reviews";
import Image from "next/image";

export default function Detail({ params }) {
  const queryClient = useQueryClient();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);


  // Fetching Product Detail
  const { isPending, data: detail, error } = useQuery({
    queryKey: ['product-detail'],
    queryFn: () =>
      axios.get(`/api/product-detail/${params['id']}`)
        .then((response) => {
          return response.data.productDetail
        })
        .catch((error) => {
          console.log("Error in fetching data", error)
        })
  })
  // End

  // Wishlist Table Data
  const { isavailable, data: wishlistdata, error: hasError } = useQuery({
    queryKey: ['wishlistitems'],
    queryFn: () =>
      axios.get('/api/wishlist-items/get-data')
        .then((response) => {
          console.log(response.data.getallproduct)
          return response.data.getallproduct
        })
  });
  // End


  // Invalidate totalcount on add to Cart
  const { pending, data: totalcount, iserror } = useQuery({
    queryKey: ['totalcount'],
    queryFn: () =>
      axios.get('/api/cart-items/get-count')
        .then((response) => {
          console.log(response.data.productcount)
          return response.data.productcount
        })

  });
  // End

  // Invalidate totalcount on add to Wishlist
  const { hold, data: wishlisttotal, isWishlistError } = useQuery({
    queryKey: ['wishlistcount'],
    queryFn: () =>
      axios.get('/api/wishlist-items/get-count')
        .then((response) => {
          console.log(response.data.totalcount)
          return response.data.totalcount
        })
  });


  // Updating Price Based on Product Quantity
  useEffect(() => {
    const price = detail?.price * count
    setPrice(price)
  }, [count, detail])
  // End

  // Display spinner Until Data is Getting Ready
  if (!detail) {
    return (

      <div className='loading h-screen bg-[#faf2ec] w-full flex justify-center items-center'><MoonLoader color="#3c2f27" />
      </div>
    )
  }
  // End

  // Increasing Product Quantity
  const handleIncrement = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1)
    } else {
      toast.error("Only 10 Sets are allowed to buy", {
        duration: 8000,
        style: {
          border: '1px solid #3c2f27',
          padding: '16px',
          color: '#faf2ec',
          backgroundColor: '#3c2f27',
        },
        iconTheme: {
          primary: '#faf2ec',
          secondary: '#3c2f27',
        },
      });
    }
  }
  // End

  // Decreasing Product Quantity
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  // Add to wishlist
  const addtowishlist = (id, sku) => {
    setLoading(true)
    axios.post('/api/wishlist-items/set-data', {
      id,
      sku,
      quantity: count,
    })
      .then((response) => {
        queryClient.invalidateQueries('wishlistcount')
        toast.success("Product Added to wishlist", {
          duration: 3000,
          style: {
            border: '1px solid #3c2f27',
            padding: '16px',
            color: '#faf2ec',
            backgroundColor: '#3c2f27',
          },
          iconTheme: {
            primary: '#faf2ec',
            secondary: '#3c2f27',
          },
        })
      })
      .catch((error) => {
        console.log("Error occured", error)
        toast.error('Error')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  // End

  // Add to cart
  const addtocart = (id, sku, count) => {
    setAdding(true)
    axios.post('/api/cart-items/set-data', {
      id,
      sku,
      quantity: count,
    })
      .then((response) => {
        queryClient.invalidateQueries('totalcount')
        toast.success('Product Added to cart', {
          duration: 3000,
          style: {
            border: '1px solid #3c2f27',
            padding: '16px',
            color: '#faf2ec',
            backgroundColor: '#3c2f27',
          },
          iconTheme: {
            primary: '#faf2ec',
            secondary: '#3c2f27',
          },
        })
      })
      .catch((error) => {
        toast.error('Error', {
          duration: 3000,
          style: {
            border: '1px solid #3c2f27',
            padding: '16px',
            color: '#faf2ec',
            backgroundColor: '#3c2f27',
          },
          iconTheme: {
            primary: '#faf2ec',
            secondary: '#3c2f27',
          },
        })
      })
      .finally(() => {
        setAdding(false);
      })
  }
  // End

  // Remove Product from wishlist
  const removefromwishlist = (id) => {
    console.log("this is id", id)
    axios.post('/api/wishlist-items/delete-item', { id })
      .then((response) => {
        queryClient.invalidateQueries('wishlistcount')
      })
      .catch((error) => {
        console.log("Error", error)
      })
  }
  const wishlistid = wishlistdata?.find(a => a.id)
  // End


  return (
    <div className="product-detail-page bg-[#faf2ec]">
      <div className="container">
        <div className="product-wrapper py-10 border-t">
          <div className="grid grid-cols-12 gap-7">
            <Toaster />
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5 col-span-12">
              <div className="left-section">
                <div className="product-image  relative lg:h-[600px] h-[427px]">
                  <LazyImage src={`${PRODUCT_MEDIA_URL}/${detail.image}`} alt={detail.name} width={427} height={427} />
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-7 col-span-12">
              <div className="right-section">
                <div className="detail-wrapper">
                  <div className="variation font-roboto text-sm text-[#3c2f27] pb-2">
                    <span className="caption">SKU:</span><span className="value">{detail?.sku}</span>
                  </div>
                  <div className="product-name text-[#3c2f27] font-semibold font-crimson text-2xl pb-2">
                    {detail?.name}
                  </div>
                  <div className="description text-[#3c2f27] text-sm pb-2 font-roboto">
                    {detail?.description}
                  </div>
                  <div className="pricing flex items-center  text-[#3c2f27] font-semibold font-crimson text-lg">
                    <span> <IndianRupee width={18} /></span>
                    <span>{price}</span>
                    <span className="text-xs px-1">(inclusive of all taxes)</span>
                  </div>
                </div>
                <div className="actions">
                  <div className="quantity py-3 ">
                    <div className="pb-1 text-xs text-[#3c2f27] font-roboto">Quantity:</div>
                    <div>
                      <Toaster />
                    </div>
                    <div className="flex items-center">
                      <Button onClick={handleIncrement} variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">+</Button>
                      <span className="px-7 border-[#3c2f27] border h-10 flex items-center border-r-0 border-l-0">{count}</span>
                      <Button onClick={handleDecrement} variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">-</Button>
                    </div>
                  </div>
                  <div className="shipping-wrapper py-5">
                    <div className="flex gap-5">
                      <div>
                        <div className="transit flex flex-col justify-center items-center">
                          <span className="p-3  border-2 border-[#3c2f27] rounded-full">
                            <Image src='/uploads/images/shipping-step/in-transit.svg' alt='Transit' className="w-8 h-8" width={20} height={32} />
                          </span>
                          <span>
                            <Image src='/uploads/images/shipping-step/shipping.svg' alt='Steps' className=" w-4 h-44" width={20} height={50} />
                          </span>
                        </div>
                      </div>
                      <div className="information">
                        <div className="heading">
                          <h2 className="font-crimson text-[#3c2f27] text-base">FREE 3 DAY SHIPPING</h2>
                          <span className="font-roboto text-[#3c2f27] text-sm">on all India Orders</span>
                        </div>
                        <div className="order mt-6">
                          <h2 className="font-crimson text-[#3c2f27] text-base">ORDER BY:</h2>
                          <span className="font-roboto text-[#3c2f27] text-sm">5PM EST Monday, February 12</span>
                        </div>
                        <div className="order mt-7">
                          <h2 className="font-crimson text-[#3c2f27] text-base">RECEIVE BY:</h2>
                          <span className="font-roboto text-[#3c2f27] text-sm">5PM EST THRUSDAY, February 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist py-3">
                    {
                      wishlistdata?.find(v => v.productid == detail.id) ? (

                        <>
                          {
                            loading ? (
                              <Button variant="outline" className="text-sm w-full hover:text-[#3c2f27] bg-[#3c2f27] text-[#faf2ec] hover:bg-transparent border-[#3c2f27]  rounded-none h-12 uppercase">
                                <ClipLoader color="#3c2f27" size={20} />
                              </Button>

                            ) : (

                              <Button variant="outline" onClick={() => removefromwishlist(wishlistid.id)} className="text-sm w-full hover:text-[#3c2f27] bg-[#3c2f27] text-[#faf2ec] hover:bg-transparent border-[#3c2f27]  rounded-none h-12 ">Remove from Wishlist
                              </Button>
                            )
                          }

                        </>
                      ) : (
                        <>
                          {
                            loading ? (

                              <Button variant="outline" className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27]  rounded-none h-12 uppercase"><ClipLoader color="#3c2f27" size={20} />
                              </Button>
                            ) : (

                              <Button variant="outline" onClick={() => addtowishlist(detail.id, detail.sku)} className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27]  rounded-none h-12 ">Add To Wishlist
                              </Button>
                            )
                          }
                        </>

                      )
                    }

                  </div>

                  <div className="cart py-3">
                    {
                      adding ? (
                        <Button variant="outline" onClick={() => addtocart(detail.id, detail.sku, count)} className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27] rounded-none h-12 uppercase">
                          <ClipLoader color="#3c2f27" />
                        </Button>
                      ) : (

                        <Button variant="outline" onClick={() => addtocart(detail.id, detail.sku, count)} className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27] rounded-none h-12 ">Add To Bag
                        </Button>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="customer-reviews">
          <Reviews />
        </div>
      </div>
    </div>
  )
}