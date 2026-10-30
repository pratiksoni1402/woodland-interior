'use client';

import Link from 'next/link';
import { MoonLoader } from 'react-spinners';
import { useWishlist, useWishlistMutations } from '../hooks/use-wishlist';
import { WishlistCard } from './wishlist-card';

interface WishlistViewProps {
	title?: string;
	emptyPaddingClass?: string;
}

export function WishlistView({
	title = 'Your Wishlist',
	emptyPaddingClass = 'h-screen mt-[-70px]',
}: WishlistViewProps) {
	const { data: allproducts, isLoading } = useWishlist();
	const { deleteItem, moveToCart } = useWishlistMutations();

	if (isLoading) {
		return (
			<div className="loading h-screen w-full flex justify-center items-center">
				<MoonLoader color="#3c2f27" />
			</div>
		);
	}

	if (!allproducts || allproducts.length === 0) {
		return (
			<div
				className={`w-full flex-col font-crimson text-4xl text-primary flex items-center justify-center ${emptyPaddingClass}`}
			>
				<h1 className="sm:text-4xl text-2xl">Your Wishlist is empty</h1>
				<div className="py-3 px-5 text-white font-roboto text-sm hover:cursor-pointer bg-primary mt-5 border border-primary hover:bg-secondary hover:border-secondary">
					<Link href="/products?category=bedroom">Shop Now</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="product-wrapper pt-5 pb-10">
			<div className="container">
				<div className="heading font-crimson sm:text-4xl text-xl text-primary pb-5">
					<h1>{title}</h1>
				</div>
				<div className="my-items border-t border-border">
					{allproducts.map((item) => (
						<WishlistCard
							key={item.id}
							item={item}
							onDelete={deleteItem}
							onMoveToCart={moveToCart}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default WishlistView;
