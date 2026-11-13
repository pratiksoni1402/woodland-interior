import type { Metadata } from 'next';
import { WishlistView } from '@/features/wishlist';

export const metadata: Metadata = {
	title: 'My Wishlist | Woodland Interiors',
	description:
		'View and manage your saved furniture and home décor items. Keep track of your favorite handcrafted wooden tables, sofa sets, and artisanal interior pieces at Woodland Interiors.',
	keywords: [
		'furniture wishlist',
		'saved furniture',
		'handcrafted wooden furniture',
		'timber furniture',
		'artisan home decor',
		'Woodland Interiors wishlist',
	],
	alternates: {
		canonical: '/wishlist',
	},
	robots: {
		index: false,
		follow: true,
	},
	openGraph: {
		title: 'My Wishlist | Woodland Interiors',
		description:
			'View and manage your saved handcrafted solid timber furniture and bespoke interior designs.',
		url: '/wishlist',
		siteName: 'Woodland Interiors',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/uploads/images/homepage/banner.jpg',
				width: 1200,
				height: 630,
				alt: 'Woodland Interiors Wishlist - Handcrafted Wooden Furniture',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'My Wishlist | Woodland Interiors',
		description:
			'View and manage your saved handcrafted solid timber furniture and bespoke interior designs.',
		images: ['/uploads/images/homepage/banner.jpg'],
	},
};

export default function Wishlist() {
	return <WishlistView />;
}
