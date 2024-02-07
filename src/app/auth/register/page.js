'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserPlus } from 'lucide-react';
export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [Error, setError] = useState()

  const onSubmit = (data) => {
    if (data.password === data.cnfpassword) {
      axios.post('/api/register-user', data)
        .then(response => {

        })
        .catch(error => {
          console.error('Registration error', error);
        });
    } else {
      setError("Password and Confirm Password does not match")
    }

  };


  return (
    <div className='user-registration-form-wrapper bg-[#faf2ec] pb-12'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'></div>
          <div className='col-span-6'>
            <div className='user-registration'>
              <div className='heading text-center text-2xl text-[#3c2f27] font-crimson py-5'>
                <h1> New Customer ? Signup Here </h1>
              </div>
              <div className='register-form'>
                <form onSubmit={handleSubmit(onSubmit)} className=' border border-[#3c2f27] bg-white p-5'>
                  <input type="text" placeholder="First name" {...register("firstname", { required: true })} />
                  <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
                  <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                  <input type="password" placeholder="Password" {...register("password", { required: true })} />
                  <div className='error-occured text-xs text-red-600 font-roboto font-semibold mt-[-10px] mb-[10px]'>{Error}</div>
                  <input type="password" placeholder="Confirm Password" {...register("cnfpassword", { required: true })} />
                  <div className='error-occured text-xs text-red-600 font-roboto font-semibold mt-[-10px] mb-[10px]'>{Error}</div>
                  <button type='submit' className="w-full p-3 mt-8 mb-0 border hover:border-[#b2937e] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2">Sign Up <UserPlus /></button>
                </form>
              </div>
            </div>
          </div>
          <div className='col-span-3'></div>
        </div>
      </div>
    </div>
  )
}

