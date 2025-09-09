'use client';
import { useFormContext } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
export default function BillingDetailForm() {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	// Getting Countries list
	const { data: countries } = useQuery({
		queryKey: ['countrylist'],
		queryFn: () =>
			axios
				.get('/api/get-countries')
				.then((response) => {
					return response.data.countriesList;
				})
				.catch((error) => {
					console.log('Error while fetching Country list', error);
				}),
	});
	// End

	return (
		<div className="billing-detail-form">
			<div className="heading text-left pb-3 mt-4 font-crimson text-[#3c2f27] text-2xl">
				Billing Details
			</div>

			<div className="flex gap-5">
				<div className="field-wrapper w-full">
					<label
						htmlFor="fname"
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						First name
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id="fname"
						type="text"
						{...register('billing_first_name', {
							required: true,
							maxLength: 80,
						})}
					/>
					{errors.billing_first_name && (
						<span className="error-message pl-2 font-roboto text-sm text-red-700">
							This field is required
						</span>
					)}
				</div>
				<div className="field-wrapper w-full">
					<label
						htmlFor="lname"
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Last name
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id="lname"
						type="text"
						{...register('billing_last_name', {
							required: true,
							maxLength: 100,
						})}
					/>
					{errors.billing_last_name && (
						<span className="error-message pl-2 font-roboto text-sm text-red-700">
							This field is required
						</span>
					)}
				</div>
			</div>

			<div className="field-wrapper">
				<label
					htmlFor="addone"
					className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
				>
					Address Line 1
					<span className="font-semibold text-red-700 pl-0.5">*</span>
				</label>
				<input
					id="addone"
					type="text"
					{...register('billing_address_one', { required: true })}
				/>
				{errors.billing_address_one && (
					<span className="error-message pl-2 font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<label
					htmlFor="addtwo"
					className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
				>
					Address Line 2
				</label>
				<input
					id="addtwo"
					type="text"
					placeholder="Optional"
					{...register('billing_address_two', { required: true })}
				/>
				{errors.billing_address_two && (
					<span className="error-message pl-2 font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="grid grid-cols-3 sm:gap-5 gap-0">
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<label
							htmlFor="country"
							className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
						>
							Country
							<span className="font-semibold text-red-700 pl-0.5">*</span>
						</label>
						<select
							id="country"
							{...register('billing_country', { required: true })}
						>
							<option value="" disabled>
								Select Country
							</option>

							{countries &&
								countries.map((country) => (
									<option value={country.name} key={country.id}>
										{country.name}
									</option>
								))}
						</select>
						{errors.billing_country && (
							<span className="error-message pl-2 font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<label
							htmlFor="state"
							className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
						>
							State
							<span className="font-semibold text-red-700 pl-0.5">*</span>
						</label>
						<input
							id="state"
							type="text"
							{...register('billing_state', { required: true })}
						/>
						{errors.billing_state && (
							<span className="error-message pl-2 font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<label
							htmlFor="city"
							className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
						>
							City
							<span className="font-semibold text-red-700 pl-0.5">*</span>
						</label>
						<input
							id="city"
							type="text"
							{...register('billing_city', { required: true })}
						/>
						{errors.billing_city && (
							<span className="pl-2 error-message font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
			</div>

			<div>
				<div className="field-wrapper">
					<label
						htmlFor="pincode"
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Landmark
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id="landmark"
						type="text"
						{...register('billing_landmark', { required: true })}
					/>
					{errors.billing_landmark && (
						<span className="error-message pl-2 font-roboto text-sm text-red-700">
							This field is required
						</span>
					)}
				</div>
			</div>

			<div className="flex gap-5">
				<div className="field-wrapper w-full">
					<label
						htmlFor="pincode"
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Pin code
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id="pincode"
						type="text"
						{...register('billing_pincode', { required: true })}
					/>
					{errors.billing_pincode && (
						<span className="error-message font-roboto text-sm text-red-700">
							This field is required
						</span>
					)}
				</div>
				<div className="field-wrapper w-full">
					<label
						htmlFor="phonenumber"
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Phone number
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id="phonenumber"
						type="text"
						{...register('billing_phone_number', { required: true })}
					/>
					{errors.billing_phone_number && (
						<span className="pl-2 error-message font-roboto text-sm text-red-700">
							This field is required
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
