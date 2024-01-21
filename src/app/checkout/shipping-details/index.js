'use client'
import React from "react"
import { Button } from "./../../../components/ui/button";
import { useForm } from 'react-hook-form';
export default function Shippingdetail() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);
   return (
      <div className="shipping-details-form">
         <div className="heading text-left border-b pb-3 font-crimson text-[#3c2f27] text-2xl">
            Shipping and Billing Detail
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Address Line 1" {...register("Address Line 1", { required: true })} />
            <input type="text" placeholder="Address Line 2" {...register("Address Line 2", { required: true })} />
            <div className='grid grid-cols-3 gap-5'>
               <select {...register("Country", { required: true })}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
               </select>
               <select {...register("State", { required: true })}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
               </select>
               <select {...register("City", { required: true })}>
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
               </select>
            </div>
            <input type="text" placeholder="Pin Code" {...register("Pin Code", { required: true })} />
            <input type="text" placeholder="Nearest Landmark" {...register("Nearest Landmark", { required: true })} />
            <input type="text" placeholder="Contact Number" {...register("Contact Number", { required: true })} />

            <Button type='submit' className='rounded-none w-full font-roboto h-12 bg-[#b2937e] hover:bg-[#3c2f27]'>Place Order</Button>
         </form>
      </div>
   )
}