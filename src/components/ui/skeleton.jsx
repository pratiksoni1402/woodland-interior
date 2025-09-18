import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }) {
	return (
		<div
			data-slot="skeleton"
			className={cn('bg-[#f3e9e2] animate-pulse rounded-md', className)}
			{...props}
		/>
	);
}

export { Skeleton };
