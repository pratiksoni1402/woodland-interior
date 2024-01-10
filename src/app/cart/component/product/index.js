"use client"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { IndianRupee } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import './style.css'
import useCartStore from "../../store/cartStore"
import { BEDROOM_PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images"
export default function Product() {
   const cartProducts = useCartStore((state) => state.products);
   const [products, setProducts] = useState([])

   // Getting Data From API
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
   // End

   // Showing Option on Product Hover 
   const [hoveredProductId, setHoveredProductId] = useState(null);
   const handleMouseEnter = (productId) => {
      setHoveredProductId(productId);
   };

   const handleMouseLeave = () => {
      setHoveredProductId(null);
   };
   // End


   return (
      <div className="product-wrapper ">
         <div className="grid grid-col-1">
            <div className="col">
               <div className='my-items border-t border-[#b2937e] '>
                  {products.map((product) => (
                     <div
                        className='product-wrapper border-b border-[#b2937e] relative'
                        onMouseEnter={() => handleMouseEnter(product.id)}
                        onMouseLeave={handleMouseLeave}
                        key={product.id}
                     >
                        {hoveredProductId === product.id && (
                           <div className='buttons absolute z-10 text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                              <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>View</Button>
                              <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Move to wishlist</Button>
                              <Button className='border border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Remove from cart</Button>
                           </div>
                        )}
                        <div className='product py-10'>
                           <div className="grid grid-cols-12 gap-3">
                              <div className="xl:col-span-3 sm:col-span-2 col-span-12">
                                 <Image src={`${BEDROOM_PRODUCT_MEDIA_URL}/${product.image}`} alt={product.name} height={250} width={250} />
                              </div>
                              <div className="xl:col-span-7 sm:col-span-8 col-span-12">
                                 <div className='description'>
                                    <div className='title text-[#3c2f27] font-semibold font-crimson text-xl pb-3'>
                                       {product.name}
                                    </div>
                                    <div className='description text-[#4b4537] font-roboto text-sm pb-3'>
                                       {product.description}
                                    </div>
                                    <div className='constant  text-[#4b4537] font-roboto text-sm pb-3'>SKU: <span className='variation' >{product.sku}</span></div>
                                 </div>
                              </div>
                              <div className="sm:col-span-2 col-span-12">
                                 <div className='amount flex justify-end'>
                                    <div className='constant'><IndianRupee width={20} /></div>
                                    <div className='variation'>{product.price}</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {hoveredProductId === product.id && <div className='backdrop absolute top-0 left-0 w-full h-full bg-[#faf2ec] opacity-70 backdrop-blur z-[1] pointer-events-none'></div>}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}