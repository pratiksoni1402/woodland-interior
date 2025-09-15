'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';
import { IndianRupee } from 'lucide-react';

import Link from 'next/link';
import axios from 'axios';

import LazyImage from '@/app/_lib/utils/lazy-image';
import Count from '@/app/products/components/product-count/count';
import SortByFilter from '@/app/products/components/filters/sort-by/sort-by';
import ProductsHeaderSkeleton from '@/app/products/components/skeletons/filter';
import Categories from '@/app/products/components/product-categories/categories';
import ProductSkeleton from '@/app/products/components/skeletons/products/skeleton';
import CategoriesCarousel from '@/app/products/components/category-carousel';
import WishlistDark from '@/icons/wishlist-dark';
export default function GetProducts() {
	const params = useSearchParams();
	const slug = params.get('category');
	const price = params.get('price');

	// Fetching All Products
	const { data: allproducts } = useQuery({
		queryKey: ['product-list', slug, price],
		queryFn: async () => {
			const response = await axios.get(
				`/api/product-listing?slug=${slug || ''}&price=${price || ''}`
			);
			return response.data.productlist;
		},
	});

	return (
		<div className="">
			<div className="container">
				<div className=" pb-4">
					<div className="sm:block hidden">
						<Categories />
					</div>
					<div className="sm:hidden block mt-3">
						<CategoriesCarousel />
					</div>
				</div>
				{!allproducts ? (
					<div className="py-3">
						<ProductsHeaderSkeleton />
					</div>
				) : (
					<div className="flex justify-between sm:flex-row flex-col sm:gap-5 gap-2 items-center text-center border border-x-0 border-border sm:py-3 pb-3 pt-1 my-3">
						<Count />
						<SortByFilter />
					</div>
				)}
				<div className="product-listing-section pb-10 pt-2">
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
						{!allproducts ? (
							<div className="lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-2">
								<ProductSkeleton />
							</div>
						) : (
							allproducts?.map((category) =>
								category.products?.map((product) => (
									<Link
										href={`/product-detail/${product.id}`}
										key={product.id}
										className="sm:my-4 my-0 group"
									>
										<div className="product-image overflow-hidden relative sm:h-[300px] h-[200px]">
											<LazyImage
												src={`${BLOB_BASE_URL}/${product.image}`}
												alt={product.name}
												width={427}
												height={427}
												className="group-hover:scale-125 transition-transform duration-300 sm:w-[427px] sm:h-[427px] w-[227px] h-[227px]"
											/>
											<div className="absolute right-1 top-1">
												<WishlistDark />
											</div>
										</div>
										<div className="detail text-center text-sm text-[#3c2f27] font-roboto group-hover:text-[#3c2f27] group-hover:font-bold transition duration-150">
											<div className="p-2 sm:text-sm text-xs">
												{product.name}
											</div>
											<div className="pricing font-bold flex justify-center items-center">
												<IndianRupee size={14} />
												<span>{product.price}</span>
											</div>
										</div>
									</Link>
								))
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
