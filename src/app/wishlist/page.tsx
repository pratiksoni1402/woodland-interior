import type { Metadata } from 'next';
import { WishlistView } from '@/features/wishlist';

export const metadata: Metadata = {
	title: 'Wishlist | Woodland Interiors',
};

export default function Wishlist() {
	return <WishlistView />;
}
