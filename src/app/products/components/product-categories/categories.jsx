'use client';

import Link from 'next/link';
import { CATEGORY_MEDIA_BASE_URL } from '@/app/_lib/constants/blob';
import LazyImage from '@/app/_lib/utils/lazy-image';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CategoriesSkeleton from '@/app/products/components/skeletons/categories';
export default function Categories() {
	const params = useSearchParams();
	const slug = params.get('category');

	// Fetching categories from API
	const { data: categories = [], isLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const res = await axios.get('/api/get-categories');
			return res.data;
		},
	});
	return (
		<div>
			<div className="pb-4 pt-6">
				{categories.map((categoryHeading) => (
					<div key={categoryHeading.id}>
						<h1 className="text-center font-crimson text-4xl text-primary">
							{categoryHeading.category === slug
								? `${categoryHeading.heading}`
								: ''}
						</h1>
					</div>
				))}
			</div>
			<div className="flex gap-7 justify-center text-primary items-center text-center text-sm font-roboto font-normal tracking-wide">
				{isLoading ? (
					<CategoriesSkeleton />
				) : (
					categories.map((category) => (
						<Link
							key={category.id}
							href={`/products?category=${category.slug}`}
							className="group"
						>
							<div
								className={`${
									slug === category.slug
										? 'border-2 border-border rounded-md p-2'
										: 'hover:border-2 hover:border-border rounded-md p-2 border-2 border-transparent'
								}`}
							>
								<div className="relative h-[100px] w-[100px] overflow-hidden rounded-md">
									<LazyImage
										src={`${CATEGORY_MEDIA_BASE_URL}/${category.image}`}
										alt={category.name}
										width={100}
										height={100}
										className="group-hover:scale-125 transition-transform duration-300 w-[100px] h-[100px]"
									/>
								</div>
							</div>
							<div className={slug === category.slug ? 'font-semibold' : ''}>
								{category.name}
							</div>
						</Link>
					))
				)}
			</div>
		</div>
	);
}
