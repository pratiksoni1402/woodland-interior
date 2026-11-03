import { LoginForm, SignupForm } from '@/features/auth'

export default function Auth() {
	return (
		<div className="container">
			<div className="flex gap-4 sm:flex-nowrap flex-wrap">
				<div className="w-full flex items-center justify-center">
					<LoginForm />
				</div>
				<div className="w-full flex items-center justify-center">
					<SignupForm />
				</div>
			</div>
		</div>
	)
}
