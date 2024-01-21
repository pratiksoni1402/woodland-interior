"use client"
import Image from "next/image";
import { Button } from "./../components/ui/button";
import { IndianRupee } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { BEDROOM_PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import { useQuery } from "@tanstack/react-query";
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
export default function Product() {

  const { isPending, data: allproducts, error } = useQuery({
    queryKey: ['productslist'],
    queryFn: () =>
      axios.get('/api/wishlist-items/get-data')
        .then((response) => {
          console.log(response.data.getallproduct)
          return response.data.getallproduct
        })
        .catch((error) => {
          console.log("Error Occured", error)
        })
  })


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

                  </div>
                  <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 col-span-12 sm:block flex justify-between items-start">
                    <div className='amount flex justify-end items-center'>
                      <div className='constant font-roboto text-[#3c2f27] font-semibold'><IndianRupee width={20} /></div>
                      <div className='variation font-roboto text-[#3c2f27] font-semibold'>{product.bedroomproduct.price}</div>
                    </div>
                    <div className="actions flex flex-col justify-end sm:pt-20 pt-0">
                      <Link href={`/shop/bedroom/${product.productid}`} className="text-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ">View Detail</Link>

                      <Button className='pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ' variant='#3c2f27' >Move to Cart</Button>

                      {/* <Button onClick={() => deletefromcart(product.id)} className='mt-[-10px] pr-0 justify-end font-roboto text-xs text-[#3c2f27] border-b border-transparent hover:underline ' variant='#3c2f27'>Delete from cart</Button> */}
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
                            <AlertDialogAction className='hover:duration-300 rounded-none bg-[#b2937e] text-white hover:bg-[#3c2f27]'>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {
          allproducts?.map((items) =>(
            console.log(items.sku)
          ))
        }
      </div>
    </div>
  )
}