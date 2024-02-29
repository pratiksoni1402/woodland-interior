"use client"
import Image from "next/image";
import { Button } from "./../ui/button";
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
} from "./../ui/alert-dialog";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
export default function Cart() {
  let totalPrice = 0;
  let subtotal = 0;
  let taxrate = 9;
  let taxamount = (totalPrice * taxrate) / 100
  const [loading, setLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(null);
  const [descreaseLoader, setDecreaseLoader] = useState(null);
  const [towishlist, setToWishlist] = useState(null);
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

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

  if (totalproducts?.length == 0) {
    return (
      <div className="w-full h-screen bg-[#faf2ec] mt-[-70px] flex-col font-crimson text-4xl text-[#3c2f27] flex items-center justify-center">
        <h1 className="sm:text-4xl text-2x">Your Cart is empty</h1>
        <div className="shop-now text-base py-3 px-5 hover:bg-[#faf2ec] hover:text-[#3c2f27] hover:cursor-pointer bg-[#3c2f27] text-[#faf2ec] mt-5 border border-[#3c2f27]">
          <Link href='/shop/bedroom'>SHOP NOW</Link>
        </div>
      </div>
    )
  }

  if (!totalproducts){
    return(
      <div className='loading h-screen bg-[#faf2ec] w-full flex justify-center items-center'><MoonLoader color="#3c2f27" />
      </div>
    )
  }

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
    setToWishlist(id);
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
        setToWishlist(false);
      })
  }
  // End

  // Increase Quantity
  const increasequantity = (quantity, id) => {
    if (quantity < 10) {
      const updatequantity = quantity + 1
      setProductLoading(id)
      axios.put('/api/cart-items/update-quantity', {
        quantity: updatequantity,
        id
      })
        .then((response) => {
          queryClient.invalidateQueries('product')
        })
        .catch((error) => {
          console.log("Error while updating quantity", error)

        })
        .finally(() => {
          setProductLoading(false)
        })
    } else {
      toast.error("Only 10 Prodcuts are allowed to buy", {
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
    }
  }
  // End

  // Decrease Quantity
  const decreasequantity = (quantity, id) => {
    if (quantity > 1) {
      const changequantity = quantity - 1;
      setDecreaseLoader(id)
      axios.put('/api/cart-items/update-quantity', {
        quantity: changequantity,
        id,
      })
        .then((response) => {
          queryClient.invalidateQueries('product')
        })
        .catch((error) => {
          console.log("Error", error)
        })
        .finally(() => {
          setDecreaseLoader(false)
        })
    } else {
      toast.error('Minimum quantity should be 1', {
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
    }
  }
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true);
      router.push('/checkout');
    }, 1000); // Show loader for 1 second
  };
  return (
    <div className="cart-items bg-[#faf2ec] py-20">
      <div className="container">
        <div className="heading pb-3 text-4xl font-crimson border-b border-[#b2937e]  text-[#3c2f27]">
          Items in your cart
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-9 col-span-12">
            <div className="product-wrapper">
              <div className="grid grid-col-1">
                <div className="col">
                  <div className='my-items'>
                    <Toaster />
                    {totalproducts?.map((product) => (
                      totalPrice += product.products.price * product.quantity,
                      taxamount = (totalPrice * 9) / 100,
                      subtotal = totalPrice - (taxamount * 2),
                      <div className='product py-10 border-b border-[#b2937e]' key={product.id}>
                        <div className="grid grid-cols-12 gap-3">
                          <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12">
                            <Image src={`${PRODUCT_MEDIA_URL}/${product.products.image}`} alt={product.products.name} height={250} width={250} className="sm:w-[250px] w-full" />
                          </div>
                          <div className="xl:col-span-7 lg:col-span-7 md:col-span-6 col-span-12">
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
                                {
                                  productLoading === product.id ? (
                                    <Button variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]"><ClipLoader color="#3c2f27" size={20} /></Button>
                                  ) : (

                                    <Button variant="outline" onClick={() => increasequantity(product.quantity, product.id)} className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">+</Button>
                                  )
                                }
                                <span className="px-7 border-[#3c2f27] border h-10 flex items-center border-r-0 border-l-0">{product.quantity}</span>
                                {
                                  descreaseLoader === product.id ? (
                                    <Button variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]"><ClipLoader color="#3c2f27" size={20} /></Button>
                                  ) : (
                                    <Button variant="outline" onClick={() => decreasequantity(product.quantity, product.id)} className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">-</Button>
                                  )
                                }
                              </div>
                            </div>
                          </div>
                          <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-12">
                            <div className='amount flex md:justify-end justify-start'>
                              <div className='constant font-roboto text-[#3c2f27] font-semibold'><IndianRupee width={17} /></div>
                              <div className='variation font-roboto text-[#3c2f27] font-semibold'>{product.products.price * product.quantity}</div>
                            </div>
                            <div className="actions flex flex-col justify-end md:pt-20 pt-5">
                              <Link href={`/product-detail/${product.productid}`} className="md:text-end text-left font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ">View Detail</Link>

                              {
                                towishlist === product.id ? (
                                  <div className="flex justify-center">
                                    <ClipLoader color="#3c2f27" size={20} css="border-radius: 50%" />
                                  </div>
                                ) : (

                                  <Button onClick={() => movetowishlist(product.productid, product.sku, product.id, product.quantity)} className='px-0 md:justify-end justify-start font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ' variant='#3c2f27' >Move to Wishlist</Button>
                                )
                              }

                              <AlertDialog className='rounded-none'>
                                <AlertDialogTrigger asChild>
                                  <Button className='mt-[-10px] md:justify-end justify-start font-roboto text-xs text-[#3c2f27] px-0  border-b border-transparent hover:underline bg-transparent hover:bg-transparent' variant="outline">Delete from cart</Button>
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
                                          <ClipLoader color="#3c2f27" size={20} css="border-radius: 50%" />
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
          <div className="lg:col-span-3 col-span-12">
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
                  {
                    isLoading ? (
                      <div className="flex justify-center py-2 mt-4 border border-[#3c2f27] items-center">
                        <ClipLoader color="#3c2f27" />
                      </div>
                    ) : (

                      <button type='submit' onClick={handleClick} className="w-full p-3 mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center">Proceed to Checkout</button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}