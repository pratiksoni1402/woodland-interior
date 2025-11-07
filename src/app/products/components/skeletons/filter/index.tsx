import { Skeleton } from '@/components/ui/skeleton';

export default function ProductsHeaderSkeleton() {
	return (
		<div className="flex items-center sm:flex-row flex-col justify-between border-t border-b border-border sm:py-4 py-2">
			{/* Left side - product count */}
			<div className="flex items-center gap-2 space-y-2 sm:my-0 my-3">
				<Skeleton className="h-4 w-[70px]" />
				<Skeleton className="h-4 w-[20px]" />
				<Skeleton className="h-4 w-[20px]" />
				<Skeleton className="h-4 w-[20px]" />
				<Skeleton className="h-4 w-[70px]" />
			</div>

			{/* Right side - Sort By dropdown */}
			<div className="flex items-center gap-2 space-y-2 sm:mb-0 mb-3">
				<Skeleton className="h-7 w-[170px] rounded-md" />
			</div>
		</div>
	);
}
