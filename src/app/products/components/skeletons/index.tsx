import CategoriesSkeleton from '@/app/products/components/skeletons/categories';
import ProductSkeleton from '@/app/products/components/skeletons/products/skeleton';
import ProductsHeaderSkeleton from '@/app/products/components/skeletons/filter';

export default function Skeletons() {
	return (
		<div>
			<CategoriesSkeleton />
			<ProductsHeaderSkeleton />
			<ProductSkeleton />
		</div>
	);
}
