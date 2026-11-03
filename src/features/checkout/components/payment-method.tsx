'use client'

import { useFormContext } from 'react-hook-form'
import type { CheckoutFormValues } from '../types'

const paymentMethods = [
	{ id: 'debit-card', label: 'Debit Card' },
	{ id: 'credit-card', label: 'Credit Card' },
	{ id: 'upi', label: 'UPI' },
	{ id: 'net-banking', label: 'Net Banking' },
	{ id: 'cash-on-delivery', label: 'Cash on Delivery' },
]

export function PaymentMethod() {
	const {
		register,
		formState: { errors },
	} = useFormContext<CheckoutFormValues>()

	return (
		<div className="payment-method">
			<div className="heading text-left pb-3 mt-4 font-crimson text-[#3c2f27] text-2xl">
				Payment Method
			</div>
			{paymentMethods.map((method) => (
				<div
					key={method.id}
					className="text-sm flex items-center font-roboto text-[#3c2f27] pb-1"
				>
					<input
						{...register('payment_mode', { required: true })}
						type="radio"
						value={method.label}
						id={method.id}
					/>
					<label
						htmlFor={method.id}
						className="radio-label flex flex-row items-center"
					>
						<span className="custom-radio" />
						{method.label}
					</label>
				</div>
			))}
			{errors.payment_mode && (
				<p
					className="error-message font-roboto text-sm text-red-700"
					role="alert"
				>
					Select a payment method.
				</p>
			)}
		</div>
	)
}
