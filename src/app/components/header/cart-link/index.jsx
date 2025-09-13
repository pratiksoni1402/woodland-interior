'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import ShoppingBagIcon from '@/icons/shopping-bag';

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
			<ShoppingBagIcon />
			{count > 0 ? (
				<div className="absolute text-sm font-roboto text-center top-1.5 right-[3px] text-primary w-5 h-5">
					{count}
				</div>
			) : (
				''
			)}
		</Link>
	);
}
