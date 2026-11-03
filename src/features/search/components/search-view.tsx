'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import SortByFilter from '@/components/filters/sort-by-filter';
import { useSearchProducts } from '../hooks/use-search-products';
import { SearchLoadingState } from './search-loading-state';
import { SearchProductCard } from './search-product-card';

export function SearchView() {
	const searchParams = useSearchParams();
	const keyword = searchParams.get('keyword')?.trim() ?? '';
	const price = searchParams.get('price');
	const { data, isLoading, isError, error, refetch } = useSearchProducts(
		keyword,
		price
	);

	if (isLoading) return <SearchLoadingState />;

	return (
		<div className="container">
			<div className="product-listing-section pb-10 pt-2">
				<div className="sm:py-3 py-0 text-primary">
					<h1 className="text-center font-crimson sm:text-4xl text-2xl">
						Search
					</h1>
					<p className="text-center font-roboto sm:text-base text-sm font-medium sm:pt-1 pt-0">
						{keyword ? `Keyword: ${keyword}` : 'Enter a keyword to search products.'}
					</p>
				</div>

				{keyword && (
					<div className="flex justify-between sm:flex-row flex-col sm:gap-5 gap-2 items-center text-center border border-x-0 border-border sm:py-3 pb-3 pt-1 my-3">
						<div className="font-crimson text-base text-primary font-semibold">
							{data?.length ?? 0} products found
						</div>
						<SortByFilter />
					</div>
				)}

				{isError ? (
					<div className="py-12 text-center" role="alert">
						<p className="font-roboto text-sm text-destructive">
							{error instanceof Error
								? error.message
								: 'Unable to load search results.'}
						</p>
						<Button
							type="button"
							variant="outline"
							className="mt-4"
							onClick={() => void refetch()}
						>
							Try again
						</Button>
					</div>
				) : !keyword ? null : data?.length === 0 ? (
					<p className="py-12 text-center font-roboto text-primary">
						No products found. Try a different keyword.
					</p>
				) : (
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
						{data?.map((product) => (
							<SearchProductCard key={product.id} product={product} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
