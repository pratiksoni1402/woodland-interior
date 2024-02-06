"use client"
import axios from "axios";
import { MoonLoader } from 'react-spinners';
import { ClipLoader } from "react-spinners";
import { IndianRupee } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Button } from "./../../components/ui/button";
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

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

  // Cart Table Data
  const { pending: onhold, data: shoppingcart, error: haveError } = useQuery({
    queryKey: ['bagdata'],
    queryFn: () =>
      axios.get('/api/cart-items/get-data')
        .then((response) => {
          console.log(response.data.cartdata)
          return response.data.cartdata
        })
        .catch((error) => {
          console.log("Error", error)
        })
  });

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
    return <div className='loading h-screen bg-[#faf2ec] w-full flex justify-center items-center'><MoonLoader color="#3c2f27" />
    </div>;
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
    axios.post('/api/wishlist-items/delete-item', { id })
      .then((response) => {
        queryClient.invalidateQueries('wishlistcount')
      })
      .catch((error) => {
        console.log("Error", error)
      })
  }
  // End

  return (
    <div className="product-detail-page bg-[#faf2ec]">
      <div className="container">
        <div className="product-wrapper py-10 border-t">
          <div className="breadcrumb">
          </div>
          <div className="grid grid-cols-12 gap-7">
            <Toaster />
            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5 col-span-12">
              <div className="left-section">
                <div className="product-image  relative h-[600px]">
                  <LazyImage src={`${PRODUCT_MEDIA_URL}/${detail.image}`} alt={detail.name} width={527} height={527} />
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
                  <div className="wishlist py-3">
                    {
                      wishlistdata?.find(v => v.productid == detail.id) ? (
                        <>

                          {
                            loading ? (
                              <div className="flex justify-center">
                                <ClipLoader color="#3c2f27" />
                              </div>
                            ) : (

                              <Button variant="outline" onClick={() => removefromwishlist(detail.id)} className="text-sm w-full hover:text-[#3c2f27] bg-[#3c2f27] text-[#faf2ec] hover:bg-transparent border-[#3c2f27]  rounded-none h-12 uppercase">Remove from Wishlist
                              </Button>
                            )
                          }

                        </>
                      ) : (
                        <>
                          {
                            loading ? (
                              <div className="flex justify-center">
                                <ClipLoader color="#3c2f27" />
                              </div>
                            ) : (

                              <Button variant="outline" onClick={() => addtowishlist(detail.id, detail.sku)} className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27]  rounded-none h-12 uppercase">Add To Wishlist
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

                        <div className="flex justify-center">
                          <ClipLoader color="#3c2f27" />
                        </div>

                      ) : (

                        <Button variant="outline" onClick={() => addtocart(detail.id, detail.sku, count)} className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27] rounded-none h-12 uppercase">Add To Bag
                        </Button>
                      )
                    }
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