'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logout from '@/app/auth/logout';
import { ChevronRight } from 'lucide-react';

export default function SideMenu() {
	const userMenu = [
		{
			name: 'My Profile',
			url: '/my-account/my-profile',
			icon: <ChevronRight />,
		},
		{
			name: 'My Wishlist',
			url: '/my-account/my-wishlist',
			icon: <ChevronRight />,
		},
		{
			name: 'Order History',
			url: '/my-account/order-history',
			icon: <ChevronRight />,
		},
		{
			name: 'Update Password',
			url: '/my-account/update-password',
			icon: <ChevronRight />,
		},
	];
	const pathName = usePathname();
	return (
		<div className="h-full">
			<div className="flex flex-col border border-primary p-5 rounded-md">
				{userMenu.map((menuItems, index) => (
					<Link
						key={index}
						href={menuItems.url}
						className={`flex py-1 justify-between items-center mb-3 px-2 border border-transparent rounded-md 
    				${menuItems.url === pathName ? 'bg-[#3c2f27] text-white' : 'hover:bg-gray-100'}
  `}
					>
						<span>{menuItems.name}</span>
						<span>{menuItems.icon}</span>
					</Link>
				))}

				<div className="flex justify-between items-center mb-3 px-2 border border-transparent rounded-md hover:bg-gray-100">
					<Logout />
				</div>
			</div>
		</div>
	);
}
