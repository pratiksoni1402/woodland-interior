'use client';
import { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MoonLoader } from 'react-spinners';

import { BLOB_BASE_URL } from '@/app/_lib/constants/blob';
import { IndianRupee } from 'lucide-react';

import Link from 'next/link';
import axios from 'axios';
import LazyImage from '@/app/_lib/utils/lazy-image';
export default function ProductListing(props) {
	const params = use(props.params);

	// Fetching All Products
	const { data: allproducts } = useQuery({
		queryKey: ['product-list'],
		queryFn: () =>
			axios.get(`/api/product-listing?slug=${params.slug}`).then((response) => {
				return response.data.productlist;
			}),
	});
	// End

	if (!allproducts) {
		return (
			<div className="loading h-screen bg-[#faf2ec] w-full flex justify-center items-center">
				<MoonLoader color="#3c2f27" />
			</div>
		);
	}

	return (
		<div className="bedroom-products-page bg-background border-t border-border">
			<div className="container">
				<div className="total-products text-center border border-x-0 border-[#b2937e] py-3 my-3">
					{allproducts &&
						allproducts.map((counting, index) => (
							<div key={index}>
								<span className="font-crimson font-semibold text-base text-[#3c2f27]">
									<span>Showing</span>
									<span className="px-1">{counting.products.length}</span>
									<span>of</span>
									<span className="px-1">{counting.products.length}</span>
									<span>Products</span>
								</span>
							</div>
						))}
				</div>
				<div className="product-listing-section py-10">
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
						{allproducts &&
							allproducts.map(
								(category) =>
									category.products &&
									category.products.map((product) => (
										<Link
											href={`/product-detail/${product.id}`}
											key={product.id}
											className="my-4 group "
										>
											<div className="product-image overflow-hidden relative sm:h-[300px] h-[200px]">
												<LazyImage
													src={`${BLOB_BASE_URL}/${product.image}`}
													alt={product.name}
													width={427}
													height={427}
													className=" group-hover:scale-125 transition-transform duration-300 sm:w-[427px] sm:h-[427px] w-[227px] h-[227px]"
												/>
											</div>
											<div className="detail text-center text-sm text-[#3c2f27] font-roboto group-hover:text-[#3c2f27] group-hover:font-bold transition duration-150">
												<div className="p-2 sm:text-sm text-xs">
													{product.name}
												</div>
												<div className="pricing font-bold flex justify-center items-center">
													<div className="svg-stroking">
														<IndianRupee size={14} />
													</div>
													<div>{product.price}</div>
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
