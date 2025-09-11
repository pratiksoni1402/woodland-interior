import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import HeartIcon from '@/icons/wishlist';
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
			<HeartIcon />
			{wishlistTotal > 0 ? (
				<div className="absolute text-sm text-center top-[1px] right-0.5 w-5 h-5 ">
					{wishlistTotal}
				</div>
			) : (
				''
			)}
		</Link>
	);
}
