'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './../../components/ui/button';
import axios from 'axios';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
export default function Profile() {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  // Get Countries
  const { isPending, data: countries, error } = useQuery({
    queryKey: ['list'],
    queryFn: () =>
      axios.get('/api/get-countries')
        .then((response) => {

          return response.data.countriesList
        })
        .catch((error) => {
          console.log('Error', error)
        })
  })
  // End

  // Get customer profile data based on session
  const { pending, data: customer, iserror } = useQuery({
    queryKey: ['profiledata'],
    queryFn: () =>
      axios.get('/api/get-customer-profile')
        .then((response) => {
          setValue('firstname', response.data.getprofile.firstname)
          setValue('lastname', response.data.getprofile.lastname)
          setValue('email', response.data.getprofile.email)
          setValue('addresslineone', response.data.getprofile.addresslineone)
          setValue('addresslinetwo', response.data.getprofile.addresslinetwo)
          setValue('country', response.data.getprofile.country)
          setValue('state', response.data.getprofile.state)
          setValue('city', response.data.getprofile.city)
          setValue('pincode', response.data.getprofile.pincode)
          setValue('phonenumber', response.data.getprofile.phonenumber)

          return response.data.getprofile
        })
        .catch((error) => {
          console.log('Error fetching profile', error)
          throw error;
        })
  })
  //End

  //Update user profile 
  const onSubmit = (data) => {
    setLoading(true);
    axios.put('/api/customer-profile', data)
      .then((response) => {
        toast.success("Profile Updated", {
          duration: 3000,
          style: {
            border: '1px solid #3c2f27',
            padding: '8px',
            color: '#faf2ec',
            backgroundColor: '#3c2f27',
          },
          iconTheme: {
            primary: '#faf2ec',
            secondary: '#3c2f27',
          },
        });
        queryClient.invalidateQueries('profiledata')
      })
      .catch((error) => {
        console.log("Error occured", error)
        toast.error("Error Occured while updating your profile");
      })
      .finally(() => {
        setLoading(false);
      })
  }
  // End


  return (
    <div className="user-profile-component ">
      <div className="content-wrapper">
        <Toaster />
        <div className="form-wrapper flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className=' lg:w-3/4 w-full '>

            <div className='field-wrapper'>
              <input type="text" placeholder="First name" {...register("firstname", { required: true, maxLength: 80 })} />
              {errors.firstname && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
            </div>

            <div className='field-wrapper'>
              <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
              {errors.lastname && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
            </div>

            <div className='field-wrapper'>
              <input type="text" placeholder="Address Line 1" {...register("addresslineone", { required: true })} />
              {errors.addresslineone && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
            </div>

            <div className='field-wrapper'>
              <input type="text" placeholder="Address Line 2" {...register("addresslinetwo", {})} />
              {errors.addresslinetwo && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
            </div>

            <div className='grid sm:grid-cols-3 grid-cols-1 gap-3 items-center'>
              <div className=''>
                <select {...register("country", { required: true })} className='w-full'>
                  <option value="" disabled>Select Country</option>
                  {
                    countries?.map((country) => (
                      <option key={country.id} value={country.name} >{country.name}</option>
                    ))
                  }
                </select>
                {errors.country && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
              </div>

              <div className='field-wrapper'>
                <input type="text" placeholder="State" {...register("state", { required: true })} />
                {errors.state && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
              </div>

              <div className='field-wrapper'>
                <input type="text" placeholder="City" {...register("city", { required: true })} />
                {errors.city && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
              </div>

            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='field-wrapper'>
                <input type="text" placeholder="Pincode" {...register("pincode", { required: true })} />
                {errors.city && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
              </div>

              <div className='field-wrapper'>
                <input type="text" placeholder="Phonenumber" {...register("phonenumber", { required: true })} />
                {errors.city && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
              </div>
            </div>
            <div className='text-center py-8'>
              {
                isLoading ? (
                  <Button type='submit' className="w-full rounded-none mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] flex text-center" disabled={true}>
                    <Loader2Icon className='animate-spin mr-1' />
                    Update Profile</Button>

                ) : (

                  <Button type='submit' className="w-full rounded-none mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center">Update Profile</Button>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}