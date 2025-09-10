import { Skeleton } from '@/components/ui/skeleton';

export default function ProductsHeaderSkeleton() {
	return (
		<div className="flex items-center justify-between border-t border-b border-[#cbb3a7] py-2">
			{/* Left side - product count */}
			<div className="flex items-center gap-2">
				<Skeleton className="h-4 w-[70px]" /> {/* Showing */}
				<Skeleton className="h-4 w-[20px]" /> {/* number */}
				<Skeleton className="h-4 w-[20px]" /> {/* of */}
				<Skeleton className="h-4 w-[20px]" /> {/* number */}
				<Skeleton className="h-4 w-[70px]" /> {/* Products */}
			</div>

			{/* Right side - Sort By dropdown */}
			<div className="flex items-center gap-2">
				<Skeleton className="h-4 w-[50px]" /> {/* Sort By text */}
				<Skeleton className="h-8 w-[120px] rounded-md" /> {/* dropdown */}
			</div>
		</div>
	);
}
