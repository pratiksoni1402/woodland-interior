'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';
export default function Count(props) {
	const params = use(props) || '';
	console.log(params);
	// Fetching All Products
	const { data: allproducts } = useQuery({
		queryKey: ['product-list'],
		queryFn: () =>
			axios.get(`/api/product-listing?slug=bedroom`).then((response) => {
				return response.data.productlist;
			}),
	});
	// End
	return (
		<div className="total-products text-center border border-x-0 border-border py-3 my-3">
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
	);
}
