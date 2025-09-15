'use client';

import React, { Suspense, useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Toaster } from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { ForgotPasswordLink } from '@/app/auth/login/components/forgot-password';
import { showErrorToast } from '@/lib/toast';
function AuthenticationForm() {
	const searchParam = useSearchParams();
	const value = searchParam.get('redirect');
	// console.log("Value", value);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const queryClient = useQueryClient();

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post('/api/login-user', data)
			.then(() => {
				if (value === '/checkout') {
					router.push('/checkout');
					queryClient.invalidateQueries('checkSession');
				} else {
					router.push('/my-account');
					queryClient.invalidateQueries('checkSession');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				showErrorToast('Invalid email or password');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="user-login-form sm:pb-20 pb-0 lg:w-3/5 w-full">
			<div className="user-login">
				<Toaster />
				<div className="heading text-center text-2xl text-primary font-crimson py-5">
					<h1>Login</h1>
				</div>
				<div className="login-form border-border border rounded-md bg-white">
					<form onSubmit={handleSubmit(onSubmit)} className="m-5 bg-white">
						<div className="field-wrapper !mb-6">
							<label
								htmlFor="email"
								className="font-medium font-roboto text-sm pb-0.5 pl-2 block"
							>
								Email
								<span className="font-semibold text-red-700 pl-0.5">*</span>
							</label>
							<input
								type="text"
								id="email"
								placeholder="john@example.com"
								{...register('email', {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
							/>
							{errors.email && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
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
								type="password"
								id="password"
								{...register('password', { required: true })}
							/>
							{errors.password && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>
						<div className="text-right">
							<ForgotPasswordLink />
						</div>
						<div className="mt-7">
							{loading ? (
								<Button
									type="submit"
									className="w-full p-3 mt-4 mb-3 border rounded-md hover:border-[#3c2f27] hover:bg-[#3c2f27] border-[#3c2f27] bg-transparent text-primary hover:text-[#faf2ec] flex justify-center items-center gap-2"
									disabled={true}
								>
									<Loader2Icon className="animate-spin mr-1" />
									Login
								</Button>
							) : (
								<Button
									type="submit"
									className="w-full hover:cursor-pointer rounded-md p-3 mt-4 mb-3 border border-primary bg-primary text-white font-roboto hover:bg-secondary hover:border-secondary hover:text-background flex justify-center items-center gap-2"
								>
									Login
								</Button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export function LoginForm() {
	return (
		<Suspense>
			<AuthenticationForm />
		</Suspense>
	);
}
