'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './style.css'
import { Button } from '@/app/components/ui/button';
import axios from 'axios';
import toast, { Toast, Toaster } from 'react-hot-toast';
export default function Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [list, setList] = useState();
    const [state, setState] = useState();
    // Get Countries
    useEffect(() => {
        axios.get('/api/get-countries')
            .then((response) => {
                console.log("Success", response.data.countriesList)
                setList(response.data.countriesList)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }, [])
    // End

    // Get State
    useEffect(()=>{
        axios.get('/api/get-state')
        .then((response)=>{
            setState(response.data.stateList)
        })
        .catch((error) =>{
            console.log("Error Occured", error)
        })
    }, [])
    //End

    //Update user profile 
    const onSubmit = (data) => {
        axios.post('/api/customer-profile', data)
            .then((response) => {
                toast.success("Your Profile updated successfully", {
                    duration: 8000,
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
                });
            })
            .catch((error) => {
                console.log("Error occured", error)
                toast.error("Error Occured while updating your profile", {
                    duration: 8000,
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
                });
            })
    }
    // End


    return (
        <div className="user-profile-component">
            <div className="content-wrapper">
                <div className="form-wrapper flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
                        <input type="text" placeholder="First name" {...register("firstname", { required: true, maxLength: 80 })} />
                        <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="text" placeholder="Address Line 1" {...register("addresslineone", { required: true })} />
                        <input type="text" placeholder="Address Line 2" {...register("addresslinetwo", {})} />
                        <div className='grid grid-cols-3 gap-3'>
                            <select {...register("country", { required: true })} >
                                <option value="" disabled selected>Select Country</option>
                                {
                                    list?.map((country) => (
                                        <option key={country.id} value={country.name} >{country.name}</option>
                                    ))
                                }
                            </select>
                            <select {...register("state", { required: true })}>
                                <option value="" disabled selected>Select State</option>
                                {
                                    state?.map((states)=>(
                                        <option value={states.name} key={states.id}>{states.name}</option>
                                    ))
                                }
                            </select>
                            <input type="text" placeholder="City" {...register("city", { required: true })} />

                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <input type="text" placeholder="pincode" {...register("pincode", { required: true })} />
                            <input type="text" placeholder="phonenumber" {...register("phonenumber", { required: true })} />
                        </div>
                        <div className='text-center py-8'>
                            <Button type='submit' className="w-full border border-[#3c2f27] bg-transparent text-[#3c2f27 rounded-none font-roboto hover:bg-[#3c2f27] hover:text-[#faf2ec]">UPDATE PROFILE</Button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}