"use client"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { IndianRupee } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import './style.css'
import useCartStore from "../../store/cartStore"
export default function Product() {
   const cartProducts = useCartStore((state) => state.products);
   const [products, setProducts] = useState([])

   useEffect(() => {
      axios.post(`/api/cart-items`, {
         products: cartProducts
      })
         .then((response) => {
            setProducts(response.data.products)
            console.log("Got Data from API", response.data.products)
         })
         .catch((error) => {
            console.log("Error Occured", error)
         })
   }, [cartProducts])

   const [isHovered, setIsHovered] = useState(false);
   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   return (
      <div className="product-wrapper ">
         <div className="grid grid-col-1">
            <div className="col">
               <div className='my-items'>
                  <div className='product-wrapper border-t border-b border-[#b2937e] mb-10 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                     {isHovered && (
                        <div className='buttons absolute z-10 text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>

                           <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>View</Button>
                           <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Move to wishlist</Button>
                           <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Remove from cart</Button>

                        </div>
                     )}
                     {
                        products.map((product) => {

                           <div className='product py-10' key={product.id}>
                              <div className="grid grid-cols-12 gap-3">
                                 <div className="xl:col-span-3 sm:col-span-2 col-span-12">
                                    {product.image}
                                 </div>
                                 <div className="xl:col-span-7 sm:col-span-8 col-span-12">
                                    <div className='description'>
                                       <div className='title'>
                                          {product.name}
                                       </div>
                                       <div className='description'>{product.description}</div>
                                       <div className='constant'>SKU: <span className='variation' >{product.sku}</span></div>
                                    </div>
                                 </div>
                                 <div className="sm:col-span-2 col-span-12">
                                    <div className='amount flex justify-end'>
                                       <div className='constant'><IndianRupee /></div>
                                       <div className='variation'>{product.price}</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        })
                     }

                     {isHovered && <div className='backdrop absolute top-0 left-0 w-full h-full bg-[#faf2ec] opacity-70 backdrop-blur z-[1] pointer-events-none'></div>}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}