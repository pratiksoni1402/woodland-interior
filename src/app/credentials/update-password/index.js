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
      toast.error("Password and Confirm Password must be same", {
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
      })
    } else if (data.newPassword === data.confirmPassword) {
      setLoading(true);
      axios.post('/api/update-password', data)
        .then((response) => {
          if (response.data.messageSuccess) {
            toast.success(response.data.messageSuccess, {
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
            })
          } else if (response.data.message) {
            toast.error(response.data.message, {
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
            })
          }
          // toast.success(response.data.message);
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
    <div className='change-password-form' style={{ minHeight: '500px' }}>
      <div className='form-wrapper  flex justify-center'>
        <Toaster />
        <form onSubmit={handleSubmit(onSubmit)} className='lg:w-3/4 w-full'>
          <input type="password" placeholder="Old Password" {...register("oldPassword", { required: true, maxLength: 20 })} />
          <input type="password" placeholder="New Password" {...register("newPassword", { required: true, maxLength: 20 })} />
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, maxLength: 20 })} />
          {
            isLoading ? (
              <div className="flex justify-center py-2 mt-4 border border-[#3c2f27] items-center">
                <ClipLoader color="#3c2f27" />
              </div>
            ) : (

              <button type='submit' className="w-full p-3 mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center">Update Password</button>
            )
          }
        </form>
      </div>
    </div>
  );
}