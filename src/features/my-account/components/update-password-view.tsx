'use client'

import { useState } from 'react'
import { useForm, type FieldError, type UseFormRegister } from 'react-hook-form'
import { Eye, EyeOff, Loader2Icon } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
import { Button } from '@/components/ui/button'
import { showErrorToast } from '@/lib/toast'
import { useUpdateAccountPassword } from '../hooks/use-account'
import type { UpdatePasswordValues } from '../types'

type PasswordFieldName = keyof UpdatePasswordValues

interface PasswordFieldProps {
	id: PasswordFieldName
	label: string
	register: UseFormRegister<UpdatePasswordValues>
	error?: FieldError
	isVisible: boolean
	toggleVisibility: () => void
}

function PasswordField({
	id,
	label,
	register,
	error,
	isVisible,
	toggleVisibility,
}: PasswordFieldProps) {
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
				type="button"
				onClick={toggleVisibility}
				className="absolute right-1 top-6.5 hover:cursor-pointer hover:bg-white"
				aria-label={`${isVisible ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
			>
				{isVisible ? <Eye /> : <EyeOff />}
			</Toggle>
			{error && (
				<span className="error-message font-roboto text-sm pl-2 text-red-700">
					This field is required
				</span>
			)}
		</div>
	)
}

const defaultVisibility: Record<PasswordFieldName, boolean> = {
	oldPassword: false,
	newPassword: false,
	confirmPassword: false,
}

export function UpdatePasswordView() {
	const [visibility, setVisibility] = useState(defaultVisibility)
	const updatePassword = useUpdateAccountPassword()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdatePasswordValues>()

	const submit = (values: UpdatePasswordValues) => {
		if (values.newPassword !== values.confirmPassword) {
			showErrorToast('Password and confirm password must be the same')
			return
		}
		updatePassword.mutate(values)
	}

	const toggleVisibility = (field: PasswordFieldName) => {
		setVisibility((current) => ({ ...current, [field]: !current[field] }))
	}

	return (
		<div className="change-password-form min-h-[500px]">
			<div className="form-wrapper flex justify-center">
				<form
					onSubmit={handleSubmit(submit)}
					className="border border-[#b2937e] rounded-md text-primary p-5"
				>
					{(['oldPassword', 'newPassword', 'confirmPassword'] as const).map(
						(field) => (
							<PasswordField
								key={field}
								id={field}
								label={
									field === 'oldPassword'
										? 'Old Password'
										: field === 'newPassword'
											? 'New Password'
											: 'Confirm Password'
								}
								register={register}
								error={errors[field]}
								isVisible={visibility[field]}
								toggleVisibility={() => toggleVisibility(field)}
							/>
						)
					)}
					<Button
						type="submit"
						className="mx-auto mt-8 font-roboto text-center block w-36 border bg-primary border-primary hover:bg-secondary hover:border-secondary hover:text-white text-[#faf2ec]"
						disabled={updatePassword.isPending}
					>
						{updatePassword.isPending && (
							<Loader2Icon className="animate-spin mr-1" />
						)}
						Update Password
					</Button>
				</form>
			</div>
		</div>
	)
}
