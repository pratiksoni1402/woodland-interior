'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { CATEGORY_MEDIA_BASE_URL } from '@/app/_lib/constants/blob';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Link from 'next/link';
import LazyImage from '@/app/_lib/utils/lazy-image';
import axios from 'axios';
import CategoriesSkeleton from '@/app/products/components/skeletons/categories';
import clsx from 'clsx';

// Query function
const fetchCategories = async () => {
	const res = await axios.get('/api/get-categories');
	return res.data;
};

export default function CategoriesCarousel() {
	const params = useSearchParams();
	const slug = params.get('category');

	const { data: categories = [], isLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: fetchCategories,
		staleTime: 1000 * 60 * 5,
	});

	if (isLoading) return <CategoriesSkeleton />;

	// Find active category once
	const activeCategory = categories.find((c) => c.slug === slug);

	return (
		<div>
			{/* Heading */}
			{activeCategory && (
				<div className="pb-4">
					<h1 className="text-center font-semibold font-crimson text-2xl text-primary">
						{activeCategory.heading}
					</h1>
				</div>
			)}

			<div className="relative px-12">
				<Carousel
					className="w-full"
					opts={{
						align: 'start',
						loop: false,
					}}
				>
					<CarouselContent className="-ml-2">
						{categories.map((category) => (
							<CarouselItem
								key={category.id}
								className="pl-2 basis-[120px] flex-shrink-0"
							>
								<Link
									href={`/products?category=${category.slug}`}
									className="group block"
								>
									<div
										className={clsx(
											'rounded-md p-2 border-2 w-[120px]',
											slug === category.slug
												? 'border-border'
												: 'border-transparent hover:border-border'
										)}
									>
										<div className="relative h-[100px] w-[100px] mx-auto overflow-hidden rounded-md">
											<LazyImage
												src={`${CATEGORY_MEDIA_BASE_URL}/${category.image}`}
												alt={category.name}
												width={100}
												height={100}
												className="group-hover:scale-125 transition-transform duration-300 w-[100px] h-[100px] object-cover"
											/>
										</div>
									</div>
									<div
										className={clsx(
											'text-center text-sm mt-2 truncate pl-2 text-primary',
											slug === category.slug && 'font-semibold'
										)}
									>
										{category.name}
									</div>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-12 top-[42%] text-primary hover:cursor-pointer" />
					<CarouselNext className="-right-12 top-[42%] text-primary hover:cursor-pointer" />
				</Carousel>
			</div>
		</div>
	);
}
