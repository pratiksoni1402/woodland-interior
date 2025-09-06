'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [isLoading, setLoading] = useState(false);

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post('/api/contactus', data)
			.then(() => {
				toast.success('Query Submitted Successfully', {
					duration: 1000,
					style: {
						border: '1px solid #3c2f27',
						padding: '16px',
						color: '#faf2ec',
						backgroundColor: '#3c2f27',
					},
					iconTheme: {
						primary: '#faf2ec',
						secondary: '#3c2f27',
					},
				});
			})
			.catch(() => {
				toast.error('Error while submitting form');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="contact-page">
			<div className="content-wrapper">
				<Toaster />
				<div className="form-wrapper">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="bg-white border border-[#b2937e] p-5"
					>
						<div className="field-wrapper">
							<input
								type="text"
								placeholder="First name"
								{...register('firstname', { required: true })}
							/>
							{errors.firstname && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="field-wrapper">
							<input
								type="text"
								placeholder="Last name"
								{...register('lastname', { required: true, maxLength: 100 })}
							/>
							{errors.lastname && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="field-wrapper">
							<input
								type="text"
								placeholder="Email"
								{...register('email', {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
							/>
							{errors.email && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="field-wrapper">
							<input
								type="text"
								placeholder="How did you find us ?"
								{...register('subject', { required: true })}
							/>
							{errors.subject && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="field-wrapper">
							<textarea
								placeholder="Enter your Message Here"
								{...register('message', { required: true })}
								style={{ height: '180px' }}
							/>
							{errors.message && (
								<span className="error-message font-roboto text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						{isLoading ? (
							<Button
								type="submit"
								className="bg-white border px-6 mt-5 py-3 w-full border-[#3c2f27] rounded-none hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto hover:transition-all hover:duration-300 text-[#3c2f27]"
								disabled={true}
							>
								<Loader2Icon className="animate-spin mr-1" />
								Submit
							</Button>
						) : (
							<Button
								type="submit"
								className="bg-white border px-6 mt-5 py-3 w-full border-[#3c2f27] rounded-none hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto hover:transition-all hover:duration-300 text-[#3c2f27]"
							>
								Submit
							</Button>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
