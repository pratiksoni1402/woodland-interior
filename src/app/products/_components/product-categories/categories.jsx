'use client'

import { CATEGORY_MEDIA_BASE_URL } from '@/app/_lib/constants/blob'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import Link from 'next/link'
import LazyImage from '@/app/_lib/utils/lazy-image'
import axios from 'axios'
import CategoriesSkeleton from '@/app/products/_components/skeletons/categories'
import clsx from 'clsx'

// Query function (defined outside for reusability)
const fetchCategories = async () => {
	const res = await axios.get('/api/get-categories')
	return res.data
}

export default function Categories() {
	const params = useSearchParams()
	const slug = params.get('category')

	// Fetching categories from API
	const { data: categories = [], isLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: fetchCategories,
		staleTime: 1000 * 60 * 5, // 5 min cache
	})

	if (isLoading) return <CategoriesSkeleton />

	// Find active category once
	const activeCategory = categories.find((c) => c.slug === slug)

	return (
		<div>
			{/* Heading */}
			{activeCategory && (
				<div className="pb-4 pt-6">
					<h1 className="text-center font-crimson text-4xl text-primary">
						{activeCategory.heading}
					</h1>
				</div>
			)}

			{/* Categories */}
			<div className="flex gap-7 justify-center text-primary items-center text-center text-sm font-roboto font-normal tracking-wide">
				{categories.map((category) => (
					<Link
						key={category.id}
						href={`/products?category=${category.slug}`}
						className="group"
					>
						<div
							className={clsx(
								'rounded-xl p-1.5 border-2',
								slug === category.slug
									? 'border-border mb-1'
									: 'border-transparent hover:border-border mb-1'
							)}
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
						<div
							className={clsx(
								slug === category.slug && 'font-semibold',
								'group-hover:font-semibold'
							)}
						>
							{category.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
