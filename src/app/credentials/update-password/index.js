'use client'
import axios from 'axios';
import { Button } from './../../components/ui/button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';
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

          <div className='field-wrapper'>
            <input type="password" placeholder="Old Password" {...register("oldPassword", { required: true, maxLength: 20 })} />
            {errors.oldPassword && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
          </div>

          <div className='field-wrapper'>
            <input type="password" placeholder="New Password" {...register("newPassword", { required: true, maxLength: 20 })} />
            {errors.newPassword && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
          </div>

          <div>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, maxLength: 20 })} />
            {errors.confirmPassword && <span className='error-message font-roboto text-sm text-red-700'>This field is required</span>}
          </div>

          {
            isLoading ? (
              <Button type='submit' className="w-full mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] text-center flex" disabled={true}>
                <Loader2Icon className='animate-spin mr-1' />
                Update Password</Button>
            ) : (

              <Button type='submit' className="w-full mt-4 mb-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center">Update Password</Button>
            )
          }
        </form>
      </div>
    </div>
  );
}