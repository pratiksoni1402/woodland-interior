'use client';
import { useFormContext } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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

			<div className="field-wrapper">
				<input
					type="text"
					placeholder="First name"
					{...register('billing_first_name', {
						required: true,
						maxLength: 80,
					})}
				/>
				{errors.billing_first_name && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<input
					type="text"
					placeholder="Last name"
					{...register('billing_last_name', {
						required: true,
						maxLength: 100,
					})}
				/>
				{errors.billing_last_name && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<input
					type="text"
					placeholder="Address Line 1"
					{...register('billing_address_one', { required: true })}
				/>
				{errors.billing_address_one && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<input
					type="text"
					placeholder="Address Line 2"
					{...register('billing_address_two', { required: true })}
				/>
				{errors.billing_address_two && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="grid grid-cols-3 sm:gap-5 gap-0">
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<select {...register('billing_country', { required: true })}>
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
							<span className="error-message font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<input
							type="text"
							placeholder="State"
							{...register('billing_state', { required: true })}
						/>
						{errors.billing_state && (
							<span className="error-message font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<input
							type="text"
							placeholder="City"
							{...register('billing_city', { required: true })}
						/>
						{errors.billing_city && (
							<span className="error-message font-roboto text-sm text-red-700">
								This field is required
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="field-wrapper">
				<input
					type="text"
					placeholder="Pin Code"
					{...register('billing_pincode', { required: true })}
				/>
				{errors.billing_pincode && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<input
					type="text"
					placeholder="Nearest Landmark"
					{...register('billing_landmark', { required: true })}
				/>
				{errors.billing_landmark && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>

			<div className="field-wrapper">
				<input
					type="text"
					placeholder="Contact Number"
					{...register('billing_phone_number', { required: true })}
				/>
				{errors.billing_phone_number && (
					<span className="error-message font-roboto text-sm text-red-700">
						This field is required
					</span>
				)}
			</div>
		</div>
	);
}
