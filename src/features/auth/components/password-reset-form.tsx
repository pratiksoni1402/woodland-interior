'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthMutations } from '../hooks/use-auth'
import type { PasswordResetRequest } from '../types'

export function PasswordResetForm() {
	const { requestPasswordReset, isRequestingPasswordReset } =
		useAuthMutations()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PasswordResetRequest>()

	const onSubmit = (data: PasswordResetRequest) => {
		requestPasswordReset(data, {
			onSuccess: (response) => {
				if (response.type === 'success') {
					toast.success(response.message)
				} else {
					toast.error(response.message)
				}
			},
			onError: () => toast.error('Unable to request a password reset'),
		})
	}

	return (
		<div className="mb-32 text-primary">
			<div>
				<h1 className="font-crimson text-3xl text-center pt-3 pb-1">
					Forgot Password
				</h1>
				<p className="font-roboto sm:text-base text-sm text-center">
					Enter your email. If it exists in our records, you’ll receive a
					password reset link.
				</p>
			</div>
			<div className="w-1/4 mx-auto font-roboto text-sm mt-10">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="border border-border rounded-md p-4"
				>
					<label
						htmlFor="forgotpass"
						className="text-sm font-roboto pl-1 pr-0.5 block font-medium pb-0.5"
					>
						Email
						<span className="font-semibold text-red-700 pl-1">*</span>
					</label>
					<input
						className="block border border-border h-8 placeholder:px-1 px-1 rounded-md w-full"
						id="forgotpass"
						type="email"
						placeholder="john@example.com"
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Please enter a valid email address',
							},
						})}
					/>
					{errors.email && (
						<p className="text-red-700 pt-0.5 pl-1">{errors.email.message}</p>
					)}

					<div className="flex justify-center mt-5">
						<Button
							type="submit"
							disabled={isRequestingPasswordReset}
							className="bg-primary text-white hover:bg-secondary hover:text-white hover:cursor-pointer"
						>
							{isRequestingPasswordReset && (
								<span className="animate-spin">
									<Loader2Icon />
								</span>
							)}{' '}
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
