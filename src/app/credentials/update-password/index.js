'use client'
import axios from 'axios';
import { Button } from './../../components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';
export default function Updatepassword() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        if(data.newPassword === data.confirmPassword){
            axios.post('/api/update-password', data)
            .then((response) =>{
                return response.data.updatePassword
            })
            .catch((error) =>{
                console.log('Error', error)
            })
        }
    }
    

    return (
        <div className='change-password-form'>
            <div className='form-wrapper  flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
                    <input type="password" placeholder="Old Password" {...register("oldPassword", { required: true, maxLength: 20 })} />
                    <input type="password" placeholder="New Password" {...register("newPassword", { required: true, maxLength: 20 })} />
                    <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, maxLength: 20 })} />

                    <Button type='submit' className='w-full uppercase mt-5 mb-10 bg-transparent border-[#3c2f27] border hover:text-[#faf2ec] font-roboto rounded-none bg-[#3c2f27] text-[#faf2ec]'>update password</Button>
                    
                </form>
            </div>
        </div>
    );
}