"use client"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import Image from "next/image";
import { Button } from "./../components/ui/button";
import { IndianRupee } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { PRODUCT_MEDIA_URL } from "../_lib/constants/images";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./../components/ui/alert-dialog";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
export default function Product() {
  const queryClient = useQueryClient();
  const [toCart, setToCart] = useState(null);
  const [itemDelete, setItemDelte] = useState(null);

  // Get all products from wishlist table
  const { isPending, data: allproducts, error } = useQuery({
    queryKey: ['productlist'],
    queryFn: () =>
      axios.get('/api/wishlist-items/get-data')
        .then((response) => {
          return response.data.getallproduct
        })
        .catch((error) => {
          console.log("Error Occured", error)
        })
  })
  // End

  if (allproducts?.length == 0) {
    return (
      <div className="w-full h-screen bg-[#faf2ec] mt-[-70px] flex-col font-crimson text-4xl text-[#3c2f27] flex items-center justify-center">
        <h1>Your Wishlist is empty</h1>
        <div className="shop-now text-base py-3 px-5 hover:bg-[#faf2ec] hover:text-[#3c2f27] hover:cursor-pointer bg-[#3c2f27] text-[#faf2ec] mt-5 border border-[#3c2f27]">
          <Link href='/shop/bedroom'>SHOP NOW</Link>
        </div>
      </div>
    )
  }


  // Delete product from wishlist table
  const deleteproduct = (id) => {
    setItemDelte(id);
    axios.post('/api/wishlist-items/delete-item', { id })
      .then((response) => {
        console.log('Product deleted successfully', response.data.deleteitem)
        queryClient.invalidateQueries('productlist');
      })
      .catch((error) => {
        console.log("Error Occured while deleting product", error)
      })
      .finally(() => {
        queryClient.invalidateQueries('productlist')
        setItemDelte(false);
      })
  }
  // End



  // Move product to Cart Table
  const movetocart = (productid, quantity, sku, id) => {
    setToCart(id)
    axios.post('/api/cart-items/from-wishlist', {
      productid,
      quantity,
      sku,
    })
      .then((response) => {
        deleteproduct(id);
      })
      .catch((error) => {
        console.log("Error", error)

      })
      .finally(() => {
        queryClient.invalidateQueries('productlist')
        setToCart(false)
      })
  }
  // End

  return (
    <div className="product-wrapper bg-[#faf2ec] pb-20">
      <div className="container">
        <div className="heading font-crimson text-4xl text-[#3c2f27] pt-10 pb-5  border-t">
          <h1>Your Wishlist</h1>
        </div>
        <div className='my-items border-t border-[#b2937e] '>
          <Toaster />
          {
            allproducts?.map((product) => (
              <div className='product py-10 border-b border-[#b2937e]' key={product.id}>
                <div className="grid grid-cols-12 gap-3">
                  <div className="xl:col-span-3 lg:col-span-3 sm:col-span-4 col-span-12">
                    <Image src={`${PRODUCT_MEDIA_URL}/${product.products.image}`} alt={product.products.name} height={250} width={250} className="sm:w-[250px] w-full" />
                  </div>
                  <div className="xl:col-span-7 lg:col-span-7 sm:col-span-6 col-span-12">
                    <div className='description'>
                      <div className='title text-[#3c2f27] font-semibold font-crimson text-xl pb-3'>
                        {product.products.name}
                      </div>
                      <div className='description text-[#4b4537] font-roboto text-sm pb-3'>
                        {product.products.description}
                      </div>
                      <div className='constant  text-[#4b4537] font-roboto text-sm pb-3'>SKU: <span className='variation' >{product.sku}</span></div>
                    </div>

                  </div>
                  <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 col-span-12 sm:block flex justify-between items-start">
                    <div className='amount flex justify-end items-center'>
                      <div className='constant font-roboto text-[#3c2f27] font-semibold'><IndianRupee width={20} /></div>
                      <div className='variation font-roboto text-[#3c2f27] font-semibold'>{product.products.price}</div>
                    </div>
                    <div className="actions flex flex-col justify-end sm:pt-20 pt-0">
                      <Link href={`/product-detail/${product.productid}`} className="text-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ">View Detail</Link>
                      {
                        toCart === product.id ? (
                          <div className="flex justify-center items-center">
                            <ClipLoader color="#3c2f27" size={20} css="border-radius: 50%" />
                          </div>
                        ) : (

                          <Button onClick={() => movetocart(product.productid, product.quantity, product.sku, product.id)} className='pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ' variant='#3c2f27' >Move to Cart</Button>
                        )
                      }

                      <AlertDialog className='rounded-none'>
                        <AlertDialogTrigger asChild>
                          <Button className='mt-[-10px] pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline bg-transparent hover:bg-transparent' variant="outline">Delete from wishlist</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Remove Product?</AlertDialogTitle>
                            <AlertDialogDescription className='font-roboto'>
                              Are you sure you want to delete this product from your wishlist!
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className='hover:duration-300 rounded-none bg-transparent text-[#3c2f27] border-[#3c2f27] hover:bg-[#b2937e] hover:border-[#b2937e] hover:text-[white]'>Cancel</AlertDialogCancel>
                            {
                              itemDelete === product.id ? (
                                <div className="flex justify-center items-center">
                                  <ClipLoader color="#3c2f27" size={20} css="border-radius: 50%" />
                                </div>
                              ) : (
                                <AlertDialogAction onClick={() => deleteproduct(product.id)} className='hover:duration-300 rounded-none bg-[#b2937e] text-white hover:bg-[#3c2f27]'>Delete</AlertDialogAction>
                              )
                            }
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}