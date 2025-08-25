'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
export default function CartLink() {
	const { data: count } = useQuery({
		queryKey: ['totalcount'],
		queryFn: () =>
			axios
				.get('/api/cart-items/get-count')
				.then((response) => {
					return response.data.productcount;
				})
				.catch((error) => {
					console.log(error);
				}),
	});
	return (
		<Link href="/cart" className="relative">
			<ShoppingCart />
			{count > 0 ? (
				<div className="absolute text-[10px] text-center top-[-10px] right-[-9px] bg-[#3c2f27] text-white rounded-full w-5 h-5 p-[3px]">
					{count}
				</div>
			) : (
				''
			)}
		</Link>
	);
}
