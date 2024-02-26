'use client'
import axios from 'axios';
import { Button } from './../../components/ui/button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
export default function Updatepassword() {
  const [isLoading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Password and Confirm Password should be same", {
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
    } else if (data.newPassword === data.confirmPassword) {
      setLoading(true);
      axios.post('/api/update-password', data)
        .then((response) => {
          toast.success("Password Changed Successfully");
          return response.data.updatePassword
        })
        .catch((error) => {
          console.log('Error', error)
        })
        .finally(() => {
          setLoading(false);
        })
    }

  }


  return (
    <div className='change-password-form' style={{minHeight:'500px'}}>
      <div className='form-wrapper  flex justify-center'>
        <Toaster/>
        <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
          <input type="password" placeholder="Old Password" {...register("oldPassword", { required: true, maxLength: 20 })} />
          <input type="password" placeholder="New Password" {...register("newPassword", { required: true, maxLength: 20 })} />
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, maxLength: 20 })} />
          {
            isLoading ? (
              <Button type='submit' className='w-full uppercase mt-5 mb-10 bg-transparent border-[#3c2f27] border hover:text-[#faf2ec] font-roboto rounded-none bg-[#3c2f27] text-[#faf2ec]'>
                 <ClipLoader color="#3c2f27" />
              </Button>
            ) : (
              <Button type='submit' className='w-full uppercase mt-5 mb-10 bg-transparent border-[#3c2f27] border font-roboto rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] text-[#faf2ec]'>update password</Button>
            )
          }


        </form>
      </div>
    </div>
  );
}