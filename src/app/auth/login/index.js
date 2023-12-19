import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css'
import axios from 'axios';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () =>{
        axios.post()
    }

    return (
        <div className="user-login">
            <div className='heading text-center text-2xl text-[#54595f] py-5'>
                <h1>Login</h1>
                <p className='text-base'>Old Customer? Sign in into your account.</p>
            </div>
            <div className='login-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password" placeholder="Password" {...register("password", { required: true })} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

