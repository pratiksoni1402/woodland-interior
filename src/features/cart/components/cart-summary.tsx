'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IndianRupee, Loader2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CartTotals } from '../types';

interface CartSummaryProps {
	totals: CartTotals;
}

export function CartSummary({ totals }: CartSummaryProps) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleCheckout = () => {
		setIsLoading(true);
		setTimeout(() => {
			router.push('/checkout');
		}, 800);
	};

	return (
		<div className="order-summary-wrapper sticky top-20 mt-[53px]">
			<div className="wrapper border border-border p-4 font-roboto text-sm text-primary">
				<div className="heading border-b border-border text-center py-5 font-semibold text-base">
					Summary
				</div>
				<div className="calculation">
					<div className="sub-total pt-3 flex justify-between px-2">
						<div>Sub-Total:</div>
						<div className="flex items-center">
							<IndianRupee width={14} size={14} />
							<span>{totals.subtotal}</span>
						</div>
					</div>
					<div className="sub-total flex py-2 justify-between px-2">
						<div>Central GST (9%):</div>
						<div className="flex items-center">
							<IndianRupee width={14} size={14} />
							<span>{totals.cgst}</span>
						</div>
					</div>
					<div className="sub-total flex pb-3 justify-between text-sm px-2">
						<div>State GST (9%):</div>
						<div className="flex items-center">
							<IndianRupee width={14} size={14} />
							<span>{totals.sgst}</span>
						</div>
					</div>
					<div className="total-price flex font-semibold pt-3 pb-5 border-t border-border justify-between px-2">
						<div>Total:</div>
						<div className="flex items-center">
							<IndianRupee width={14} size={14} />
							<span>{totals.total}</span>
						</div>
					</div>
				</div>
				<div className="place-order text-center w-full font-roboto mt-4">
					<Button
						type="button"
						onClick={handleCheckout}
						disabled={isLoading}
						className="w-full border hover:border-border bg-primary border-primary hover:cursor-pointer hover:bg-secondary rounded-md text-white block text-center"
					>
						{isLoading ? (
							<>
								<Loader2Icon className="animate-spin mr-2 inline" size={16} />
								Proceeding to Checkout...
							</>
						) : (
							'Proceed to Checkout'
						)}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CartSummary;
