'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { showSuccessToast, showErrorToast } from '@/lib/toast';

// ✅ Reusable form field
const FormField = ({
	id,
	label,
	placeholder,
	register,
	rules,
	errors,
	type = 'text',
	textarea,
}) => {
	return (
		<div className="field-wrapper w-full">
			<label htmlFor={id} className="text-sm font-roboto pl-2 pr-0.5">
				{label}
			</label>
			<span className="font-semibold text-red-700">*</span>
			{textarea ? (
				<textarea
					id={id}
					placeholder={placeholder}
					{...register(id, rules)}
					className="h-[180px]"
				/>
			) : (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(id, rules)}
				/>
			)}
			{errors[id] && (
				<span className="error-message font-roboto text-sm pl-2 text-red-700">
					This field is required
				</span>
			)}
		</div>
	);
};

const ContactForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isLoading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			await axios.post('/api/contactus', data);
			reset();
			showSuccessToast('Message sent successfully');
		} catch {
			showErrorToast('Unable to send message');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="contact-form">
			<Toaster />
			<div className="form-wrapper">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white border border-[#b2937e] sm:p-5 p-2.5 rounded-md"
				>
					<div className="flex sm:flex-nowrap flex-wrap sm:gap-5">
						<FormField
							id="firstname"
							label="First Name"
							placeholder="John"
							register={register}
							rules={{ required: true }}
							errors={errors}
						/>
						<FormField
							id="lastname"
							label="Last Name"
							placeholder="Last name"
							register={register}
							rules={{ required: true, maxLength: 100 }}
							errors={errors}
						/>
					</div>

					<div className="flex sm:flex-nowrap flex-wrap sm:gap-5">
						<FormField
							id="email"
							label="Email"
							placeholder="john@example.com"
							register={register}
							rules={{ required: true, pattern: /^\S+@\S+$/i }}
							errors={errors}
						/>
						<FormField
							id="subject"
							label="How did you find us ?"
							register={register}
							rules={{ required: true }}
							errors={errors}
						/>
					</div>

					<FormField
						id="message"
						label="Message"
						register={register}
						rules={{ required: true }}
						errors={errors}
						textarea
					/>

					<div className="mt-5 flex justify-center">
						<Button
							type="submit"
							disabled={isLoading}
							className="bg-primary border px-6 py-3 w-36 border-primary rounded-md text-white
               hover:cursor-pointer hover:border-secondary hover:bg-secondary
               hover:text-white font-roboto transition-all duration-300"
						>
							{isLoading && <Loader2Icon className="animate-spin mr-1" />}
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
