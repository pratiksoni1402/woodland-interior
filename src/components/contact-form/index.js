'use client'
import React from "react";
import { useForm } from 'react-hook-form';
import './style.css'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = (data) =>{
        axios.post('/api/contactus', data)
        .then(response => {
            console.log('Registration successful', response.data);
            notification();
          })
        .catch(error =>{
            console.log("Not successfull", error)
            dataerror();
        })
    }

    //Display Toast when form submitted successfully
    const notification = () =>{
        toast.success("Query Submitted Successfully!, We will get back to you as soon as possible", {
            duration: 4000
        })
    }

    //Display Toast when form submission failed
    const dataerror = () =>{
        toast.error("Error while submitting form")
    }

    return (
        <div className="contact-page">
            <div className="content-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="First name" {...register("firstname", { required: true })} />
                        <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="text" placeholder="How did you find us ?" {...register("subject", { required: true })} />
                        <textarea placeholder="Enter your Message Here" {...register("message", { required: true })} style={{ height: "180px" }} />

                        <button type="submit" className="bg-white border px-6 py-3 w-full border-[#54595f] rounded hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto hover:transition-all hover:duration-300 text-[#54595f]">Submit</button>
                        <Toaster/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;