'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css'
import { Button } from '@/app/components/ui/button';
export default function Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="user-profile-component">
            <div className="content-wrapper">
                <div className="form-wrapper flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
                        <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                        <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="text" placeholder="Address Line 1" {...register("Address Line 1", { required: true })} />
                        <input type="text" placeholder="Address Line 2" {...register("Address Line 2", {})} />
                        <div className='grid grid-cols-3 gap-3'>
                            <select {...register("Country", { required: true })}>
                                <option value="dummy">dummy</option>
                            </select>
                            <select {...register("State", { required: true })}>
                                <option value="dummy">dummy</option>
                            </select>
                            <select {...register("City", { required: true })}>
                                <option value="dummy">dummy</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <input type="text" placeholder="Pin Code" {...register("Pin Code", { required: true })} />
                            <input type="text" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
                        </div>
                        <div className='text-center py-8'>
                            <Button type='submit' className="w-full border border-[#3c2f27] bg-transparent text-[#3c2f27 rounded-none font-roboto hover:bg-[#3c2f27] hover:text-[#faf2ec]">UPDATE PROFILE</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}