'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
import { showErrorToast, showSuccessToast } from '@/lib/toast';

export default function UserProfile() {
	const [isLoading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const queryClient = useQueryClient();
	// Get Countries
	const { data: countries } = useQuery({
		queryKey: ['list'],
		queryFn: () =>
			axios
				.get('/api/get-countries')
				.then((response) => {
					return response.data.countriesList;
				})
				.catch((error) => {
					console.log('Error', error);
				}),
	});
	// End

	// Get customer profile data based on session
	const { data: customer } = useQuery({
		queryKey: ['profiledata'],
		queryFn: () =>
			axios
				.get('/api/get-customer-profile')
				.then((response) => {
					setValue('firstname', response.data.getprofile.firstname);
					setValue('lastname', response.data.getprofile.lastname);
					setValue('email', response.data.getprofile.email);
					setValue('addresslineone', response.data.getprofile.addresslineone);
					setValue('addresslinetwo', response.data.getprofile.addresslinetwo);
					setValue('country', response.data.getprofile.country);
					setValue('state', response.data.getprofile.state);
					setValue('city', response.data.getprofile.city);
					setValue('pincode', response.data.getprofile.pincode);
					setValue('phonenumber', response.data.getprofile.phonenumber);

					return response.data.getprofile;
				})
				.catch((error) => {
					console.log('Error fetching profile', error);
					throw error;
				}),
	});
	//End

	//Update user profile
	const onSubmit = (data) => {
		setLoading(true);
		axios
			.put('/api/customer-profile', data)
			.then(() => {
				showSuccessToast('Profile updated successfully');
				queryClient.invalidateQueries('profiledata');
			})
			.catch((error) => {
				console.log('Error occured', error);
				showErrorToast('Error while updating profile');
			})
			.finally(() => {
				setLoading(false);
			});
	};
	// End

	return (
		<div className="user-profile-component ">
			<div className="content-wrapper">
				<Toaster />
				<div className="form-wrapper flex justify-center">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className=" lg:w-3/4 w-full border border-[#b2937e] rounded-md p-4 bg-white"
					>
						<div className="flex sm:flex-nowrap flex-wrap sm:gap-5">
							<div className="field-wrapper w-full">
								<label
									htmlFor="fname"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									First Name
								</label>
								<span className="font-semibold text-red-700">*</span>
								<input
									id="fname"
									type="text"
									placeholder="John"
									{...register('firstname', { required: true, maxLength: 80 })}
								/>
								{errors.firstname && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
							<div className="field-wrapper w-full">
								<label
									htmlFor="lname"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									Last Name
								</label>
								<span className="font-semibold text-red-700">*</span>
								<input
									id="lname"
									type="text"
									placeholder="Doe"
									{...register('lastname', { required: true, maxLength: 100 })}
								/>
								{errors.lastname && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
						</div>

						<div className="field-wrapper">
							<label htmlFor="add1" className="text-sm font-roboto pl-2 pr-0.5">
								Address Line 1
							</label>
							<span className="font-semibold text-red-700">*</span>
							<input
								id="add1"
								type="text"
								{...register('addresslineone', { required: true })}
							/>
							{errors.addresslineone && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>
						<div className="field-wrapper">
							<label htmlFor="add2" className="text-sm font-roboto pl-2 pr-0.5">
								Address Line 2
							</label>
							<input
								id="add2"
								type="text"
								placeholder="Optional"
								{...register('addresslinetwo', {})}
							/>
							{errors.addresslinetwo && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-3 gap-0 items-center">
							<div className="mb-3">
								<label
									htmlFor="country"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									Country
								</label>
								<span className="font-semibold text-red-700">*</span>
								<select
									id="country"
									{...register('country', { required: true })}
									className="w-full mb-0"
								>
									<option value="" disabled>
										Select Country
									</option>
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

							<div className="field-wrapper">
								<label
									htmlFor="state"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									State
								</label>
								<span className="font-semibold text-red-700">*</span>
								<input
									id="state"
									type="text"
									{...register('state', { required: true })}
								/>
								{errors.state && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>

							<div className="field-wrapper">
								<label
									htmlFor="city"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									City
								</label>
								<span className="font-semibold text-red-700">*</span>
								<input
									id="city"
									type="text"
									{...register('city', { required: true })}
								/>
								{errors.city && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
						</div>
						<div className="grid grid-cols-2 sm:gap-3 gap-0">
							<div className="sm:col-span-1 col-span-2">
								<div className="field-wrapper">
									<label
										htmlFor="pincode"
										className="text-sm font-roboto pl-2 pr-0.5"
									>
										Pincode
									</label>
									<span className="font-semibold text-red-700">*</span>
									<input
										id="pincode"
										type="text"
										{...register('pincode', { required: true })}
									/>
									{errors.city && (
										<span className="error-message font-roboto pl-2 text-sm text-red-700">
											This field is required
										</span>
									)}
								</div>
							</div>

							<div className="sm:col-span-1 col-span-2">
								<div className="field-wrapper">
									<label
										htmlFor="phone"
										className="text-sm font-roboto pl-2 pr-0.5"
									>
										Phone Number
									</label>
									<span className="font-semibold text-red-700">*</span>
									<input
										id="phone"
										type="text"
										{...register('phonenumber', { required: true })}
									/>
									{errors.city && (
										<span className="error-message pl-2 font-roboto text-sm text-red-700">
											This field is required
										</span>
									)}
								</div>
							</div>
						</div>
						<div className="text-center pt-4 flex justify-center">
							{isLoading ? (
								<Button
									type="submit"
									className="w-36 rounded-md my-3 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] flex text-center"
									disabled={true}
								>
									<Loader2Icon className="animate-spin mr-1" />
									Update Profile
								</Button>
							) : (
								<Button
									type="submit"
									className="w-36 rounded-md my-3 border hover:border-[#3c2f27] hover:cursor-pointer bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center"
								>
									Update Profile
								</Button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
