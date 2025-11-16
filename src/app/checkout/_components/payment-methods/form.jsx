'use client';
import { useFormContext } from 'react-hook-form';
export default function PaymentMethod() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className="payment-method">
			<div className="heading text-left pb-3 mt-4 font-crimson text-[#3c2f27] text-2xl">
				Payment Method
			</div>
			<div className="text-sm flex items-center font-roboto text-[#3c2f27] pb-1 ">
				<input
					{...register('payment_mode', { required: true })}
					type="radio"
					value="Debit Card"
					id="debit-card"
				/>
				<label
					htmlFor="debit-card"
					className="radio-label flex flex-row items-center"
				>
					<span className="custom-radio "></span>
					Debit Card
				</label>
			</div>

			<div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
				<input
					{...register('payment_mode', { required: true })}
					type="radio"
					value=" Credit Card"
					id="credit-card"
				/>
				<label
					htmlFor="credit-card"
					className="radio-label flex flex-row items-center"
				>
					<span className="custom-radio "></span>
					Credit Card
				</label>
			</div>

			<div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
				<input
					{...register('payment_mode', { required: true })}
					type="radio"
					value=" UPI"
					id="upi"
				/>
				<label htmlFor="upi" className="radio-label flex flex-row items-center">
					<span className="custom-radio "></span>
					UPI
				</label>
			</div>

			<div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
				<input
					{...register('payment_mode', { required: true })}
					type="radio"
					value=" Net Banking"
					id="net-banking"
				/>
				<label
					htmlFor="net-banking"
					className="radio-label flex flex-row items-center"
				>
					<span className="custom-radio"></span>
					Net Banking
				</label>
			</div>

			<div className="text-sm flex items-center font-roboto text-[#3c2f27] ">
				<input
					{...register('payment_mode', { required: true })}
					type="radio"
					value=" Cash on Delivery"
					id="cod"
				/>
				<label htmlFor="cod" className="radio-label flex flex-row items-center">
					<span className="custom-radio "></span>
					Cash on Delivery
				</label>
			</div>
		</div>
	);
}
