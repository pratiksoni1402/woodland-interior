import { Skeleton } from '@/components/ui/skeleton';

export default function CategoriesSkeleton() {
	const categories = Array.from({ length: 4 });

	return (
		<div className="container">
			<div className="pb-4 md:pt-7 sm:pt-5.5 pt-2 flex justify-center">
				<Skeleton className="text-center sm:h-7 h-6 sm:w-60 w-52 font-crimson text-4xl text-primary" />
			</div>
			<div className="flex md:gap-7 sm:gap-4 gap-2 justify-center text-primary items-center text-center text-sm font-roboto font-normal tracking-wide relative">
				{categories.map((_, index) => (
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
				{/*<div className="sm:hidden block absolute top-1/2">*/}
				{/*	<div className="flex justify-between">*/}
				{/*		<Skeleton className="w-8 h-8 rounded-full" />*/}
				{/*		<Skeleton className="w-8 h-8 rounded-full" />*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</div>
	);
}
