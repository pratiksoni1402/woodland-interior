import type { Metadata } from 'next';
import { LoginForm, SignupForm } from '@/features/auth';

export const metadata: Metadata = {
	title: 'Sign In or Create an Account | Woodland Interiors',
	description:
		'Sign in to your Woodland Interiors account or register today to track orders, manage your bespoke furniture wishlist, and enjoy a seamless shopping experience.',
	keywords: [
		'sign in',
		'login',
		'create account',
		'register',
		'woodland interiors account',
		'customer portal',
	],
	alternates: {
		canonical: '/auth',
	},
	robots: {
		index: false,
		follow: true,
	},
	openGraph: {
		title: 'Sign In or Create an Account | Woodland Interiors',
		description:
			'Log in or sign up to manage your Woodland Interiors account, order history, and saved furniture favorites.',
		url: '/auth',
		siteName: 'Woodland Interiors',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/uploads/images/homepage/banner.jpg',
				width: 1200,
				height: 630,
				alt: 'Woodland Interiors Account Portal',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sign In or Create an Account | Woodland Interiors',
		description:
			'Log in or sign up to manage your Woodland Interiors account, order history, and saved furniture favorites.',
		images: ['/uploads/images/homepage/banner.jpg'],
	},
};

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
	);
}
