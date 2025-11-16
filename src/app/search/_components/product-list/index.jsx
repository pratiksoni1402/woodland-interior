'use client'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { BLOB_BASE_URL } from '@/app/_lib/constants/blob'
import { IndianRupee } from 'lucide-react'

import axios from 'axios'
import Link from 'next/link'

import ProductSkeleton from '@/app/products/_components/skeletons/products/skeleton'
import LazyImage from '@/app/_lib/utils/lazy-image'
import SortByFilter from '@/app/products/_components/filters/sort-by/sort-by'
import ProductsHeaderSkeleton from '@/app/products/_components/skeletons/filter'

export default function ProductList() {
	const searchParams = useSearchParams()
	const searchKeyword = searchParams.get('keyword')
	const filterByPrice = searchParams.get('price')

	const { data } = useQuery({
		queryKey: ['search-products', searchKeyword, filterByPrice],
		queryFn: () =>
			axios
				.post('/api/search-products', { searchKeyword, filterByPrice })
				.then((response) => response.data.searchProducts)
				.catch((error) => console.log(error)),
	})

	return (
		<div className="container">
			<div className="product-listing-section pb-10 pt-2">
				<div className="sm:py-3 py-0">
					<h1 className="text-center font-crimson sm:text-4xl text-2xl">
						Search
					</h1>
					<p className="text-center font-roboto sm:text-base text-sm font-medium sm:pt-1 pt-0">
						Keyword: {searchKeyword}
					</p>
				</div>

				{!data ? (
					<div className="text-center sm:py-3 pb-3 mb-3 sm:mt-0 mt-3">
						<ProductsHeaderSkeleton />
					</div>
				) : (
					<div className="flex justify-between sm:flex-row flex-col sm:gap-5 gap-2 items-center text-center border border-x-0 border-border sm:py-3 pb-3 pt-1 my-3">
						<div className="font-crimson text-base text-primary font-semibold">
							Showing {data?.length} of {data?.length} products
						</div>
						<SortByFilter />
					</div>
				)}
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
					{!data ? (
						<div className="lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-2">
							<ProductSkeleton />
						</div>
					) : (
						data?.map((products) => (
							<Link
								href={`/product-detail/${products.id}`}
								key={products.id}
								className=" group"
							>
								<div className="product-image overflow-hidden relative sm:h-[300px] h-[200px]">
									<LazyImage
										src={`${BLOB_BASE_URL}/${products.image}`}
										alt={products.name}
										width={427}
										height={427}
										className="group-hover:scale-125 transition-transform duration-300 sm:w-[427px] sm:h-[427px] w-[227px] h-[227px]"
									/>
								</div>
								<div className="detail text-center text-sm text-[#3c2f27] font-roboto group-hover:text-[#3c2f27] group-hover:font-bold transition duration-150">
									<div className="p-2 sm:text-sm text-xs">{products.name}</div>
									<div className="pricing font-bold flex justify-center items-center">
										<IndianRupee size={14} />
										<span>{products.price}</span>
									</div>
								</div>
							</Link>
						))
					)}
				</div>
			</div>
		</div>
	)
}
