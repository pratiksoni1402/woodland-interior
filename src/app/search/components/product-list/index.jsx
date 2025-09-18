'use client';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

import ProductSkeleton from '@/app/products/components/skeletons/products/skeleton';
import Link from 'next/link';
import LazyImage from '@/app/_lib/utils/lazy-image';
import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';
import { IndianRupee } from 'lucide-react';
export default function ProductList() {
	const searchParams = useSearchParams();
	const searchKeyword = searchParams.get('keyword');
	const { data } = useQuery({
		queryKey: ['search-products', searchKeyword],
		queryFn: () =>
			axios
				.post('/api/search-products', { searchKeyword })
				.then((response) => response.data.searchProducts)
				.catch((error) => console.log(error)),
	});
	return (
		<div className="">
			<div className="container">
				<div className="product-listing-section pb-10 pt-2">
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
						{!data ? (
							<div className="lg:col-span-4 md:col-span-3 sm:col-span-2 col-end-2">
								<ProductSkeleton />
							</div>
						) : (
							data?.map((products) => (
								<Link
									href={`/product-detail/${products.id}`}
									key={products.id}
									className="my-4 group"
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
										<div className="p-2 sm:text-sm text-xs">
											{products.name}
										</div>
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
		</div>
	);
}
