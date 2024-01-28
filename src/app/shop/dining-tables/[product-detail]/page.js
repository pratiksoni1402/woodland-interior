"use client"
import { MoonLoader } from 'react-spinners';
import { IndianRupee } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Button } from "./../../../components/ui/button"
import { ShoppingBag } from 'lucide-react';
import Image from "next/image";
import axios from "axios"
import { DINE_TABLE_MEDIA_URL } from '@/app/_lib/constants/images';
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

export default function Detailpage({params}){
    const [productDetail, setProductDetail] = useState();
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState();

    // Getting Product Detail from API
    useEffect(()=>{
        axios.get(`/api/dine-page/${params['product-detail']}`)
        .then((response)=>{
            setProductDetail(response.data.product_detail)
        })
        .catch((error)=>{
            console.log("Error while fetching data", error)
        });
    }, [params])
    // End
    
    // Updating Price Based on Product Quantity
    useEffect(()=>{
        const price = productDetail?.price * count
        setPrice(price)
    }, [count, productDetail])
    // End
    
    const {isPending, data:dineproduct, error, refetch} = useQuery({
        queryKey:['dineitem'],
        enabled: false,
        queryFn: () => 
            axios.get('/api/cart-item/set-data', {
                id,

            })
    })
    // Display Spinner Until Data is Getting Ready
    if (!productDetail) {
        return <div className='loading bg-[#faf2ec]  h-screen w-full flex justify-center items-center'><MoonLoader color="#3c2f27" />
        </div>;
    }
    // End

    // Increasing Product Quantity
    const handleIncrement = () =>{
        if(count < 10){
            setCount((prevCount) => prevCount + 1)
        }else{
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
    const handleDecrement = () =>{
        if(count > 1){
            setCount((prevCount) => prevCount - 1)
        }
    }

    // Adding Product to cart Table
    

    // End
    return (
        <div className="product-detail-page bg-[#faf2ec]">
            <div className="container">
                <div className="product-wrapper py-10 border-t">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5 col-span-12">
                            <div className="left-section">
                                <div className="product-image">
                                    <Image src={`${DINE_TABLE_MEDIA_URL}/${productDetail?.image}`} width={600} height={600} alt={productDetail?.name} />
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-7 col-span-12">
                            <div className="right-section">
                                <div className="detail-wrapper">
                                    <div className="variation font-roboto text-sm text-[#3c2f27]">
                                        <span className="caption">SKU:</span><span className="value">{productDetail?.sku}</span>
                                    </div>
                                    <div className="product-name text-[#3c2f27] font-semibold font-crimson text-2xl">
                                        {productDetail?.name}
                                    </div>
                                    <div className="description text-[#3c2f27] text-sm py-2 font-roboto">
                                        {productDetail?.description}
                                    </div>
                                    <div className="pricing flex items-center  text-[#3c2f27] font-semibold font-crimson text-lg">
                                        <span> <IndianRupee width={18} /></span><span>{price}</span>
                                        <span className="text-xs px-1">(inclusive of all taxes)</span>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div className="quantity py-3 ">
                                        <div className="pb-1 text-xs text-[#3c2f27] font-roboto">Quantity:</div>
                                        <div>
                                            <Toaster/>
                                        </div>
                                        <div className="flex items-center">
                                            <Button onClick={handleIncrement} variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">+</Button>
                                            <span className="px-7 border-[#3c2f27] border h-10 flex items-center border-r-0 border-l-0">{count}</span>
                                            <Button onClick={handleDecrement} variant="outline" className="border-[#3c2f27] border rounded-none text-lg text-white bg-[#3c2f27]">-</Button>
                                        </div>
                                    </div>
                                    <div className="wishlist py-3">
                                        <Button variant="outline" className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27]  rounded-none h-12">ADD TO WISHLIST
                                            <span className="px-2"><Heart width={18} /></span>
                                        </Button>
                                    </div>
                                    <div className="cart py-3">
                                        <Button variant="outline" onClick={() => refetch(productDetail.id)} className="text-sm w-full text-[#3c2f27] hover:bg-[#3c2f27] hover:text-[#faf2ec] bg-transparent border-[#3c2f27] rounded-none h-12">ADD TO BAG
                                            <span className="px-2"><ShoppingBag width={18} /></span>
                                        </Button>
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