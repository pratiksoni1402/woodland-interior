'use client';

import Link from 'next/link';
import { MoonLoader } from 'react-spinners';
import { useCart, useCartMutations } from '../hooks/use-cart';
import { calculateCartTotals } from '../utils/calculate-totals';
import { CartItemRow } from './cart-item-row';
import { CartSummary } from './cart-summary';

export function CartView() {
	const { data: items, isLoading } = useCart();
	const { deleteItem, updateQuantity, moveToWishlist } = useCartMutations();

	if (isLoading) {
		return (
			<div className="loading h-screen bg-background w-full flex justify-center items-center">
				<MoonLoader color="#3c2f27" />
			</div>
		);
	}

	if (!items || items.length === 0) {
		return (
			<div className="w-full h-screen bg-background mt-[-70px] flex-col font-crimson text-4xl text-primary flex items-center justify-center">
				<h1 className="sm:text-4xl text-2xl">Your Cart is empty</h1>
				<div className="shop-now text-sm py-3 px-5 hover:bg-secondary font-roboto hover:text-white hover:cursor-pointer bg-primary text-white mt-5 border border-primary hover:border-border">
					<Link href="/products?category=bedroom">Shop Now</Link>
				</div>
			</div>
		);
	}

	const totals = calculateCartTotals(items);

	return (
		<div className="cart-items bg-background pt-5 pb-10">
			<div className="container">
				<div className="grid grid-cols-12 gap-5">
					<div className="lg:col-span-9 col-span-12">
						<div className="product-wrapper">
							<div className="heading pb-3 sm:text-4xl text-xl font-crimson border-b border-border text-primary">
								Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
							</div>
							<div className="my-items divide-y divide-border">
								{items.map((item) => (
									<CartItemRow
										key={item.id}
										item={item}
										onDelete={deleteItem}
										onUpdateQuantity={updateQuantity}
										onMoveToWishlist={moveToWishlist}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="lg:col-span-3 col-span-12">
						<CartSummary totals={totals} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartView;
