'use client'
import React from "react";
import { useForm } from 'react-hook-form';
import './style.css'
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="contact-page">
            <div className="content-wrapper">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="First name" {...register("First name", { required: true })} />
                        <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                        <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                        <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input type="text" placeholder="How did you find us ?" {...register("How did you find us ?", { required: true })} />
                        <textarea {...register("Your Message", { required: true })} style={{ height: "180px" }} />

                        <button type="submit" className="bg-white border px-6 py-3 w-full border-[#54595f] rounded">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;