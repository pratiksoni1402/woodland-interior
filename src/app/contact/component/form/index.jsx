'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { showSuccessToast } from '@/lib/toast';
import { showErrorToast } from '@/lib/toast';
const ContactForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [isLoading, setLoading] = useState(false);

	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post('/api/contactus', data)
			.then(() => {
				reset();
				showSuccessToast('Message sent successfully');
			})
			.catch(() => {
				showErrorToast('Unable to send message');
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
						className="bg-white border border-[#b2937e] sm:p-5 p-2.5 rounded-md"
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
									{...register('firstname', { required: true })}
								/>
								{errors.firstname && (
									<span className="error-message font-roboto text-sm pl-2 text-red-700">
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
									placeholder="Last name"
									{...register('lastname', { required: true, maxLength: 100 })}
								/>
								{errors.lastname && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
						</div>

						<div className="flex sm:flex-nowrap flex-wrap sm:gap-5">
							<div className="field-wrapper w-full">
								<label
									htmlFor="email"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									Email
								</label>
								<span className="font-semibold text-red-700">*</span>
								<input
									id="email"
									type="text"
									placeholder="john@example.com"
									{...register('email', {
										required: true,
										pattern: /^\S+@\S+$/i,
									})}
								/>
								{errors.email && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
							<div className="field-wrapper w-full">
								<label
									htmlFor="findus"
									className="text-sm font-roboto pl-2 pr-0.5"
								>
									How did you find us ?
								</label>
								<span className="font-semibold text-red-700">*</span>
								<input
									id="findus"
									type="text"
									{...register('subject', { required: true })}
								/>
								{errors.subject && (
									<span className="error-message font-roboto pl-2 text-sm text-red-700">
										This field is required
									</span>
								)}
							</div>
						</div>

						<div className="field-wrapper">
							<label
								htmlFor="message"
								className="text-sm font-roboto pl-2 pr-0.5"
							>
								Message
							</label>
							<span className="font-semibold text-red-700">*</span>
							<textarea
								id="message"
								{...register('message', { required: true })}
								style={{ height: '180px' }}
							/>
							{errors.message && (
								<span className="error-message font-roboto pl-2 text-sm text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="mt-5 flex justify-center">
							{isLoading ? (
								<Button
									type="submit"
									className="bg-white border px-6 py-3 w-36 border-[#3c2f27] rounded-md hover:cursor-pointer hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto hover:transition-all hover:duration-300 text-[#3c2f27]"
									disabled={true}
								>
									<Loader2Icon className="animate-spin mr-1" />
									Submit
								</Button>
							) : (
								<Button
									type="submit"
									className="bg-white border px-6 py-3 w-36 border-[#3c2f27] rounded-md hover:cursor-pointer hover:bg-[#3c2f27] hover:text-[#faf2ec] font-roboto hover:transition-all hover:duration-300 text-[#3c2f27]"
								>
									Submit
								</Button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
