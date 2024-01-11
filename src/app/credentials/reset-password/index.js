'use client'
import { Button } from '@/app/components/ui/button';
import React from 'react';
import { useForm } from 'react-hook-form';
export default function Resetpassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='change-password-form'>
            <div className='form-wrapper  flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
                    <input type="password" placeholder="Old Password" {...register("Old Password", { required: true, maxLength: 20 })} />
                    <input type="password" placeholder="New Password" {...register("New Password", { required: true, maxLength: 20 })} />
                    <input type="password" placeholder="Confirm Password" {...register("Confirm Password", { required: true, maxLength: 20 })} />

                    <Button type='submit' className='uppercase mt-5 mb-10 bg-transparent border-[#3c2f27] border text-[#3c2f27] font-roboto rounded-none hover:bg-[#3c2f27] hover:text-[#faf2ec]'>update password</Button>
                </form>
            </div>
        </div>
    );
}