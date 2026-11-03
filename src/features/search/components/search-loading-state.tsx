import { Skeleton } from '@/components/ui/skeleton';

export function SearchLoadingState() {
	return (
		<div className="container" aria-busy="true" aria-label="Loading search results">
			<div className="product-listing-section pb-10 pt-2">
				<div className="sm:py-3 py-0 flex flex-col items-center gap-2">
					<Skeleton className="h-8 w-24" />
					<Skeleton className="h-5 w-40" />
				</div>
				<div className="flex justify-between items-center border-y border-border py-3 my-3">
					<Skeleton className="h-5 w-40" />
					<Skeleton className="h-9 w-[180px]" />
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
					{Array.from({ length: 8 }, (_, index) => (
						<div key={index} className="mb-5 w-full">
							<Skeleton className="sm:h-[300px] h-[200px] w-full rounded-none" />
							<Skeleton className="mt-3 h-4 w-full" />
							<Skeleton className="mx-auto mt-2 h-4 w-36" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
