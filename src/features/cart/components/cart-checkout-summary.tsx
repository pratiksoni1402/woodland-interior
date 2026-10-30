'use client';

import Image from 'next/image';
import { IndianRupee } from 'lucide-react';
import { MoonLoader } from 'react-spinners';
import { BLOB_BASE_URL } from '@/lib/blob';
import { useCart } from '../hooks/use-cart';
import { calculateCartTotals } from '../utils/calculate-totals';

export function CartCheckoutSummary() {
	const { data: cartdata, isLoading } = useCart();

	if (isLoading) {
		return (
			<div className="loading h-64 w-full flex justify-center items-center">
				<MoonLoader color="#3c2f27" />
			</div>
		);
	}

	const items = cartdata ?? [];
	const totals = calculateCartTotals(items);

	return (
		<div className="shopping-bag border border-border rounded-md sm:mt-[45px] mt-5 font-roboto text-primary">
			<div className="heading text-center py-3 text-xl font-semibold border-b border-border">
				Your cart items
			</div>
			<div className="product-wrapper divide-y divide-border">
				{items.map((item) => (
					<div className="product py-5 px-3" key={item.id}>
						<div className="grid grid-cols-12 gap-2">
							<div className="col-span-3">
								<div className="product-image">
									<Image
										src={`${BLOB_BASE_URL}/${item.products.image}`}
										alt={item.products.name}
										width={100}
										height={100}
										className="w-full object-cover"
									/>
								</div>
							</div>
							<div className="col-span-7">
								<div className="description">
									<div className="title font-crimson font-semibold text-lg pb-1">
										{item.products.name}
									</div>
									<div className="sku text-xs text-muted-foreground pb-2">
										SKU: {item.sku}
									</div>
									<div className="quantity text-xs">Qty: {item.quantity}</div>
								</div>
							</div>
							<div className="col-span-2 text-right">
								<div className="flex items-center justify-end font-semibold text-sm">
									<IndianRupee size={12} />
									<span>{(item.products.price ?? 0) * item.quantity}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="calculation p-4 border-t border-border space-y-2 text-sm">
				<div className="sub-total flex justify-between">
					<span>Sub-Total:</span>
					<div className="flex items-center font-medium">
						<IndianRupee size={12} />
						<span>{totals.subtotal}</span>
					</div>
				</div>
				<div className="tax flex justify-between">
					<span>Central GST (9%):</span>
					<div className="flex items-center">
						<IndianRupee size={12} />
						<span>{totals.cgst}</span>
					</div>
				</div>
				<div className="tax flex justify-between">
					<span>State GST (9%):</span>
					<div className="flex items-center">
						<IndianRupee size={12} />
						<span>{totals.sgst}</span>
					</div>
				</div>
				<div className="grand-total flex justify-between pt-3 border-t border-border font-bold text-base">
					<span>Total:</span>
					<div className="flex items-center">
						<IndianRupee size={14} />
						<span>{totals.total}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartCheckoutSummary;
