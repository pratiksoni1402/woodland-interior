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
			{count > 0 ? (
				<div>
					<ShoppingBagIcon color="#3c2f27" fill="#3c2f27" stroke="#3c2f27" />
					<div className="absolute text-[10px] font-roboto text-center top-[7px] right-[3px] text-white w-5 h-5">
						{count}
					</div>
				</div>
			) : (
				<div>
					<ShoppingBagIcon color="#3c2f27" fill="#ffffff" stroke="#3c2f27" />
					<div className="absolute text-[10px] font-roboto text-center top-2 right-[3px] text-primary w-5 h-5">
						{count}
					</div>
				</div>
			)}
		</Link>
	);
}
