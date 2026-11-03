'use client'

import { useSearchParams } from 'next/navigation'
import SortByFilter from '@/components/filters/sort-by-filter'
import { Categories } from './categories'
import { CategoriesCarousel } from './categories-carousel'
import { ProductCard } from './product-card'
import { ProductErrorState } from './product-error-state'
import {
	CategoriesSkeleton,
	ProductGridSkeleton,
	ProductsHeaderSkeleton,
} from './product-skeletons'
import { useProductCategories, useProducts } from '../hooks/use-products'

export function ProductsView() {
	const searchParams = useSearchParams()
	const slug = searchParams.get('category')
	const price = searchParams.get('price')

	const productsQuery = useProducts(slug, price)
	const categoriesQuery = useProductCategories()
	const categories = categoriesQuery.data ?? []
	const products = productsQuery.data ?? []
	const productCount = products.reduce(
		(count, category) => count + category.products.length,
		0
	)

	return (
		<div>
			<div className="container">
				<div className="pb-4">
					{categoriesQuery.isLoading ? (
						<>
							<div className="hidden sm:block">
								<CategoriesSkeleton />
							</div>
							<div className="sm:hidden block mt-3">
								<CategoriesSkeleton />
							</div>
						</>
					) : categoriesQuery.isError ? (
						<ProductErrorState
							message={
								categoriesQuery.error instanceof Error
									? categoriesQuery.error.message
									: 'Unable to load product categories.'
							}
							onRetry={() => void categoriesQuery.refetch()}
						/>
					) : (
						<>
							<div className="hidden sm:block">
								<Categories categories={categories} slug={slug} />
							</div>
							<div className="sm:hidden block mt-3">
								<CategoriesCarousel categories={categories} slug={slug} />
							</div>
						</>
					)}
				</div>
				{productsQuery.isLoading ? (
					<div className="text-center pb-3 pt-1 my-3">
						<ProductsHeaderSkeleton />
					</div>
				) : productsQuery.isError ? (
					<ProductErrorState
						message={
							productsQuery.error instanceof Error
								? productsQuery.error.message
								: 'Unable to load products.'
						}
						onRetry={() => void productsQuery.refetch()}
					/>
				) : (
					<div className="flex justify-between sm:flex-row flex-col sm:gap-5 gap-2 items-center text-center border border-x-0 border-border sm:py-3 pb-3 pt-1 my-3">
						<div className="total-products">
							<span className="font-crimson font-semibold text-base text-[#3c2f27]">
								Showing <span className="px-1">{productCount}</span> of
								<span className="px-1">{productCount}</span> Products
							</span>
						</div>
						<SortByFilter />
					</div>
				)}
				<div className="product-listing-section pb-10 pt-2">
					{productsQuery.isLoading ? (
						<ProductGridSkeleton />
					) : productsQuery.isError ? null : productCount === 0 ? (
						<p className="py-12 text-center font-roboto text-primary">
							No products found.
						</p>
					) : (
						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
							{products.flatMap((category) =>
								category.products.map((product) => (
									<ProductCard key={product.id} product={product} />
								))
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
