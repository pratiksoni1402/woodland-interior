'use client'

import { useEffect } from 'react'
import {
	useForm,
	type FieldErrors,
	type UseFormRegister,
} from 'react-hook-form'
import {
	useAccountCountries,
	useAccountProfile,
	useUpdateAccountProfile,
} from '../hooks/use-account'
import type { AccountProfileValues } from '../types'

interface ProfileFieldProps {
	id: keyof AccountProfileValues
	label: string
	register: UseFormRegister<AccountProfileValues>
	errors: FieldErrors<AccountProfileValues>
	required?: boolean
	placeholder?: string
}

function ProfileField({
	id,
	label,
	register,
	errors,
	required = false,
	placeholder,
}: ProfileFieldProps) {
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
				type="text"
				placeholder={placeholder}
				{...register(id, { required })}
			/>
			{errors[id] && (
				<span className="error-message font-roboto pl-2 text-sm text-red-700">
					This field is required
				</span>
			)}
		</div>
	)
}

const defaultValues: AccountProfileValues = {
	firstname: '',
	lastname: '',
	addresslineone: '',
	addresslinetwo: '',
	country: '',
	state: '',
	city: '',
	pincode: '',
	phonenumber: '',
}

export function ProfileView() {
	const { data: countries, isError: countriesError } = useAccountCountries()
	const { data: profile, isError: profileError } = useAccountProfile()
	const updateProfile = useUpdateAccountProfile()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<AccountProfileValues>({ defaultValues })

	useEffect(() => {
		if (!profile) return

		reset({
			firstname: profile.firstname,
			lastname: profile.lastname,
			addresslineone: profile.addresslineone ?? '',
			addresslinetwo: profile.addresslinetwo ?? '',
			country: profile.country ?? '',
			state: profile.state ?? '',
			city: profile.city ?? '',
			pincode: profile.pincode?.toString() ?? '',
			phonenumber: profile.phonenumber ?? '',
		})
	}, [profile, reset])

	return (
		<div className="user-profile-component">
			<div className="content-wrapper">
				<div className="form-wrapper flex justify-center text-primary">
					<form
						onSubmit={handleSubmit((values) => updateProfile.mutate(values))}
						className="w-full border border-[#b2937e] rounded-md px-4 pt-4 pb-0 bg-white"
					>
						{(profileError || countriesError) && (
							<p role="alert" className="mb-3 text-sm text-red-700">
								Unable to load your profile information. Please refresh and try
								again.
							</p>
						)}
						<div className="flex sm:flex-nowrap flex-wrap sm:gap-5">
							<ProfileField
								id="firstname"
								label="First Name"
								required
								register={register}
								errors={errors}
								placeholder="John"
							/>
							<ProfileField
								id="lastname"
								label="Last Name"
								required
								register={register}
								errors={errors}
								placeholder="Doe"
							/>
						</div>
						<ProfileField
							id="addresslineone"
							label="Address Line 1"
							required
							register={register}
							errors={errors}
						/>
						<ProfileField
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
							<ProfileField
								id="state"
								label="State"
								required
								register={register}
								errors={errors}
							/>
							<ProfileField
								id="city"
								label="City"
								required
								register={register}
								errors={errors}
							/>
						</div>
						<div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-0">
							<ProfileField
								id="pincode"
								label="Pincode"
								required
								register={register}
								errors={errors}
							/>
							<ProfileField
								id="phonenumber"
								label="Phone Number"
								required
								register={register}
								errors={errors}
							/>
						</div>
						<div className="text-center pt-4 flex justify-center font-roboto tracking-wide">
							<button
								type="submit"
								disabled={updateProfile.isPending}
								className="w-36 rounded-md my-3 border bg-primary border-primary text-white hover:bg-secondary hover:border-secondary"
							>
								{updateProfile.isPending ? 'Updating...' : 'Update Profile'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
