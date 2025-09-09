'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
export default function Count() {
	const params = useSearchParams();
	const slug = params.get('category');

	// Fetching All Products
	const { data: allproducts } = useQuery({
		queryKey: ['product-list', slug],
		queryFn: () =>
			axios.get(`/api/product-listing?slug=${slug}`).then((response) => {
				return response.data.productlist;
			}),
	});
	// End
	return (
		<div className="total-products">
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
