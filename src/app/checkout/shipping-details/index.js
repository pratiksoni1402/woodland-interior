'use client'
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React, { useState } from "react"
import { Button } from "./../../components/ui/button";
import { useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Switch } from "@/components/ui/switch"
import { Label } from "./../../components/ui/label"
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
export default function Shippingdetail({ params }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [animation, setAnimation] = useState(false);

  // Handle Toggle of Billing Details
  const handleSwitchToggle = () => {
    setShowForm(!showForm);
  }
  // End

  // Getting Countries list 
  const { isPending, data: countries, error } = useQuery({
    queryKey: ['countrylist'],
    queryFn: () =>
      axios.get('/api/get-countries')
        .then((response) => {
          return response.data.countriesList
        })
        .catch((error) => {
          console.log("Error while fetching Country list", error)
        })
  })
  // End

  // Placing Order
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setAnimation(true);
    axios.post('/api/place-order', data)
      .then((response) => {
        router.push(`/order-receipt/${response.data.Orders.id}`)
        return response.data.Orders
      })
      .catch((error) => {
        console.log("Error", error)
      })
      .finally(() => {
        setAnimation(false);
      })
  }
  // End

  return (
    <div className="shipping-details-form">
      <div className="heading text-left pb-3 font-crimson text-[#3c2f27] text-2xl">
        Shipping Detail
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shipping-detail-form">
          <input type="text" placeholder="First name" {...register("shipping_first_name", { required: true, maxLength: 80 })} />
          <input type="text" placeholder="Last name" {...register("shipping_last_name", { required: true, maxLength: 100 })} />
          <input type="text" placeholder="Address Line 1" {...register("shipping_address_one", { required: true })} />
          <input type="text" placeholder="Address Line 2" {...register("shipping_address_two", { required: true })} />
          <div className='grid grid-cols-3 sm:gap-5 gap-0'>
            <div className="sm:col-span-1 col-span-3">
              <select {...register("shipping_country", { required: true })}>
                <option value="" disabled>Select Country</option>
                {countries && countries.map((country) => (
                  <option value={country.name} key={country.id} >{country.name}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1 col-span-3">
              <input type="text" placeholder="State" {...register("shipping_state", { required: true })} />
            </div>
            <div className="sm:col-span-1 col-span-3">
              <input type="text" placeholder="City" {...register("shipping_city", { required: true })} />
            </div>
          </div>
          <input type="text" placeholder="Pincode" {...register("shipping_pincode", { required: true })} />
          <input type="text" placeholder="Landmark" {...register("shipping_landmark", { required: true })} />
          <input type="text" placeholder="Phonenumber" {...register("shipping_phone_number", { required: true })} />
        </div>
        <div>
          <div>
            <div>
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
                <div className="heading text-left pb-3 mt-4 font-crimson text-[#3c2f27] text-2xl">
                  Billing Details
                </div>
                <input type="text" placeholder="First name" {...register("billing_first_name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Last name" {...register("billing_last_name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Address Line 1" {...register("billing_address_one", { required: true })} />
                <input type="text" placeholder="Address Line 2" {...register("billing_address_two", { required: true })} />
                <div className='grid grid-cols-3 sm:gap-5 gap-0'>
                  <div className="sm:col-span-1 col-span-3">
                    <select {...register("billing_country", { required: true })}>
                      <option value="" disabled>Select Country</option>

                      {countries && countries.map((country) => (
                        <option value={country.name} key={country.id}>{country.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className='sm:col-span-1 col-span-3'>
                    <input type="text" placeholder="State" {...register("billing_state", { required: true })} />
                  </div>
                  <div className="sm:col-span-1 col-span-3">
                    <input type="text" placeholder="City" {...register("billing_city", { required: true })} />
                  </div>
                </div>
                <input type="text" placeholder="Pin Code" {...register("billing_pincode", { required: true })} />
                <input type="text" placeholder="Nearest Landmark" {...register("billing_landmark", { required: true })} />
                <input type="text" placeholder="Contact Number" {...register("billing_phone_number", { required: true })} />
              </div>
            )}
          </div>
        </div>
        <div className="payment-method">
          <div className="heading text-left pb-3 mt-4 font-crimson text-[#3c2f27] text-2xl">
            Payment Method
          </div>
          <div className="text-sm flex items-center font-roboto text-[#3c2f27] pb-1 ">
            <input {...register("payment_mode", { required: true })} type="radio" value="Debit Card" id="debit-card" />
            <label htmlFor="debit-card" className="radio-label flex flex-row items-center">
              <span className="custom-radio "></span>
              Debit Card
            </label>
          </div>

          <div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
            <input {...register("payment_mode", { required: true })} type="radio" value=" Credit Card" id="credit-card" />
            <label htmlFor="credit-card" className="radio-label flex flex-row items-center">
              <span className="custom-radio "></span>
              Credit Card
            </label>
          </div>

          <div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
            <input {...register("payment_mode", { required: true })} type="radio" value=" UPI" id="upi" />
            <label htmlFor="upi" className="radio-label flex flex-row items-center">
              <span className="custom-radio "></span>
              UPI
            </label>
          </div>

          <div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
            <input {...register("payment_mode", { required: true })} type="radio" value=" Net Banking" id="net-banking" />
            <label htmlFor="net-banking" className="radio-label flex flex-row items-center">
              <span className="custom-radio"></span>
              Net Banking
            </label>
          </div>

          <div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
            <input {...register("payment_mode", { required: true })} type="radio" value=" Cash on Delivery" id="cod" />
            <label htmlFor="cod" className="radio-label flex flex-row items-center">
              <span className="custom-radio "></span>
              Cash on Delivery
            </label>
          </div>

        </div>
        {animation ? (
          <Button type='submit' className='rounded-none w-full font-roboto bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] border border-[#3c2f27]' disabled={true}>
            <Loader2Icon className='animate-spin mr-1' />
            Place Order</Button>

        ) : (
          <Button type='submit' className='rounded-none w-full font-roboto bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] border border-[#3c2f27]'>Place Order</Button>
        )}

      </form>
    </div>
  )
}