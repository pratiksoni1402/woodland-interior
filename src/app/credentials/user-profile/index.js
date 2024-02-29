'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './../../components/ui/button';
import axios from 'axios';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners';
export default function Profile() {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const queryClient = useQueryClient();
  // Get Countries
  const { isPending, data:countries, error } = useQuery({
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
          console.log('Response from Profile Page', response.data.getprofile)
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
        .catch((error) =>{
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
          padding: '16px',
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
      .finally(() =>{
        setLoading(false);
      })
  }
  // End


  return (
    <div className="user-profile-component ">
      <div className="content-wrapper">
        <Toaster/>
        <div className="form-wrapper flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className=' lg:w-3/4 w-full '>
            <input type="text" placeholder="First name" {...register("firstname", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="text" placeholder="Address Line 1" {...register("addresslineone", { required: true })} />
            <input type="text" placeholder="Address Line 2" {...register("addresslinetwo", {})} />
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-3'>
              <select {...register("country", { required: true })} >
                <option value="" disabled>Select Country</option>
                {
                  countries?.map((country) => (
                    <option key={country.id} value={country.name} >{country.name}</option>
                  ))
                }
              </select>

              <input type="text" placeholder="State" {...register("state", { required: true })} />
              <input type="text" placeholder="City" {...register("city", { required: true })} />

            </div>
            <div className='grid grid-cols-2 gap-3'>
              <input type="text" placeholder="Pincode" {...register("pincode", { required: true })} />
              <input type="text" placeholder="Phonenumber" {...register("phonenumber", { required: true })} />
            </div>
            <div className='text-center py-8'>
            {
                    isLoading ? (
                      <div className="flex justify-center py-2 mt-4 border border-[#3c2f27] items-center">
                        <ClipLoader color="#3c2f27" />
                      </div>
                    ) : (

                      <button type='submit' className="w-full p-3 mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center">Update Profile</button>
                    )
                  }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}