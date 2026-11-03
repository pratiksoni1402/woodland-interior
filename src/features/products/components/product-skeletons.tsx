import { Skeleton } from '@/components/ui/skeleton'

export function CategoriesSkeleton() {
	return (
		<div className="container">
			<div className="pb-4 md:pt-7 sm:pt-5.5 pt-2 flex justify-center">
				<Skeleton className="text-center sm:h-7 h-6 sm:w-60 w-52 font-crimson text-4xl text-primary" />
			</div>
			<div className="flex md:gap-7 sm:gap-4 gap-2 justify-center text-primary items-center text-center text-sm font-roboto font-normal tracking-wide relative">
				{Array.from({ length: 4 }, (_, index) => (
					<div key={index} className="group">
						<div className="border-2 border-transparent rounded-md p-2">
							<div className="relative h-[100px] w-[100px] rounded-md overflow-hidden">
								<Skeleton className="h-[100px] w-[100px] rounded-md" />
							</div>
						</div>
						<div className="mt-2 flex justify-center">
							<Skeleton className="h-4 w-[70px]" />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export function ProductsHeaderSkeleton() {
	return (
		<div className="flex items-center sm:flex-row flex-col justify-between border-t border-b border-border sm:py-4 py-2">
			<div className="flex items-center gap-2 space-y-2 sm:my-0 my-3">
				<Skeleton className="h-4 w-[70px]" />
				<Skeleton className="h-4 w-[20px]" />
				<Skeleton className="h-4 w-[20px]" />
				<Skeleton className="h-4 w-[20px]" />
				<Skeleton className="h-4 w-[70px]" />
			</div>
			<div className="flex items-center gap-2 space-y-2 sm:mb-0 mb-3">
				<Skeleton className="h-7 w-[170px] rounded-md" />
			</div>
		</div>
	)
}

export function ProductGridSkeleton() {
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
			{Array.from({ length: 8 }, (_, index) => (
				<div key={index} className="sm:mt-1 mt-2 mb-5 w-full">
					<Skeleton className="sm:h-80 h-52 w-full rounded-none" />
					<div className="py-3">
						<Skeleton className="h-4 w-full" />
					</div>
					<div className="flex justify-center">
						<Skeleton className="h-4 sm:w-[200px] w-36" />
					</div>
				</div>
			))}
		</div>
	)
}

export function ProductsFallback() {
	return (
		<div className="container">
			<div className="pb-4">
				<div className="hidden sm:block">
					<CategoriesSkeleton />
				</div>
			</div>
			<div className="text-center sm:py-3 pb-3 pt-1 my-3">
				<ProductsHeaderSkeleton />
			</div>
			<div className="product-listing-section pb-10 pt-2">
				<ProductGridSkeleton />
			</div>
		</div>
	)
}
