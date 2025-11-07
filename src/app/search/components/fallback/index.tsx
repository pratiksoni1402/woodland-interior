import ProductsHeaderSkeleton from '@/app/products/components/skeletons/filter';
import ProductSkeleton from '@/app/products/components/skeletons/products/skeleton';
import { Skeleton } from '@/components/ui/skeleton';
export function FallbackSkeleton() {
	return (
		<div>
			<div className="">
				<div className="container">
					<div className="product-listing-section pb-10 pt-2">
						<div className="sm:py-3 py-0">
							<Skeleton className="text-center font-crimson sm:text-4xl text-2xl w-20 h-8" />
							<Skeleton className="text-center font-roboto sm:text-base text-sm font-medium sm:pt-1 pt-0 w-24 h-6" />
						</div>

						<div className="text-center sm:py-3 pb-3 pt-1 my-3">
							<ProductsHeaderSkeleton />
						</div>

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
							<div className="lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-2">
								<ProductSkeleton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
