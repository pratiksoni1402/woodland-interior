'use client'

import Link from 'next/link'
import clsx from 'clsx'
import LazyImage from '@/lib/lazy-image'
import { CATEGORY_MEDIA_BASE_URL } from '@/lib/blob'
import type { ProductCategory } from '../types'

interface CategoriesProps {
	categories: ProductCategory[]
	slug: string | null
}

export function Categories({ categories, slug }: CategoriesProps) {
	const activeCategory = categories.find((category) => category.slug === slug)

	return (
		<div>
			{activeCategory && (
				<div className="pb-4 pt-6">
					<h1 className="text-center font-crimson text-4xl text-primary">
						{activeCategory.heading}
					</h1>
				</div>
			)}
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
