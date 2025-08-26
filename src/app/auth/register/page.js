'use client';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
// export const revalidate = 0;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function Register() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [Error, setError] = useState();
	const [isLoading, setLoading] = useState(false);

	const onSubmit = (data) => {
		if (data.password === data.cnfpassword) {
			setLoading(true);
			axios
				.post('/api/register-user', data)
				.then((response) => {
					if (response.data.successMessage) {
						router.push('/my-account');
					} else if (response.data.errorMessage) {
						toast.error(response.data.errorMessage, {
							duration: 3000,
							style: {
								border: '1px solid #3c2f27',
								padding: '8px',
								color: '#faf2ec',
								backgroundColor: '#3c2f27',
							},
							iconTheme: {
								primary: '#faf2ec',
								secondary: '#3c2f27',
							},
						});
					}
				})
				.catch((error) => {
					console.error('Registration error', error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setError('Password and Confirm Password does not match');
		}
	};
	return (
		<div className="user-registration-form-wrapper bg-[#faf2ec] pb-12">
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="lg:col-span-3 md:col-span-1 col-span-12"></div>
					<div className="lg:col-span-6 md:col-span-10 col-span-12">
						<div className="user-registration">
							<Toaster />
							<div className="heading text-center text-2xl text-[#3c2f27] font-crimson py-5">
								<h1> New Customer ? Signup Here </h1>
							</div>
							<div className="register-form">
								<form
									onSubmit={handleSubmit(onSubmit)}
									className=" border border-[#b2937e] bg-white p-5"
								>
									<div className="field-wrapper">
										<input
											type="text"
											placeholder="First name"
											{...register('firstname', { required: true })}
										/>
										{errors.firstname && (
											<span className="error-message font-roboto text-sm text-red-700">
												This field is required
											</span>
										)}
									</div>
									<div className="field-wrapper">
										<input
											type="text"
											placeholder="Last name"
											{...register('lastname', {
												required: true,
												maxLength: 100,
											})}
										/>
										{errors.lastname && (
											<span className="error-message font-roboto text-sm text-red-700">
												This field is required
											</span>
										)}
									</div>
									<div className="field-wrapper">
										<input
											type="text"
											placeholder="Email"
											{...register('email', {
												required: true,
												pattern: /^\S+@\S+$/i,
											})}
										/>
										{errors.email && (
											<span className="error-message font-roboto text-sm text-red-700">
												This field is required
											</span>
										)}
									</div>
									<div className="field-wrapper">
										<input
											type="password"
											placeholder="Password"
											{...register('password', { required: true })}
										/>
										{errors.password && (
											<span className="error-message font-roboto text-sm text-red-700">
												This field is required
											</span>
										)}
									</div>
									<div className="field-wrapper">
										<input
											type="password"
											placeholder="Confirm Password"
											{...register('cnfpassword', { required: true })}
										/>
										{errors.cnfpassword && (
											<span className="error-message font-roboto text-sm text-red-700">
												This field is required
											</span>
										)}
									</div>

									<div className="login pt-5 font-roboto text-sm text-[#3c2f27] hover:underline font-semibold">
										<Link href="/auth.js/login">Back to Log In</Link>
									</div>
									{isLoading ? (
										<Button
											type="submit"
											className="w-full rounded-none p-3 mt-4 mb-3 border hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2"
											disabled={true}
										>
											<Loader2Icon className="animate-spin mr-1" />
											Signup <UserPlus />
										</Button>
									) : (
										<Button
											type="submit"
											className="w-full rounded-none p-3 mt-4 mb-3 border hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2"
										>
											Signup <UserPlus />
										</Button>
									)}
								</form>
							</div>
						</div>
					</div>
					<div className="lg:col-span-3 md:col-span-1 col-span-12"></div>
				</div>
			</div>
		</div>
	);
}
