"use client"
import Image from "next/image";
import { Button } from "./../../../components/ui/button";
import { IndianRupee } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { BEDROOM_PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
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
} from "./../../../components/ui/alert-dialog";
import toast from "react-hot-toast";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
export default function Product() {
   const [loading, setLoading] = useState(false);
   const queryClient = useQueryClient();

   //Get All Products
   const { isPending, data: totalproducts, error } = useQuery({
      queryKey: ['product'],
      queryFn: () =>
         axios.get('/api/cart-items/get-data')
            .then((response) => {
               // console.log(response.data.cartdata)
               return response.data.cartdata

            })
            .catch((error) => {
               console.error("Error fetching data:", error);
               throw error;
            })
   });
   // End

   // Delete Product From Cart
   function cnfdelete(id) {
      setLoading(true);
      axios.post('/api/cart-items/delete-item', { id })
         .then((response) => {
            queryClient.invalidateQueries('product');
            console.log("Product deleted successfully", response.data.deleteproduct)
            toast.success('Product deleted successfully', {
               duration: 8000,
               style: {
                  border: '1px solid #3c2f27',
                  padding: '16px',
                  color: '#faf2ec',
                  backgroundColor: '#3c2f27',
                  width: '500px',
               },
               iconTheme: {
                  primary: '#faf2ec',
                  secondary: '#3c2f27',
               },
            })
         })
         .catch((error) => {
            console.log("Error occured", error)
         })
         .finally(() => {
            setLoading(false);
         })
   }
   // End





   return (
      <div className="product-wrapper ">
         <div className="grid grid-col-1">
            <div className="col">
               <div className='my-items border-t border-[#b2937e] '>
                  <Toaster />
                  {totalproducts?.map((product) => (

                     <div className='product py-10 border-b border-[#b2937e]' key={product.id}>
                        <div className="grid grid-cols-12 gap-3">
                           <div className="xl:col-span-3 lg:col-span-3 sm:col-span-4 col-span-12">
                              <Image src={`${BEDROOM_PRODUCT_MEDIA_URL}/${product.bedroomproduct.image}`} alt={product.bedroomproduct.name} height={250} width={250} className="sm:w-[250px] w-full" />
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
                              <div className="actions flex flex-col justify-end pt-20">
                                 <Link href={`/shop/bedroom/${product.productid}`} className="text-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ">View Detail</Link>

                                 <Button className='pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ' variant='#3c2f27' >Move to Wishlist</Button>

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
   )
}