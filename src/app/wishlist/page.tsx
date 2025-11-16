import type { Metadata } from 'next'
import WishlistItems from '@/app/wishlist/_components'

export const metadata: Metadata = {
	title: 'Wishlist | Woodland Interiors',
}

export default function Wislist() {
	return <WishlistItems />
}
