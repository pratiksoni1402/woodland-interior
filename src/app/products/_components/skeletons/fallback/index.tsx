import ProductsHeaderSkeleton from '@/app/products/_components/skeletons/filter'
import ProductSkeleton from '@/app/products/_components/skeletons/products/skeleton'
import CategoriesSkeleton from '@/app/products/_components/skeletons/categories'
export function ProductsFallback() {
	return (
		<div className="">
			<div className="container">
				<div className=" pb-4">
					<div className="sm:block hidden">
						<CategoriesSkeleton />
					</div>
				</div>

				<div className="text-center sm:py-3 pb-3 pt-1 my-3">
					<ProductsHeaderSkeleton />
				</div>

				<div className="product-listing-section pb-10 pt-2">
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
						<div className="lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-2">
							<ProductSkeleton />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
