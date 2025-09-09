import GetProducts from '@/app/products/components/get-products';
import { Suspense } from 'react';
export default function ProductListing() {
	return (
		<Suspense>
			<div>
				<GetProducts />
			</div>
		</Suspense>
	);
}
