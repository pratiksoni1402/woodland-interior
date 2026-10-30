'use client';

import Link from 'next/link';
import HeartIcon from '@/icons/wishlist';
import { useWishlistCount } from '../hooks/use-wishlist';

export function WishlistBadge() {
	const { data: wishlistTotal = 0 } = useWishlistCount();

	return (
		<Link href="/wishlist" className="relative">
			{wishlistTotal > 0 ? (
				<div>
					<HeartIcon fill="#3c2f27" />
					<div className="absolute text-[10px] font-roboto text-center text-white top-[5px] right-0.5 w-5 h-5">
						{wishlistTotal}
					</div>
				</div>
			) : (
				<HeartIcon fill="#ffffff" />
			)}
		</Link>
	);
}

export default WishlistBadge;
