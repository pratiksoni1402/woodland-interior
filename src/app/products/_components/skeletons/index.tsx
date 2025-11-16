import CategoriesSkeleton from '@/app/products/_components/skeletons/categories'
import ProductSkeleton from '@/app/products/_components/skeletons/products/skeleton'
import ProductsHeaderSkeleton from '@/app/products/_components/skeletons/filter'

export default function Skeletons() {
	return (
		<div>
			<CategoriesSkeleton />
			<ProductsHeaderSkeleton />
			<ProductSkeleton />
		</div>
	)
}
