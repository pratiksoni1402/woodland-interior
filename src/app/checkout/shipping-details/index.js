'use client'
import React from "react"
import { useForm } from 'react-hook-form';
export default function Shippingdetail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="shipping-details-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Address Line 1" {...register("Address Line 1", { required: true })} />
                <input type="text" placeholder="Address Line 2" {...register("Address Line 2", { required: true })} />
                <select {...register("Country", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
                <select {...register("State", { required: true })}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <select {...register("City", { required: true })}>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                </select>
                <input type="text" placeholder="Pin Code" {...register("Pin Code", { required: true })} />
                <input type="text" placeholder="Nearest Landmark" {...register("Nearest Landmark", { required: true })} />
                <input type="text" placeholder="Contact Number" {...register("Contact Number", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    )
}