'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserPlus } from 'lucide-react';
export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [Error, setError] =useState()

  const onSubmit = (data) => {
    if (data.password === data.cnfpassword) {


      axios.post('/api/register-user', data)
        .then(response => {
          console.log('Registration successful', response.data);
          toast.success("User Registration Successfull", {
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
          })
        })
        .catch(error => {
          console.error('Registration error', error);
          toast.error("User Registration Failed", {
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
          })

        });
    } else {
      setError("Password and Confirm Password does not match")
    }

  };


  return (
    <div className='user-registration'>
      <div className='heading text-center text-2xl text-[#54595f] py-5'>
        <h1> New Customer ? Signup Here </h1>
        <p className='text-base'>Register with Woodland Interiors</p>
      </div>
      <div className='register-form'>
        <Toaster />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-5'>
            <input type="text" placeholder="First name" {...register("firstname", { required: true })} />
            <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
          </div>
          <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          <input type="password" placeholder="Password" {...register("password", { required: true })} />
          <div className='error-occured text-xs text-red-600 font-roboto font-semibold mt-[-10px] mb-[10px]'>{Error}</div>
          <input type="password" placeholder="Confirm Password" {...register("cnfpassword", { required: true })} />
          <div className='error-occured text-xs text-red-600 font-roboto font-semibold mt-[-10px] mb-[10px]'>{Error}</div>
          <button type='submit' className="w-full p-3 mt-4 mb-3 border hover:border-[#b2937e] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2">Sign Up <UserPlus /></button>
        </form>
      </div>
    </div>
  )
}

