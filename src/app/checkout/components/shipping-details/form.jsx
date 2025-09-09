'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';

export default function ShippingDetailsForm() {
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
		<div className="shipping-detail-form">
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
						type="text"
						{...register('shipping_first_name', {
							required: true,
							maxLength: 80,
						})}
					/>
					{errors.shipping_first_name && (
						<span className="error-message font-roboto text-sm text-red-700 pl-2">
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
						{...register('shipping_last_name', {
							required: true,
							maxLength: 100,
						})}
					/>
					{errors.shipping_last_name && (
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
					{...register('shipping_address_one', { required: true })}
				/>
				{errors.shipping_address_one && (
					<span className="pl-2 error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<label
					htmlFor="addtwo"
					className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
				>
					Address line 2
					<span className="font-semibold text-red-700 pl-0.5">*</span>
				</label>
				<input
					id="addtwo"
					type="text"
					placeholder="Optional"
					{...register('shipping_address_two', { required: true })}
				/>
				{errors.shipping_address_two && (
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
							{...register('shipping_country', { required: true })}
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
						{errors.shipping_country && (
							<span className="pl-2 error-message font-roboto text-sm text-red-700">
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
							{...register('shipping_state', { required: true })}
						/>
						{errors.shipping_state && (
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
							type="text"
							{...register('shipping_city', { required: true })}
						/>
						{errors.shipping_city && (
							<span className="error-message pl-2 font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
			</div>

			<div className="field-wrapper">
				<label
					htmlFor="landmark"
					className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
				>
					Landmark
					<span className="font-semibold text-red-700 pl-0.5">*</span>
				</label>
				<input
					type="text"
					{...register('shipping_landmark', { required: true })}
				/>
				{errors.shipping_landmark && (
					<span className="error-message pl-2 font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="flex gap-5">
				<div className="field-wrapper w-full">
					<label
						htmlFor="pincode"
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Pincode
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						type="text"
						{...register('shipping_pincode', { required: true })}
					/>
					{errors.shipping_pincode && (
						<span className="pl-2 error-message font-roboto text-sm text-red-700">
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
						{...register('shipping_phone_number', { required: true })}
					/>
					{errors.shipping_phone_number && (
						<span className="error-message font-roboto text-sm text-red-700">
							This field is required
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
