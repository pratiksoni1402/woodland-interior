import { Skeleton } from '@/components/ui/skeleton';

export default function CategoriesSkeleton() {
	const categories = Array.from({ length: 4 });

	return (
		<div className="flex gap-7 justify-center text-primary items-center text-center text-sm font-roboto font-normal tracking-wide">
			{categories.map((_, index) => (
				<div key={index} className="group">
					<div className="border-2 border-transparent rounded-md p-2">
						<div className="relative h-[100px] w-[100px] overflow-hidden rounded-md">
							<Skeleton className="h-[100px] w-[100px] rounded-md" />
						</div>
					</div>
					<div className="mt-2 flex justify-center">
						<Skeleton className="h-4 w-[70px]" />
					</div>
				</div>
			))}
		</div>
	);
}
