import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LogIn } from 'lucide-react';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('/api/login-user', data)
            .then(response => {
                toast.success("Login Successfull", {
                    duration: 3000,
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
                })

            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("Incorrect Email or Password!", {
                    duration: 10000,
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
                })
            });
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
                    <button type='submit' className="w-full p-3 mt-4 mb-3 border hover:border-[#b2937e] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2">Login  <LogIn /></button>
                </form>
            </div>
        </div>
    )
}

export default Login;

