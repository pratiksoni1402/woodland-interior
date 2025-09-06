import Link from 'next/link';
import Logout from '@/app/components/logout';
export default function SideMenu() {
	return (
		<div className="h-full">
			<div className="flex flex-col border border-primary w-max p-5 rounded-md">
				<Link href="/my-account/my-profile" className="w-max pb-2">
					My Profile
				</Link>
				<Link href="/my-account/my-wishlist" className="w-max pb-2">
					My Wishlist
				</Link>
				<Link href="/my-account/order-history" className="w-max pb-2">
					Order History
				</Link>
				<Link href="/my-account/update-password" className="w-max pb-2">
					Update Password
				</Link>
				<Logout />
			</div>
		</div>
	);
}
