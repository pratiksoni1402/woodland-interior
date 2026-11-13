import type { Metadata } from 'next';
import { SearchLoadingState, SearchView } from '@/features/search';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Search Handcrafted Furniture & Home Décor | Woodland Interiors',
	description:
		'Search our curated collection of handcrafted solid wood furniture, bespoke timber dining tables, sofa sets, bedroom furnishings, and luxury home decor at Woodland Interiors.',
	keywords: [
		'search furniture',
		'solid wood furniture search',
		'handcrafted timber furniture',
		'wooden dining tables',
		'sofa sets',
		'bedroom collections',
		'Woodland Interiors',
	],
	alternates: {
		canonical: '/search',
	},
	robots: {
		index: false,
		follow: true,
	},
	openGraph: {
		title: 'Search Handcrafted Furniture & Home Décor | Woodland Interiors',
		description:
			'Find handcrafted solid timber furniture and bespoke decor designed to elevate your living spaces at Woodland Interiors.',
		url: '/search',
		siteName: 'Woodland Interiors',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/uploads/images/homepage/warehouse.jpg',
				width: 1200,
				height: 630,
				alt: 'Woodland Interiors - Search Handcrafted Furniture Collection',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Search Handcrafted Furniture & Home Décor | Woodland Interiors',
		description:
			'Find handcrafted solid timber furniture and bespoke decor designed to elevate your living spaces at Woodland Interiors.',
		images: ['/uploads/images/homepage/warehouse.jpg'],
	},
};

export default function SearchProducts() {
	return (
		<Suspense fallback={<SearchLoadingState />}>
			<SearchView />
		</Suspense>
	);
}
