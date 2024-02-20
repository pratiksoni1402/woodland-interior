'use client'
import axios from 'axios';
import { Button } from './../../components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';
export default function Updatepassword() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        axios.put('/api/update-password', data)
        .then((response) =>{
            return response.data.updatepassword
        })
        .catch((error) =>{
            console.log('Error', error)
        })
    }
    

    return (
        <div className='change-password-form'>
            <div className='form-wrapper  flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
                    <input type="password" placeholder="Old Password" {...register("OldPassword", { required: true, maxLength: 20 })} />
                    <input type="password" placeholder="New Password" {...register("NewPassword", { required: true, maxLength: 20 })} />
                    <input type="password" placeholder="Confirm Password" {...register("ConfirmPassword", { required: true, maxLength: 20 })} />

                    <Button type='submit' className='uppercase mt-5 mb-10 bg-transparent border-[#3c2f27] border text-[#3c2f27] font-roboto rounded-none hover:bg-[#3c2f27] hover:text-[#faf2ec]'>update password</Button>
                    
                </form>
            </div>
        </div>
    );
}