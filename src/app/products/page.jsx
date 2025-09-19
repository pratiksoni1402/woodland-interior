import GetProducts from '@/app/products/components/get-products';
import { Suspense } from 'react';
import ProductsFallback from '@/app/products/components/skeletons/fallback';
export default function ProductListing() {
	return (
		<Suspense
			fallback={
				<div>
					<ProductsFallback />
				</div>
			}
		>
			<GetProducts />
		</Suspense>
	);
}
