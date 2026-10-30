'use client';

import Link from 'next/link';
import ShoppingBagIcon from '@/icons/shopping-bag';
import { useCartCount } from '../hooks/use-cart';

export function CartBadge() {
	const { data: count = 0 } = useCartCount();

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
				<ShoppingBagIcon color="#3c2f27" fill="#ffffff" stroke="#3c2f27" />
			)}
		</Link>
	);
}

export default CartBadge;
