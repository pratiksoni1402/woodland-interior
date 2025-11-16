import GetProducts from '@/app/products/_components/get-products'
import { Suspense } from 'react'
import { ProductsFallback } from '@/app/products/_components/skeletons/fallback'

export const metadata = {
	title: 'Bedroom Furniture | Dining Tables | Sofa sets | Outdoor Furniture',
}

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
	)
}
