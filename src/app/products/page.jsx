import GetProducts from '@/app/products/components/get-products';
import { Suspense } from 'react';
import ProductsFallback from '@/app/products/components/skeletons/fallback';

export const metadata = {
	title: 'Browse our wide range of products and shop the best deals today.',
};

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
