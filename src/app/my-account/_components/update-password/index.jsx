'use client';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2Icon, Eye, EyeOff } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { showErrorToast, showSuccessToast } from '@/lib/toast';
import { Toaster } from 'react-hot-toast';

function PasswordField({
	id,
	label,
	register,
	error,
	isVisible,
	toggleVisibility,
}) {
	return (
		<div className="field-wrapper relative">
			<label
				htmlFor={id}
				className="text-sm font-roboto pl-2 pr-0.5 font-semibold"
			>
				{label}
			</label>
			<span className="font-semibold text-red-700">*</span>
			<input
				id={id}
				type={isVisible ? 'text' : 'password'}
				{...register(id, { required: true, maxLength: 20 })}
			/>
			<Toggle
				onClick={toggleVisibility}
				className="absolute right-1 top-6.5 hover:cursor-pointer hover:bg-white"
			>
				{isVisible ? <Eye /> : <EyeOff />}
			</Toggle>
			{error && (
				<span className="error-message font-roboto text-sm pl-2 text-red-700">
					This field is required
				</span>
			)}
		</div>
	);
}

export default function UpdateUserPassword() {
	const [isLoading, setLoading] = useState(false);
	const [visibility, setVisibility] = useState({
		oldPassword: false,
		newPassword: false,
		confirmPassword: false,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const toggleVisibility = (field) => {
		setVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
	};

	const onSubmit = async (data) => {
		if (data.newPassword !== data.confirmPassword) {
			return showErrorToast('Password and confirm password must be the same');
		}

		try {
			setLoading(true);
			const response = await axios.post('/api/auth/update-password', data);

			if (response.data.messageSuccess) {
				showSuccessToast(response.data.messageSuccess);
			} else if (response.data.message) {
				showErrorToast(response.data.message);
			}
		} catch (error) {
			console.error('Error', error);
			showErrorToast('Something went wrong, try again later.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="change-password-form min-h-[500px]">
			<div className="form-wrapper flex justify-center">
				<Toaster />
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="border border-[#b2937e] rounded-md text-primary p-5"
				>
					<PasswordField
						id="oldPassword"
						label="Old Password"
						register={register}
						error={errors.oldPassword}
						isVisible={visibility.oldPassword}
						toggleVisibility={() => toggleVisibility('oldPassword')}
					/>
					<PasswordField
						id="newPassword"
						label="New Password"
						register={register}
						error={errors.newPassword}
						isVisible={visibility.newPassword}
						toggleVisibility={() => toggleVisibility('newPassword')}
					/>
					<PasswordField
						id="confirmPassword"
						label="Confirm Password"
						register={register}
						error={errors.confirmPassword}
						isVisible={visibility.confirmPassword}
						toggleVisibility={() => toggleVisibility('confirmPassword')}
					/>

					<Button
						type="submit"
						className={`mx-auto mt-8 font-roboto text-center block ${
							isLoading
								? 'w-64 border bg-primary border-primary text-[#faf2ec] flex justify-center items-center'
								: 'w-36 border bg-primary border-primary hover:bg-secondary hover:border-secondary hover:text-white text-[#faf2ec] hover:cursor-pointer'
						}`}
						disabled={isLoading}
					>
						{isLoading && <Loader2Icon className="animate-spin mr-1" />}
						Update Password
					</Button>
				</form>
			</div>
		</div>
	);
}
