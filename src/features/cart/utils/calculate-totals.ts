import type { CartItem, CartTotals } from '../types';

export function calculateCartTotals(items: CartItem[] = []): CartTotals {
	const total = items.reduce((acc, item) => {
		const price = item.products?.price ?? 0;
		return acc + price * item.quantity;
	}, 0);

	const taxamount = Math.round((total * 9) / 100);
	const subtotal = total - taxamount * 2;

	return {
		subtotal: Math.max(0, subtotal),
		cgst: taxamount,
		sgst: taxamount,
		total,
	};
}
