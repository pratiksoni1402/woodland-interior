"use client"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { IndianRupee } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { BEDROOM_PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images"
import { useQuery } from "@tanstack/react-query"

export default function Product() {
   // const cartProducts = useCartStore((state) => state.products);
   // const productlist = useQuery({ queryKey: ['product'], queryFn: trail})
   const [products, setProducts] = useState([])
   // console.log(products.length)

   //Getting Data From API
   useEffect(() => {
      axios.get('/api/cart-items/get-data')
         .then((response) => {
            setProducts(response.data.cartdata)
            console.log(response.data.cartdata)
         })
   }, [])

   // Implementing Using TanStack 
   // const { isPending, data, error } = useQuery({
   //    queryKey: ['product'],
   //    queryFn: () =>
   //       axios.get('/api/cart-items/get-data')
   //          .then((response) => {
   //             setProducts(response.data.cartdata)
   //             console.log(response.data.cartdata)
   //          })
   // })
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

                        <div className='product py-10'>
                           <div className="grid grid-cols-12 gap-3">
                              <div className="xl:col-span-3 lg:col-span-3 sm:col-span-4 col-span-12">
                                 <Image src={`${BEDROOM_PRODUCT_MEDIA_URL}/${product.bedroomproduct.image}`} alt={product.name} height={250} width={250} className="sm:w-[250px] w-full"/>
                              </div>
                              <div className="xl:col-span-7 lg:col-span-7 sm:col-span-6 col-span-12">
                                 <div className='description'>
                                    <div className='title text-[#3c2f27] font-semibold font-crimson text-xl pb-3'>
                                       {product.bedroomproduct.name}
                                    </div>
                                    <div className='description text-[#4b4537] font-roboto text-sm pb-3'>
                                       {product.bedroomproduct.description}
                                    </div>
                                    <div className='constant  text-[#4b4537] font-roboto text-sm pb-3'>SKU: <span className='variation' >{product.sku}</span></div>
                                 </div>
                                 <div className="quantity py-3 ">
                                    <div className="pb-1 text-xs text-[#3c2f27] font-roboto">Quantity:</div>
                                    <div className="flex items-center">
                                       <Button variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">+</Button>
                                       <span className="px-7 border-[#3c2f27] border h-10 flex items-center border-r-0 border-l-0">{product.quantity}</span>
                                       <Button variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">-</Button>
                                    </div>
                                 </div>
                              </div>
                              <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 col-span-12">
                                 <div className='amount flex justify-end'>
                                    <div className='constant font-roboto text-[#3c2f27] font-semibold'><IndianRupee width={20} /></div>
                                    <div className='variation font-roboto text-[#3c2f27] font-semibold'>{product.bedroomproduct.price}</div>
                                 </div>
                                 {/* {hoveredProductId === product.id && (
                                    <div className='buttons absolute z-10 text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>

                                       <Link href={`/shop/bedroom/${product.productid}`} className='border hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto text-sm border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>View</Link>

                                       <Button className='border hover:bg-[#3c2f27] hover:text-[#faf2ec]  border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block font-roboto text-sm  rounded-none'>Move to wishlist</Button>

                                       <Button className='border border-[#3c2f27] py-2 font-roboto  hover:bg-[#3c2f27] hover:text-[#faf2ec] text-sm px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Remove from cart</Button>

                                    </div>
                                 )} */}
                                 {/* <div className="action-button">
                                    <Link href={`/shop/bedroom/${product.productid}`} className='border hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto text-sm border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>View</Link>

                                    <Button className='border hover:bg-[#3c2f27] hover:text-[#faf2ec]  border-[#3c2f27] py-2 px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block font-roboto text-sm  rounded-none'>Move to wishlist</Button>

                                    <Button className='border border-[#3c2f27] py-2 font-roboto  hover:bg-[#3c2f27] hover:text-[#faf2ec] text-sm px-[10px] text-[#3c2f27] my-[5px] bg-[#faf2ec] w-full inline-block rounded-none'>Remove from cart</Button>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                        {/* {hoveredProductId === product.id && <div className='backdrop absolute top-0 left-0 w-full h-full bg-[#faf2ec] opacity-70 backdrop-blur z-[1] pointer-events-none'></div>} */}

                     </div>
                  ))}
               </div>
               {
                  products.map((items) => {
                     return console.log(items.quantity)
                  })
               }
            </div>
         </div>
      </div>
   )
}