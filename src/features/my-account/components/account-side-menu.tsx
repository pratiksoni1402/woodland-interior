'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { LogoutButton } from '@/features/auth'

const userMenu = [
	{ name: 'My Profile', url: '/my-account' },
	{ name: 'My Wishlist', url: '/my-account/my-wishlist' },
	{ name: 'Order History', url: '/my-account/order-history' },
	{ name: 'Update Password', url: '/my-account/update-password' },
]

export function AccountSideMenu() {
	const pathname = usePathname()

	return (
		<div className="h-full text-primary font-roboto font-medium">
			<div className="flex lg:flex-col flex-row border border-border lg:p-3 p-1 rounded-md lg:justify-start justify-evenly lg:gap-0 md:gap-1">
				{userMenu.map((menuItem) => (
					<Link
						key={menuItem.url}
						href={menuItem.url}
						className={`flex py-1 my-1 lg:justify-between md:justify-center sm:justify-center justify-center items-center px-2 border border-transparent rounded-md lg:leading-7 w-full ${
							menuItem.url === pathname
								? 'bg-primary text-white'
								: 'hover:bg-secondary hover:text-white'
						}`}
					>
						<span className="md:text-sm sm:text-xs text-xs lg:text-start text-center">
							{menuItem.name}
						</span>
						<span className="lg:inline hidden">
							<ChevronRight />
						</span>
					</Link>
				))}

				<div className="lg:block hidden">
					<LogoutButton />
				</div>
			</div>
		</div>
	)
}
