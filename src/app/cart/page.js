"use client"
import Image from "next/image";
import { Button } from "./../components/ui/button";
import { IndianRupee } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
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
import toast from "react-hot-toast";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
export default function Cart() {
  let totalPrice = 0;
  let subtotal = 0;
  let taxrate = 9;
  let taxamount = (totalPrice * taxrate) / 100
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  //Get All Products from Cart Table
  const { isPending, data: totalproducts, error } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axios.get('/api/cart-items/get-data')
        .then((response) => {
          return response.data.cartdata
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          throw error;
        })
  });
  // End

  // Delete Product From Cart Table
  function cnfdelete(id) {
    setLoading(true);
    axios.post('/api/cart-items/delete-item', { id })
      .then((response) => {
        
      })
      .catch((error) => {
        console.log("Error occured", error)
      })
      .finally(() => {
        setLoading(false);
        queryClient.invalidateQueries('product');
      })
  }
  // End

  // Move to wishlist
  const movetowishlist = (productid, sku, id, quantity) => {
    axios.post('/api/wishlist-items/from-cart', {
      productid,
      sku,
      quantity,
    })
      .then((response) => {
        cnfdelete(id)
      })
      .catch((error) => {

      })
      .finally(() => {
        queryClient.invalidateQueries('product')
      })
  }
  // End

  // Increase Quantity
  const increasequantity = (quantity, id) => {
    if (quantity < 10) {
      const updatequantity = quantity + 1
      axios.put('/api/update-quantity', {
        quantity: updatequantity,
        id
      })
        .then((response) => {
          queryClient.invalidateQueries('product')
        })
        .catch((error) => {
          console.log("Error while updating quantity", error)
  
        })
    } else {
      toast.error("Only 10 Prodcuts are allowed to buy")
    }
  }
  // End

  // Decrease Quantity
  const decreasequantity = (quantity, id) => {
    if (quantity > 1) {
      const changequantity = quantity - 1;
      axios.put('/api/update-quantity', {
        quantity: changequantity,
        id,
      })
        .then((response) => {
          queryClient.invalidateQueries('product')
        })
        .catch((error) => {
          console.log("Error", error)
        })
    } else {
      toast.error('Minimum quantity should be 1')
    }
  }
  return (
    <div className="cart-items bg-[#faf2ec] py-10">
      <div className="container">
        <div className="heading pb-10 text-4xl font-crimson text-[#3c2f27]">
          Items in your cart
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <div className="product-wrapper">
              <div className="grid grid-col-1">
                <div className="col">
                  <div className='my-items border-t border-[#b2937e] '>
                    <Toaster />
                    {totalproducts?.map((product) => (
                      totalPrice += product.products.price * product.quantity,
                      taxamount = (totalPrice * 9) /100,
                      subtotal = totalPrice - (taxamount * 2),
                      

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
                            <div className="quantity py-3 ">
                              <div className="pb-1 text-xs text-[#3c2f27] font-roboto">Quantity:</div>
                              <div className="flex items-center">
                                <Button variant="outline" onClick={() => increasequantity(product.quantity, product.id)} className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">+</Button>
                                <span className="px-7 border-[#3c2f27] border h-10 flex items-center border-r-0 border-l-0">{product.quantity}</span>
                                <Button variant="outline" onClick={() => decreasequantity(product.quantity, product.id)} className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">-</Button>
                              </div>
                            </div>
                          </div>
                          <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 col-span-12">
                            <div className='amount flex justify-end'>
                              <div className='constant font-roboto text-[#3c2f27] font-semibold'><IndianRupee width={20} /></div>
                              <div className='variation font-roboto text-[#3c2f27] font-semibold'>{product.products.price * product.quantity}</div>
                            </div>
                            <div className="actions flex flex-col justify-end pt-20">
                              <Link href={`/product-detail/${product.productid}`} className="text-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ">View Detail</Link>

                              <Button onClick={() => movetowishlist(product.productid, product.sku, product.id, product.quantity)} className='pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ' variant='#3c2f27' >Move to Wishlist</Button>

                              <AlertDialog className='rounded-none'>
                                <AlertDialogTrigger asChild>
                                  <Button className='mt-[-10px] pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline bg-transparent hover:bg-transparent' variant="outline">Delete from cart</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Remove Product?</AlertDialogTitle>
                                    <AlertDialogDescription className='font-roboto'>
                                      Are you sure you want to delete this product from your cart!
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel className='hover:duration-300 rounded-none bg-transparent text-[#3c2f27] border-[#3c2f27] hover:bg-[#b2937e] hover:border-[#b2937e] hover:text-[white]'>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => cnfdelete(product.id)} className='hover:duration-300 rounded-none bg-[#b2937e] text-white hover:bg-[#3c2f27]'>
                                      {
                                        loading ? (
                                          <ClipLoader color="#3c2f27" />
                                        ) : (
                                          'Delete'
                                        )
                                      }
                                    </AlertDialogAction>
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
            </div>
          </div>
          <div className="col-span-3">
            <div className="order-summary-wrapper sticky top-20">
              <div className="wrapper border border-[#b2937e] p-4">
                <div className="heading font-roboto border-b border-[#b2937e] text-center py-5 text-[#3c2f27] font-semibold">
                  Summary
                </div>
                <div className="calculation">
                  <div className="sub-total pt-3 flex justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Sub-Total:</div>
                    <div>{subtotal}</div>
                  </div>
                  <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Central GST:</div>
                    <div>{taxamount}</div>
                  </div>
                  <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                    <div>State GST:</div>
                    <div>{taxamount}</div>
                  </div>
                  <div className="total-price flex font-semibold pt-3 pb-5 border-t border-[#b2937e] justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Total:</div>
                    <div>{totalPrice}</div>
                  </div>
                </div>
                <div className="place-order text-center w-full ">
                  <Link href='/checkout' className="w-full block p-3 bg-[#b2937e] rounded-none text-[#3c2f27] hover:text-white hover:bg-[#3c2f27]">Proceed To Checkout</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}