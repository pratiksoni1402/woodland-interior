'use client'
import React, { useState } from "react"
import { Button } from "./../../components/ui/button";
import { useForm } from 'react-hook-form';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Switch } from "@/components/ui/switch"
import { Label } from "./../../components/ui/label"

export default function Shippingdetail() {
   const [showForm, setShowForm] = useState(false);

   const handleSwitchToggle = () => {
      setShowForm(!showForm);
   }
   const { isPending, data: countries, error } = useQuery({
      queryKey: ['countrylist'],
      queryFn: () =>
         axios.get('/api/get-countries')
            .then((response) => {
               console.log(response.data.countriesList)
               return response.data.countriesList
            })
            .catch((error) => {
               console.log("Error while fetching Country list", error)
            })
   })
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);
   return (
      <div className="shipping-details-form">
         <div className="heading text-left border-b pb-3 font-crimson text-[#3c2f27] text-2xl">
            Shipping Detail
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shipping-detail-form">
               <input type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
               <input type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
               <input type="text" placeholder="Address Line 1" {...register("addressLineOne", { required: true })} />
               <input type="text" placeholder="Address Line 2" {...register("addressLineTwo", { required: true })} />
               <div className='grid grid-cols-3 gap-5'>
                  <select {...register("Country", { required: true })}>
                     {countries && countries.map((country) => (
                        <option value={country.name} key={country.id} selected={country.name === 'India'}>{country.name}</option>
                     ))}

                  </select>
                  <input type="text" placeholder="State" {...register("state", { required: true })} />
                  <input type="text" placeholder="City" {...register("city", { required: true })} />

               </div>
               <input type="text" placeholder="Pin Code" {...register("pinCode", { required: true })} />
               <input type="text" placeholder="Nearest Landmark" {...register("nearestLandmark", { required: true })} />
               <input type="text" placeholder="Contact Number" {...register("contactNumber", { required: true })} />
            </div>
            <div>
               <div>
                  <div className="">
                     <div>
                        <Label htmlFor="" className='text-sm font-roboto text-[#3c2f27]'>Is Billing detail Same as Shipping detail ?</Label>
                     </div>
                     <div className="flex items-center font-roboto text-sm py-3 text-[#3c2f27]">
                        <span>Yes</span>
                        <Switch id="airplane-mode" className='mx-2' checked={showForm} onClick={handleSwitchToggle} />
                        <span>No</span>
                     </div>
                  </div>

                  {showForm && (
                     <div className="billing-detail-form">
                        <div className="heading text-left border-b pb-3 mt-4 font-crimson text-[#3c2f27] text-2xl">
                           Billing Details
                        </div>
                        <input type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
                        <input type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="Address Line 1" {...register("addressLineOne", { required: true })} />
                        <input type="text" placeholder="Address Line 2" {...register("addressLineTwo", { required: true })} />
                        <div className='grid grid-cols-3 gap-5'>
                           <select {...register("Country", { required: true })}>
                              {/* {countries && countries.map((country) => (
                                 <option value={country.name} key={country.id}>{country.name}</option>
                              ))} */}

                           </select>
                           <input type="text" placeholder="State" {...register("state", { required: true })} />
                           <input type="text" placeholder="City" {...register("city", { required: true })} />

                        </div>
                        <input type="text" placeholder="Pin Code" {...register("pinCode", { required: true })} />
                        <input type="text" placeholder="Nearest Landmark" {...register("nearestLandmark", { required: true })} />
                        <input type="text" placeholder="Contact Number" {...register("contactNumber", { required: true })} />
                     </div>
                  )}
               </div>
            </div>
            <div className="payment-method">

            </div>

            <Button type='submit' className='rounded-none w-full font-roboto h-12 bg-[#b2937e] hover:bg-[#3c2f27]'>Place Order</Button>
         </form>
      </div>
   )
}