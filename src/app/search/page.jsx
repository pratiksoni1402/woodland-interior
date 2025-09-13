import ProductList from '@/app/search/components/product-list';
import { Suspense } from 'react';
export default function SearchProducts() {
	return (
		<Suspense>
			<ProductList />
		</Suspense>
	);
}
