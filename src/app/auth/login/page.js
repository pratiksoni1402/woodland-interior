"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LogIn } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import Link from 'next/link';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    axios.post('/api/login-user', data)
      .then(response => {

      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      })
  }
  
  return (
    <div className='user-login-form bg-[#faf2ec] pb-20'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'></div>
          <div className='col-span-6'>
            <div className="user-login">
              <div className='heading text-center text-2xl text-[#3c2f27] font-crimson py-5'>
                <h1>Login</h1>
                <p className='text-base'>Old Customer? Sign in into your account.</p>
              </div>
              <div className='login-form border-[#3c2f27] border bg-white'>
                <form onSubmit={handleSubmit(onSubmit)} className='m-5 bg-white'>
                  <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                  <input type="password" placeholder="Password" {...register("password", { required: true })} />

                  {
                    loading ? (
                      <div className="flex justify-center py-2 mt-4 border border-[#3c2f27] items-center">
                        <ClipLoader color="#3c2f27" />
                      </div>
                    ) : (

                      <button type='submit' className="w-full p-3 mt-4 mb-3 border hover:border-[#b2937e] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2">Login  <LogIn /></button>
                    )
                  }

                </form>
                <div className='mt-16 mx-5'>
                  <Link href='/auth/register' className='w-full p-3 mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center' >New User? Sign up here. </Link>
                </div>
              </div>
            </div>

          </div>
          <div className='col-span-3'></div>
        </div>

      </div>
    </div>
  )
}

export default Login;

