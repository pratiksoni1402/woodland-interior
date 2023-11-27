import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="user-login">
            <div className='heading text-center text-2xl text-[#54595f] py-5'>
                <h1>Login</h1>
                <p className='text-base'>Old Customer? Sign in into your account.</p>
            </div>
            <div className='login-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password" placeholder="Password" {...register("Password", { required: true })} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

