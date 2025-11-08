'use client';

import React, { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2Icon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { ForgotPasswordLink } from '@/app/auth/login/components/forgot-password';
import { showErrorToast } from '@/lib/toast';

function AuthenticationForm() {
	const router = useRouter();
	const searchParam = useSearchParams();
	const queryClient = useQueryClient();

	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		try {
			await axios.post('/api/auth/login', data);

			const redirect = searchParam.get('redirect');
			router.push(redirect === '/checkout' ? '/checkout' : '/my-account');

			queryClient.invalidateQueries({ queryKey: ['checkSession'] });
		} catch (error) {
			console.error('Error:', error);
			showErrorToast('Invalid email or password');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="user-login-form sm:pb-20 pb-0 lg:w-3/5 w-full">
			<Toaster />
			<div className="user-login">
				<div className="heading text-center text-2xl text-primary font-crimson sm:py-5 py-2">
					<h1>Login</h1>
				</div>

				<div className="login-form border border-border rounded-md bg-white">
					<form onSubmit={handleSubmit(onSubmit)} className="m-5 bg-white">
						{/* Email Field */}
						<div className="field-wrapper !mb-6">
							<label
								htmlFor="email"
								className="font-medium font-roboto text-sm pb-0.5 pl-2 block"
							>
								Email <span className="text-red-700">*</span>
							</label>
							<input
								type="text"
								id="email"
								placeholder="john@example.com"
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^\S+@\S+$/i,
										message: 'Enter a valid email',
									},
								})}
							/>
							{errors.email && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									{errors.email.message?.toString()}
								</span>
							)}
						</div>

						{/* Password Field */}
						<div className="field-wrapper relative">
							<label
								htmlFor="password"
								className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
							>
								Password <span className="text-red-700">*</span>
							</label>
							<div className="relative">
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									{...register('password', {
										required: 'Password is required',
									})}
								/>
								<button
									type="button"
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
									onClick={() => setShowPassword((prev) => !prev)}
								>
									{showPassword ? (
										<EyeIcon size={18} />
									) : (
										<EyeOffIcon size={18} />
									)}
								</button>
							</div>
							{errors.password && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									{errors.password.message?.toString()}
								</span>
							)}
						</div>

						<div className="text-right mt-2">
							<ForgotPasswordLink />
						</div>

						{/* Submit Button */}
						<div className="mt-7">
							<Button
								type="submit"
								disabled={loading}
								className={`w-full rounded-md p-3 mt-4 mb-3 flex justify-center items-center gap-2 font-roboto ${
									loading
										? 'border border-secondary bg-secondary text-white cursor-not-allowed'
										: 'border border-primary bg-primary text-white hover:bg-secondary hover:border-secondary hover:text-background hover:cursor-pointer'
								}`}
							>
								{loading && <Loader2Icon className="animate-spin mr-1" />}
								Login
							</Button>
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
