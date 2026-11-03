import type { Metadata } from 'next';
import { SearchLoadingState, SearchView } from '@/features/search';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Search | Woodland Interiors',
};

export default function SearchProducts() {
	return (
		<Suspense fallback={<SearchLoadingState />}>
			<SearchView />
		</Suspense>
	);
}
