'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
import { showErrorToast, showSuccessToast } from '@/lib/toast';

function FormField({
	id,
	label,
	required,
	register,
	errors,
	placeholder,
	type = 'text',
	...rest
}) {
	return (
		<div className="field-wrapper w-full">
			<label
				htmlFor={id}
				className="text-sm font-roboto pl-2 pr-0.5 font-medium"
			>
				{label}
			</label>
			{required && <span className="font-semibold text-red-700">*</span>}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(id, required ? { required: true } : {})}
				{...rest}
			/>
			{errors[id] && (
				<span className="error-message font-roboto pl-2 text-sm text-red-700">
					This field is required
				</span>
			)}
		</div>
	);
}

function SubmitButton({ isLoading, children }) {
	return (
		<Button
			type="submit"
			className={`w-36 rounded-md my-3 border ${
				isLoading
					? 'bg-primary border-primary text-white'
					: 'bg-primary border-primary hover:bg-secondary hover:border-secondary hover:text-white text-white hover:cursor-pointer'
			}`}
			disabled={isLoading}
		>
			{isLoading && <Loader2Icon className="animate-spin mr-1" />}
			{children}
		</Button>
	);
}

export default function UserProfile() {
	const [isLoading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const queryClient = useQueryClient();

	// 🔹 Get Countries
	const { data: countries } = useQuery({
		queryKey: ['list'],
		queryFn: async () => {
			const { data } = await axios.get('/api/get-countries');
			return data.countriesList;
		},
	});

	useQuery({
		queryKey: ['profiledata'],
		queryFn: async () => {
			const { data } = await axios.get('/api/get-customer-profile');
			Object.keys(data.getprofile).forEach((key) =>
				setValue(key, data.getprofile[key])
			);
			return data.getprofile;
		},
		onError: () => showErrorToast('Error fetching profile'),
	});

	const onSubmit = async (formData) => {
		setLoading(true);
		try {
			await axios.put('/api/customer-profile', formData);
			showSuccessToast('Profile updated successfully');
			queryClient.invalidateQueries(['profiledata']);
		} catch (error) {
			showErrorToast('Error while updating profile');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="user-profile-component ">
			<div className="content-wrapper">
				<Toaster />
				<div className="form-wrapper flex justify-center text-primary">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="lg:w-3/4 w-full border border-[#b2937e] rounded-md p-4 bg-white"
					>
						{/* Name */}
						<div className="flex sm:flex-nowrap flex-wrap sm:gap-5">
							<FormField
								id="firstname"
								label="First Name"
								required
								register={register}
								errors={errors}
								placeholder="John"
							/>
							<FormField
								id="lastname"
								label="Last Name"
								required
								register={register}
								errors={errors}
								placeholder="Doe"
							/>
						</div>

						<FormField
							id="addresslineone"
							label="Address Line 1"
							required
							register={register}
							errors={errors}
						/>
						<FormField
							id="addresslinetwo"
							label="Address Line 2"
							register={register}
							errors={errors}
							placeholder="Optional"
						/>

						<div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-3 gap-0 items-center">
							<div className="mb-3">
								<label
									htmlFor="country"
									className="text-sm font-roboto pl-2 pr-0.5 font-medium"
								>
									Country
								</label>
								<span className="font-semibold text-red-700">*</span>
								<select
									id="country"
									{...register('country', { required: true })}
									className="w-full mb-0"
								>
									<option value="">Select Country</option>
									{countries?.map((country) => (
										<option key={country.id} value={country.name}>
											{country.name}
										</option>
									))}
								</select>
								{errors.country && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
							<FormField
								id="state"
								label="State"
								required
								register={register}
								errors={errors}
							/>
							<FormField
								id="city"
								label="City"
								required
								register={register}
								errors={errors}
							/>
						</div>

						<div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-0">
							<FormField
								id="pincode"
								label="Pincode"
								required
								register={register}
								errors={errors}
							/>
							<FormField
								id="phonenumber"
								label="Phone Number"
								required
								register={register}
								errors={errors}
							/>
						</div>

						<div className="text-center pt-4 flex justify-center font-roboto tracking-wide">
							<SubmitButton isLoading={isLoading}>Update Profile</SubmitButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
