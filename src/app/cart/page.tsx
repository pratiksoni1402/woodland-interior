import type { Metadata } from 'next';
import { CartView } from '@/features/cart';

export const metadata: Metadata = {
	title: 'Shopping Cart | Woodland Interiors',
	description:
		'Review the items in your shopping cart, update quantities, and proceed to secure checkout for your handcrafted timber furniture and home décor from Woodland Interiors.',
	keywords: [
		'shopping cart',
		'furniture cart',
		'checkout',
		'woodland interiors cart',
		'buy wooden furniture online',
	],
	alternates: {
		canonical: '/cart',
	},
	robots: {
		index: false,
		follow: false,
		nocache: true,
		googleBot: {
			index: false,
			follow: false,
			noimageindex: true,
		},
	},
	openGraph: {
		title: 'Shopping Cart | Woodland Interiors',
		description:
			'Review your selected solid timber furniture and handcrafted home decor before secure checkout at Woodland Interiors.',
		url: '/cart',
		siteName: 'Woodland Interiors',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/uploads/images/homepage/banner.jpg',
				width: 1200,
				height: 630,
				alt: 'Woodland Interiors Shopping Cart',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Shopping Cart | Woodland Interiors',
		description:
			'Review your selected solid timber furniture and handcrafted home decor before secure checkout at Woodland Interiors.',
		images: ['/uploads/images/homepage/banner.jpg'],
	},
};

export default function Cart() {
	return <CartView />;
}
