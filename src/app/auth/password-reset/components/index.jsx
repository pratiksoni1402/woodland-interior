'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
export function PasswordResetForm() {
	const [isProcessing, setIsProcessing] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setIsProcessing(true);
		try {
			const response = await axios.post('/api/auth/forgot-password', data);
			if (response.data.type === 'success') {
				toast.success(response.data.message);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error(error.response?.data || error.message);
		}
		setIsProcessing(false);
	};

	return (
		<div className="mb-32 text-primary">
			<div>
				<h1 className="font-crimson text-3xl text-center pt-3 pb-1">
					Forgot Password
				</h1>
				<p className="font-roboto sm:text-base text-sm text-center">
					Enter your email. If it exists in our records, you’ll receive a
					password reset link.
				</p>
			</div>
			<div className="w-1/4 mx-auto font-roboto text-sm mt-10">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="border border-border rounded-md p-4"
				>
					<label
						htmlFor="forgotpass"
						className="text-sm font-roboto pl-1 pr-0.5 block font-medium pb-0.5"
					>
						Email
						<span className="font-semibold text-red-700 pl-1">*</span>
					</label>
					<input
						className="block border border-border h-8 placeholder:px-1 px-1 rounded-md w-full"
						type="email"
						placeholder="john@example.com"
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Please enter a valid email address',
							},
						})}
					/>
					{errors.Email && (
						<p className=" text-red-700 pt-0.5 pl-1">{errors.Email.message}</p>
					)}

					<div className="flex justify-center mt-5">
						{
							<Button
								type="submit"
								className="bg-primary text-white hover:bg-secondary hover:text-white hover:cursor-pointer"
							>
								{isProcessing && (
									<span className="animate-spin">
										<Loader2Icon />
									</span>
								)}{' '}
								Submit
							</Button>
						}
					</div>
				</form>
			</div>
		</div>
	);
}
