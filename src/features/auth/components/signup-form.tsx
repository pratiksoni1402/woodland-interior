'use client'

import { useState, type ReactNode } from 'react'
import {
	useForm,
	type FieldError,
	type FieldPath,
	type RegisterOptions,
	type UseFormRegister,
} from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { showErrorToast } from '@/lib/toast'
import { useAuthMutations } from '../hooks/use-auth'
import type { SignupCredentials } from '../types'

type SignupField = FieldPath<SignupCredentials>

interface FormFieldProps<TName extends SignupField> {
	id: TName
	label: string
	type?: string
	register: UseFormRegister<SignupCredentials>
	rules?: RegisterOptions<SignupCredentials, TName>
	error?: FieldError
	placeholder?: string
	children?: ReactNode
}

function FormField<TName extends SignupField>({
	id,
	label,
	type = 'text',
	register,
	rules,
	error,
	placeholder,
	children,
}: FormFieldProps<TName>) {
	return (
		<div className="field-wrapper w-full relative">
			<label
				htmlFor={id}
				className="font-medium font-roboto text-sm pl-2 pb-0.5 block"
			>
				{label}
				<span className="font-semibold text-red-700 pl-0.5">*</span>
			</label>
			<div className="relative">
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					{...register(id, rules)}
					className="w-full pr-10"
				/>
				{children}
			</div>
			{error && (
				<span className="error-message pl-2 font-roboto text-sm text-red-700">
					{error.message || 'This field is required'}
				</span>
			)}
		</div>
	)
}

function PasswordField<TName extends SignupField>(props: FormFieldProps<TName>) {
	const [visible, setVisible] = useState(false)

	return (
		<FormField
			{...props}
			type={visible ? 'text' : 'password'}
		>
			<button
				type="button"
				className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
				onClick={() => setVisible((previous) => !previous)}
			>
				{visible ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
			</button>
		</FormField>
	)
}

export function SignupForm() {
	const router = useRouter()
	const { signup, isSigningUp } = useAuthMutations()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupCredentials>()

	const onSubmit = (data: SignupCredentials) => {
		if (data.password !== data.cnfpassword) {
			showErrorToast('Password and Confirm Password do not match')
			return
		}

		signup(data, {
			onSuccess: (response) => {
				if (response.successMessage) {
					router.push('/my-account')
				} else {
					showErrorToast(
						response.errorMessage || 'Registration could not be completed',
					)
				}
			},
			onError: () =>
				showErrorToast('Something went wrong, please try again later.'),
		})
	}

	return (
		<div className="user-registration-form-wrapper pb-12 lg:w-3/5 w-full">
			<div className="user-registration">
				<Toaster />
				<div className="heading text-center text-2xl text-primary font-crimson sm:py-5 py-2">
					<h1>Signup</h1>
				</div>
				<div className="register-form text-primary">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="border border-border rounded-md bg-white p-5"
					>
						<div className="flex sm:gap-3 gap-0 sm:flex-nowrap flex-wrap">
							<FormField
								id="firstname"
								label="Firstname"
								placeholder="John"
								register={register}
								rules={{ required: true, maxLength: 50 }}
								error={errors.firstname}
							/>
							<FormField
								id="lastname"
								label="Lastname"
								placeholder="Doe"
								register={register}
								rules={{ required: true, maxLength: 50 }}
								error={errors.lastname}
							/>
						</div>

						<FormField
							id="email"
							label="Email"
							type="email"
							placeholder="john@example.com"
							register={register}
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Enter a valid email address',
								},
							}}
							error={errors.email}
						/>

						<PasswordField
							id="password"
							label="Password"
							register={register}
							rules={{
								required: 'Password is required',
								minLength: {
									value: 8,
									message: 'Password must be at least 8 characters',
								},
							}}
							error={errors.password}
						/>

						<PasswordField
							id="cnfpassword"
							label="Confirm Password"
							register={register}
							rules={{ required: 'Confirm Password is required' }}
							error={errors.cnfpassword}
						/>

						<Button
							type="submit"
							disabled={isSigningUp}
							className={`w-full rounded-md p-3 mt-6 flex justify-center items-center gap-2 font-roboto ${
								isSigningUp
									? 'border bg-secondary text-white border-secondary cursor-not-allowed'
									: 'border bg-primary border-primary text-white hover:bg-secondary hover:border-secondary hover:text-background hover:cursor-pointer'
							}`}
						>
							{isSigningUp && <Loader2Icon className="animate-spin mr-1" />}
							Signup
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
