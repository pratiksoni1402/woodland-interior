'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Loader2Icon, EyeIcon, EyeOffIcon } from 'lucide-react';
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
	children,
}) {
	return (
		<div className="field-wrapper w-full relative">
			<label
				htmlFor={id}
				className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
			>
				{label}
				<span className="font-semibold text-red-700 pl-0.5">*</span>
			</label>
			<div className="relative">
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(id, rules)}
					className="w-full pr-10" // space for icon
				/>
				{children /* for icons (like eye toggle) */}
			</div>
			{error && (
				<span className="error-message pl-2 font-roboto text-sm text-red-700">
					{error.message || 'This field is required'}
				</span>
			)}
		</div>
	);
}

function PasswordField({ id, label, register, rules, error }) {
	const [visible, setVisible] = useState(false);

	return (
		<FormField
			id={id}
			label={label}
			type={visible ? 'text' : 'password'}
			register={register}
			rules={rules}
			error={error}
		>
			<button
				type="button"
				className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
				onClick={() => setVisible((prev) => !prev)}
			>
				{visible ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
			</button>
		</FormField>
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
				<div className="heading text-center text-2xl text-primary font-crimson sm:py-5 py-2">
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

						<PasswordField
							id="password"
							label="Password"
							register={register}
							rules={{
								required: 'Password is required',
								minLength: {
									value: 8,
									message: 'Password must be at least 8 characters',
								},
							}}
							error={errors.password}
						/>

						<PasswordField
							id="cnfpassword"
							label="Confirm Password"
							register={register}
							rules={{ required: 'Confirm Password is required' }}
							error={errors.cnfpassword}
						/>

						<Button
							type="submit"
							disabled={isLoading}
							className={`w-full rounded-md p-3 mt-6 flex justify-center items-center gap-2 font-roboto ${
								isLoading
									? 'border bg-secondary text-white border-secondary cursor-not-allowed'
									: 'border bg-primary border-primary text-white hover:bg-secondary hover:border-secondary hover:text-background hover:cursor-pointer'
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
