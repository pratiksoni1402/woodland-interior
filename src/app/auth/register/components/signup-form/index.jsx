'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function SignupForm() {
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
		<div className="user-registration-form-wrapper pb-12 w-3/5">
			<div className="user-registration">
				<Toaster />
				<div className="heading text-center text-2xl text-[#3c2f27] font-crimson py-5">
					<h1> Signup </h1>
				</div>
				<div className="register-form">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className=" border border-[#b2937e] rounded-md bg-white p-5"
					>
						<div className="flex gap-3">
							<div className="field-wrapper">
								<label
									htmlFor="firstName"
									className="font-medium font-roboto text-sm pb-0.5 block"
								>
									Firstname
								</label>
								<input
									id="firstName"
									type="text"
									placeholder="John"
									{...register('firstname', { required: true })}
								/>
								{errors.firstname && (
									<span className="error-message font-roboto text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
							<div className="field-wrapper">
								<label
									htmlFor="lastName"
									className="font-medium font-roboto text-sm pb-0.5 block"
								>
									Lastname
								</label>
								<input
									type="text"
									id="lastName"
									placeholder="Doe"
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
						</div>
						<div className="field-wrapper">
							<label
								htmlFor="email"
								className="font-medium font-roboto text-sm pb-0.5 block"
							>
								Email
							</label>
							<input
								id="email"
								type="text"
								placeholder="john@example.com"
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
							<label
								htmlFor="password"
								className="font-medium font-roboto text-sm pb-0.5 block"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								{...register('password', { required: true })}
							/>
							{errors.password && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>
						<div className="field-wrapper">
							<label
								htmlFor="cnfPassword"
								className="font-medium font-roboto text-sm pb-0.5 block"
							>
								Confirm Password
							</label>
							<input
								id="cnfPassword"
								type="password"
								{...register('cnfpassword', { required: true })}
							/>
							{errors.cnfpassword && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						{isLoading ? (
							<Button
								type="submit"
								className="w-full rounded-none p-3 mt-4 mb-3 border hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2"
								disabled={true}
							>
								<Loader2Icon className="animate-spin mr-1" />
								Signup
							</Button>
						) : (
							<Button
								type="submit"
								className="w-full hover:cursor-pointer rounded-none p-3 mt-4 mb-3 border hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-[#3c2f27] hover:text-[#faf2ec] flex justify-center items-center gap-2"
							>
								Signup
							</Button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}
