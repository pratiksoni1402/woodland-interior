"use client"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from "./../../components/ui/button";
import { Toaster } from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
const Login = () => {
  const searchParam = useSearchParams();
  const value = searchParam.get('redirect');
  // console.log("Value", value);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    axios.post('/api/login-user', data)
      .then(response => {
        if (value === '/checkout') {
          router.push('/checkout')
        } else {
          router.push('/my-account')
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Invalid Email or Password', {
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
        })
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <div className='user-login-form bg-[#faf2ec] pb-20'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='lg:col-span-3 md:col-span-1 col-span-12'></div>
          <div className='lg:col-span-6 md:col-span-10 col-span-12'>
            <div className="user-login">
              <Toaster />
              <div className='heading text-center text-2xl text-[#3c2f27] font-crimson py-5'>
                <h1>Login</h1>
              </div>
              <div className='login-form border-[#b2937e] border bg-white'>
                <form onSubmit={handleSubmit(onSubmit)} className='m-5 bg-white'>

                  <div className='field-wrapper'>
                    <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
                  </div>

                  <div className='field-wrapper'>
                    <input type="password" placeholder="Password" {...register("password", { required: true })} />
                    {errors.password && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
                  </div>

                  {
                    loading ? (
                      <Button type='submit' className="w-full p-3 mt-4 mb-3 border rounded-none hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2" disabled={true}>
                        <Loader2Icon className='animate-spin mr-1' />
                        Login  <LogIn /></Button>
                    ) : (

                      <Button type='submit' className="w-full p-3 mt-4 mb-3 border rounded-none hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2">Login  <LogIn /></Button>
                    )
                  }

                </form>

                <div className='mt-10 mx-5'>
                  <Link href='/auth/register' className='w-full font-roboto p-3 mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center' >New User? Sign up here. </Link>
                </div>
              </div>
            </div>

          </div>
          <div className='lg:col-span-3 md:col-span-1 col-span-12'></div>
        </div>

      </div>
    </div>
  )
}

export default Login;

