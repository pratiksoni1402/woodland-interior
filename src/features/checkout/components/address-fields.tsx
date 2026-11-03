'use client'

import { useFormContext } from 'react-hook-form'
import { useCheckoutCountries } from '../hooks/use-checkout'
import type { CheckoutFormValues } from '../types'

type AddressPrefix = 'shipping' | 'billing'
type AddressFieldNames = Record<
	| 'firstName'
	| 'lastName'
	| 'addressOne'
	| 'addressTwo'
	| 'country'
	| 'state'
	| 'city'
	| 'pincode'
	| 'landmark'
	| 'phone',
	keyof CheckoutFormValues
>

interface AddressFieldsProps {
	prefix: AddressPrefix
}

export function AddressFields({ prefix }: AddressFieldsProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext<CheckoutFormValues>()
	const countriesQuery = useCheckoutCountries()
	const names: AddressFieldNames =
		prefix === 'shipping'
			? {
					firstName: 'shipping_first_name',
					lastName: 'shipping_last_name',
					addressOne: 'shipping_address_one',
					addressTwo: 'shipping_address_two',
					country: 'shipping_country',
					state: 'shipping_state',
					city: 'shipping_city',
					pincode: 'shipping_pincode',
					landmark: 'shipping_landmark',
					phone: 'shipping_phone_number',
				}
			: {
					firstName: 'billing_first_name',
					lastName: 'billing_last_name',
					addressOne: 'billing_address_one',
					addressTwo: 'billing_address_two',
					country: 'billing_country',
					state: 'billing_state',
					city: 'billing_city',
					pincode: 'billing_pincode',
					landmark: 'billing_landmark',
					phone: 'billing_phone_number',
				}
	const errorMessage = 'This field is required'
	const countryError = countriesQuery.error

	return (
		<div className={`${prefix}-detail-form text-primary`}>
			<div className="flex sm:gap-5 gap-0 sm:flex-row flex-col">
				<div className="field-wrapper w-full">
					<label
						htmlFor={names.firstName}
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						First name
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id={names.firstName}
						type="text"
						{...register(names.firstName, {
							required: errorMessage,
							maxLength: 80,
						})}
					/>
					{errors[names.firstName] && <FieldError message={errorMessage} />}
				</div>
				<div className="field-wrapper w-full">
					<label
						htmlFor={names.lastName}
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Last name
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id={names.lastName}
						type="text"
						{...register(names.lastName, {
							required: errorMessage,
							maxLength: 100,
						})}
					/>
					{errors[names.lastName] && <FieldError message={errorMessage} />}
				</div>
			</div>

			<Field
				id={names.addressOne}
				name={names.addressOne}
				label="Address Line 1"
				required
			/>
			<Field
				id={names.addressTwo}
				name={names.addressTwo}
				label="Address Line 2"
				placeholder="Optional"
			/>

			<div className="grid grid-cols-3 sm:gap-5 gap-0">
				<div className="sm:col-span-1 col-span-3">
					<div className="field-wrapper">
						<label
							htmlFor={names.country}
							className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
						>
							Country
							<span className="font-semibold text-red-700 pl-0.5">*</span>
						</label>
						<select
							id={names.country}
							{...register(names.country, { required: errorMessage })}
						>
							<option value="" disabled>
								Select Country
							</option>
							{countriesQuery.data?.map((country) => (
								<option value={country.name} key={country.id}>
									{country.name}
								</option>
							))}
						</select>
						{errors[names.country] && <FieldError message={errorMessage} />}
						{countriesQuery.isLoading && (
							<p className="text-sm text-muted-foreground" aria-live="polite">
								Loading countries…
							</p>
						)}
						{countriesQuery.isError && (
							<div className="text-sm text-destructive" role="alert">
								<p>
									{countryError instanceof Error
										? countryError.message
										: 'Unable to load countries.'}
								</p>
								<button
									type="button"
									className="underline"
									onClick={() => void countriesQuery.refetch()}
								>
									Try again
								</button>
							</div>
						)}
					</div>
				</div>
				<div className="sm:col-span-1 col-span-3">
					<Field id={names.state} name={names.state} label="State" required />
				</div>
				<div className="sm:col-span-1 col-span-3">
					<Field id={names.city} name={names.city} label="City" required />
				</div>
			</div>

			<Field
				id={names.landmark}
				name={names.landmark}
				label="Landmark"
				required
			/>
			<div className="flex sm:gap-5 gap-0 sm:flex-row flex-col">
				<div className="field-wrapper w-full">
					<label
						htmlFor={names.pincode}
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Pincode<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id={names.pincode}
						type="text"
						{...register(names.pincode, { required: errorMessage })}
					/>
					{errors[names.pincode] && <FieldError message={errorMessage} />}
				</div>
				<div className="field-wrapper w-full">
					<label
						htmlFor={names.phone}
						className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
					>
						Phone number
						<span className="font-semibold text-red-700 pl-0.5">*</span>
					</label>
					<input
						id={names.phone}
						type="tel"
						{...register(names.phone, { required: errorMessage })}
					/>
					{errors[names.phone] && <FieldError message={errorMessage} />}
				</div>
			</div>
		</div>
	)
}

function Field({
	id,
	name,
	label,
	required: isRequired,
	placeholder,
}: {
	id: keyof CheckoutFormValues
	name: keyof CheckoutFormValues
	label: string
	required?: boolean
	placeholder?: string
}) {
	const {
		register,
		formState: { errors },
	} = useFormContext<CheckoutFormValues>()
	const errorMessage = 'This field is required'

	return (
		<div className="field-wrapper">
			<label
				htmlFor={id}
				className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
			>
				{label}
				{isRequired && (
					<span className="font-semibold text-red-700 pl-0.5">*</span>
				)}
			</label>
			<input
				id={id}
				type="text"
				placeholder={placeholder}
				{...register(name, isRequired ? { required: errorMessage } : {})}
			/>
			{errors[name] && isRequired && <FieldError message={errorMessage} />}
		</div>
	)
}

function FieldError({ message }: { message: string }) {
	return (
		<span className="error-message font-roboto text-sm text-red-700 pl-2">
			{message}
		</span>
	)
}
