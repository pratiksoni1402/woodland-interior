import Link from 'next/link';

export function ForgotPasswordLink() {
	return (
		<Link
			href="/auth/password-reset"
			className="font-normal hover:font-medium hover:underline text-sm hover:text-primary font-roboto"
		>
			Forgot Password ?
		</Link>
	);
}
