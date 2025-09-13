import { Skeleton } from '@/components/ui/skeleton';

export default function ProductSkeleton() {
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
			{Array.from({ length: 8 }).map((_, index) => (
				<div key={index} className="mt-3 mb-5">
					<div>
						<Skeleton className="h-80 w-80" />
					</div>
					<div className="py-3">
						<Skeleton className="h-4 w-80" />
					</div>
					<div className="flex justify-center">
						<Skeleton className="h-4 w-[200px]" />
					</div>
				</div>
			))}
		</div>
	);
}
