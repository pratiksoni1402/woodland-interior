'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logout from '@/app/auth/logout';
import { ChevronRight } from 'lucide-react';

export default function SideMenu() {
	const userMenu = [
		{
			name: 'My Profile',
			url: '/my-account',
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
			<div className="flex lg:flex-col flex-row border border-border lg:p-5 p-0 rounded-md lg:justify-start justify-evenly">
				{userMenu.map((menuItems, index) => (
					<Link
						key={index}
						href={menuItems.url}
						className={`flex py-1 justify-between items-center px-2 border border-transparent rounded-md lg:text-base lg:leading-7 text-sm leading-[18px] w-full
    				${menuItems.url === pathName ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}
  `}
					>
						<span>{menuItems.name}</span>
						<span className="lg:inline hidden">{menuItems.icon}</span>
					</Link>
				))}

				<div className="flex justify-between items-center lg:mb-3 mb-0 px-2 border border-transparent rounded-md hover:bg-gray-100 ">
					<Logout />
				</div>
			</div>
		</div>
	);
}
