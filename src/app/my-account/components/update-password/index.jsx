'use client';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2Icon } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { showErrorToast } from '@/lib/toast';
import { showSuccessToast } from '@/lib/toast';
export default function UpdateUserPassword() {
	const [isLoading, setLoading] = useState(false);
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showCnfPassword, setShowCnfPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		if (data.newPassword !== data.confirmPassword) {
			showErrorToast('Password and confirm password must be same');
		} else if (data.newPassword === data.confirmPassword) {
			setLoading(true);
			axios
				.post('/api/update-password', data)
				.then((response) => {
					if (response.data.messageSuccess) {
						showSuccessToast(response.data.messageSuccess);
					} else if (response.data.message) {
						showErrorToast(response.data.message);
					}
					return response.data.updatePassword;
				})
				.catch((error) => {
					console.log('Error', error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	const handleOldPasswordVisibility = () => {
		setShowOldPassword(!showOldPassword);
	};

	const handleNewPasswordVisibility = () => {
		setShowNewPassword(!showNewPassword);
	};

	const handleCnfPasswordVisibility = () => {
		setShowCnfPassword(!showCnfPassword);
	};

	return (
		<div className="change-password-form" style={{ minHeight: '500px' }}>
			<div className="form-wrapper  flex justify-center">
				<Toaster />
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="border border-[#b2937e] rounded-md text-primary"
				>
					<div className="p-5">
						<div className="field-wrapper relative">
							<label
								htmlFor="oldpass"
								className="text-sm font-roboto pl-2 pr-0.5 font-semibold"
							>
								Old Password
							</label>
							<span className="font-semibold  text-red-700">*</span>
							<input
								id="oldpass"
								type={showOldPassword ? 'text' : 'password'}
								{...register('oldPassword', { required: true, maxLength: 20 })}
							/>
							<Toggle
								onClick={handleOldPasswordVisibility}
								className="absolute right-1 top-6.5 hover:cursor-pointer hover:bg-white"
							>
								{showOldPassword ? <Eye /> : <EyeOff />}
							</Toggle>
							{errors.oldPassword && (
								<span className="error-message font-roboto text-sm pl-2 text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="field-wrapper relative">
							<label
								htmlFor="newpass"
								className="text-sm font-roboto pl-2 pr-0.5 font-semibold"
							>
								New Password
							</label>
							<span className="font-semibold text-red-700">*</span>
							<input
								id="newpass"
								type={showNewPassword ? 'text' : 'password'}
								{...register('newPassword', { required: true, maxLength: 20 })}
							/>
							<Toggle
								onClick={handleNewPasswordVisibility}
								className="absolute right-1 top-6.5 hover:cursor-pointer hover:bg-white"
							>
								{showNewPassword ? <Eye /> : <EyeOff />}
							</Toggle>
							{errors.newPassword && (
								<span className="error-message font-roboto text-sm pl-2 text-red-700">
									This field is required
								</span>
							)}
						</div>

						<div className="field-wrapper relative">
							<label
								htmlFor="cnfpass"
								className="text-sm font-roboto pl-2 pr-0.5 font-semibold"
							>
								Confirm Password
							</label>
							<span className="font-semibold text-red-700">*</span>
							<input
								type={showCnfPassword ? 'text' : 'password'}
								{...register('confirmPassword', {
									required: true,
									maxLength: 20,
								})}
							/>
							<Toggle
								onClick={handleCnfPasswordVisibility}
								className="absolute right-1 top-6.5 hover:cursor-pointer hover:bg-white data-[state='on']:bg-white"
							>
								{showCnfPassword ? <Eye /> : <EyeOff />}
							</Toggle>
							{errors.confirmPassword && (
								<span className="error-message font-roboto text-sm pl-2 text-red-700">
									This field is required
								</span>
							)}
						</div>

						{isLoading ? (
							<Button
								type="submit"
								className="w-64 mx-auto mt-8 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] text-center flex"
								disabled={true}
							>
								<Loader2Icon className="animate-spin mr-1" />
								Update Password
							</Button>
						) : (
							<Button
								type="submit"
								className="w-36 mx-auto mt-8 border hover:border-[#3c2f27] bg-[#3c2f27] border-[#3c2f27] hover:bg-transparent hover:text-[#3c2f27] text-[#faf2ec] block text-center"
							>
								Update Password
							</Button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
