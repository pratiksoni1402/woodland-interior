import type { Metadata } from 'next';
import { CartView } from '@/features/cart';

export const metadata: Metadata = {
	title: 'Cart | Woodland Interiors',
};

export default function Cart() {
	return <CartView />;
}
