'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css'
import axios from 'axios';

export default function Register(){
  
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      axios.post('/api/register-user', data)
        .then(response => {
          console.log('Registration successful', response.data);
        })
        .catch(error => {
          console.error('Registration error', error);
        });
    };
  
  
    return (
        <div className='user-registration'>
            <div className='heading text-center text-2xl text-[#54595f] py-5'>
               <h1> New Customer ? Signup Here </h1>
               <p className='text-base'>Register with Woodland Interiors</p>
            </div>
            <div className='register-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="First name" {...register("firstname", { required: true })} />
                    <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
                    <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password" placeholder="Password" {...register("password", { required: true })} />
                    {/* <input type="password" placeholder="Confirm Password" {...register("C", { required: true })} /> */}
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

