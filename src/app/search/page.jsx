import ProductList from '@/app/search/components/product-list';
import { FallbackSkeleton } from '@/app/search/components/fallback';
import { Suspense } from 'react';
export default function SearchProducts() {
	return (
		<Suspense
			fallback={
				<div>
					<FallbackSkeleton />
				</div>
			}
		>
			<ProductList />
		</Suspense>
	);
}
