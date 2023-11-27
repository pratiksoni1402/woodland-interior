'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='user-registration'>
            <div className='heading text-center text-2xl text-[#54595f] py-5'>
               <h1> New Customer ? Signup Here </h1>
               <p className='text-base'>Register with Woodland Interiors</p>
            </div>
            <div className='register-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="First name" {...register("First name", { required: true })} />
                    <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password" placeholder="Password" {...register("Password", { required: true })} />
                    <input type="password" placeholder="Confirm Password" {...register("Confirm Password", { required: true })} />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;