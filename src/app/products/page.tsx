import { Suspense } from 'react'
import { ProductsFallback, ProductsView } from '@/features/products'

export const metadata = {
	title: 'Bedroom Furniture | Dining Tables | Sofa sets | Outdoor Furniture',
}

export default function ProductListing() {
	return (
		<Suspense fallback={<ProductsFallback />}>
			<ProductsView />
		</Suspense>
	)
}
