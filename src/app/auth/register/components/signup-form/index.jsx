'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { showErrorToast } from '@/lib/toast';
import { Toaster } from 'react-hot-toast';

function FormField({
	id,
	label,
	type = 'text',
	register,
	rules,
	error,
	placeholder,
}) {
	return (
		<div className="field-wrapper w-full">
			<label
				htmlFor={id}
				className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
			>
				{label}
				<span className="font-semibold text-red-700 pl-0.5">*</span>
			</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(id, rules)}
				className="w-full"
			/>
			{error && (
				<span className="error-message pl-2 font-roboto text-sm text-red-700">
					{error.message || 'This field is required'}
				</span>
			)}
		</div>
	);
}

export function SignupForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isLoading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		if (data.password !== data.cnfpassword) {
			return showErrorToast('Password and Confirm Password do not match');
		}

		try {
			setLoading(true);
			const response = await axios.post('/api/register-user', data);

			if (response.data.successMessage) {
				router.push('/my-account');
			} else if (response.data.errorMessage) {
				showErrorToast(response.data.errorMessage);
			}
		} catch (error) {
			console.error('Registration error', error);
			showErrorToast('Something went wrong, please try again later.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="user-registration-form-wrapper pb-12 lg:w-3/5 w-full">
			<div className="user-registration">
				<Toaster />
				<div className="heading text-center text-2xl text-primary font-crimson py-5">
					<h1>Signup</h1>
				</div>
				<div className="register-form text-primary">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="border border-border rounded-md bg-white p-5"
					>
						<div className="flex sm:gap-3 gap-0 sm:flex-nowrap flex-wrap">
							<FormField
								id="firstname"
								label="Firstname"
								placeholder="John"
								register={register}
								rules={{ required: true, maxLength: 50 }}
								error={errors.firstname}
							/>
							<FormField
								id="lastname"
								label="Lastname"
								placeholder="Doe"
								register={register}
								rules={{ required: true, maxLength: 50 }}
								error={errors.lastname}
							/>
						</div>

						<FormField
							id="email"
							label="Email"
							type="email"
							placeholder="john@example.com"
							register={register}
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Enter a valid email address',
								},
							}}
							error={errors.email}
						/>

						<FormField
							id="password"
							label="Password"
							type="password"
							register={register}
							rules={{
								required: 'Password is required',
								minLength: {
									value: 8,
									message: 'Password must be at least 6 characters',
								},
							}}
							error={errors.password}
						/>

						<FormField
							id="cnfpassword"
							label="Confirm Password"
							type="password"
							register={register}
							rules={{ required: true }}
							error={errors.cnfpassword}
						/>

						<Button
							type="submit"
							disabled={isLoading}
							className={`w-full rounded-md p-3 mt-6 flex justify-center items-center gap-2 font-roboto ${
								isLoading
									? 'border bg-transparent text-primary border-primary hover:bg-transparent'
									: 'border bg-primary text-white hover:bg-secondary hover:border-secondary hover:text-background'
							}`}
						>
							{isLoading && <Loader2Icon className="animate-spin mr-1" />}
							Signup
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
