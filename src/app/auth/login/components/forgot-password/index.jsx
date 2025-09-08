import Link from 'next/link';

export function ForgotPasswordLink() {
	return (
		<Link
			href="/auth/password-reset"
			className="font-medium text-sm hover:text-primary font-roboto"
		>
			Forgot Password ?
		</Link>
	);
}
