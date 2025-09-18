import { Skeleton } from '@/components/ui/skeleton';

export default function ProductSkeleton() {
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-5 gap-1">
			{Array.from({ length: 8 }).map((_, index) => (
				<div key={index} className="sm:mt-3 mt-2 mb-5 w-full">
					<div>
						<Skeleton className="sm:h-80 h-52 w-full" />
					</div>
					<div className="py-3">
						<Skeleton className="h-4 w-full" />
					</div>
					<div className="flex justify-center">
						<Skeleton className="h-4 sm:w-[200px] w-36" />
					</div>
				</div>
			))}
		</div>
	);
}
