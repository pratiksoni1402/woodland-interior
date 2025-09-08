'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { showErrorToast } from '@/lib/toast';
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
						showErrorToast(response.data.errorMessage);
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
						className=" border border-border rounded-md bg-white p-5"
					>
						<div className="flex gap-3">
							<div className="field-wrapper">
								<label
									htmlFor="firstName"
									className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
								>
									Firstname
									<span className="font-semibold text-red-700 pl-0.5">*</span>
								</label>
								<input
									id="firstName"
									type="text"
									placeholder="John"
									{...register('firstname', { required: true })}
								/>
								{errors.firstname && (
									<span className="error-message pl-2 font-roboto text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
							<div className="field-wrapper">
								<label
									htmlFor="lastName"
									className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
								>
									Lastname
									<span className="font-semibold text-red-700 pl-0.5">*</span>
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
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
						</div>
						<div className="field-wrapper">
							<label
								htmlFor="email"
								className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
							>
								Email
								<span className="font-semibold text-red-700 pl-0.5">*</span>
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
								<span className="error-message pl-2 font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>
						<div className="field-wrapper">
							<label
								htmlFor="password"
								className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
							>
								Password
								<span className="font-semibold text-red-700 pl-0.5">*</span>
							</label>
							<input
								id="password"
								type="password"
								{...register('password', { required: true })}
							/>
							{errors.password && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>
						<div className="field-wrapper">
							<label
								htmlFor="cnfPassword"
								className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
							>
								Confirm Password
								<span className="font-semibold text-red-700 pl-0.5">*</span>
							</label>
							<input
								id="cnfPassword"
								type="password"
								{...register('cnfpassword', { required: true })}
							/>
							{errors.cnfpassword && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="mt-10 mb-0">
							{isLoading ? (
								<Button
									type="submit"
									className="w-full rounded-md p-3 mt-4 mb-3 border hover:border-primary hover:bg-primary border-primary bg-transparent text-primary hover:text-background flex justify-center items-center gap-2"
									disabled={true}
								>
									<Loader2Icon className="animate-spin mr-1" />
									Signup
								</Button>
							) : (
								<Button
									type="submit"
									className="w-full hover:cursor-pointer rounded-md p-3 mt-4 mb-3 border border-primary bg-primary text-white font-roboto hover:bg-secondary hover:border-secondary hover:text-background flex justify-center items-center gap-2"
								>
									Signup
								</Button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
