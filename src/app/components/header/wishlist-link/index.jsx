import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { Heart } from 'lucide-react';
export default function WishlistLink() {
	const { data: wishlistTotal } = useQuery({
		queryKey: ['wishlistcount'],
		queryFn: () =>
			axios
				.get('/api/wishlist-items/get-count')
				.then((response) => {
					return response.data.totalcount;
				})
				.catch((error) => {
					console.log('Error in count', error);
				}),
	});
	return (
		<Link href="/wishlist" className="relative">
			<Heart />
			{wishlistTotal > 0 ? (
				<div className="absolute text-[10px] text-center top-[-10px] right-[-9px] bg-[#3c2f27] text-white rounded-full w-5 h-5 p-[3px]">
					{wishlistTotal}
				</div>
			) : (
				''
			)}
		</Link>
	);
}
