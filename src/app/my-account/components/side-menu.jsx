import Link from 'next/link';
export default function SideMenu() {
	return (
		<div className="flex flex-col">
			<Link href="/my-account/my-profile">My Profile</Link>
			<Link href="/my-account/order-history">Order History</Link>
			<Link href="/my-account/my-wishlist">My Wishlist</Link>
			<Link href="/my-account/update-password">Update Password</Link>
		</div>
	);
}
