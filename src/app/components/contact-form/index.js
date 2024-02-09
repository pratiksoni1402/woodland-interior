'use client'
import React from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = (data) =>{
        axios.post('/api/contactus', data)
        .then(response => {
            notification();
          })
        .catch(error =>{
            console.log("Not successfull", error)
            dataerror();
        })
    }

    //Display Toast when form submitted successfully
    const notification = () =>{
        toast.success("Query Submitted Successfully", {
            duration: 3000
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
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-[#3c2f27] p-5">
                        <input type="text" placeholder="First name" {...register("firstname", { required: true })} />
                        <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
                        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="text" placeholder="How did you find us ?" {...register("subject", { required: true })} />
                        <textarea placeholder="Enter your Message Here" {...register("message", { required: true })} style={{ height: "180px" }} />

                        <button type="submit" className="bg-white border px-6 mt-5 py-3 w-full border-[#3c2f27] rounded-none hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto hover:transition-all hover:duration-300 text-[#3c2f27]">Submit</button>
                        <Toaster/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;