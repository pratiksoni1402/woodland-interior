'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import MobileMenu from './mobile-menu';
import CartLink from '@/app/components/header/cart-link';
import WishlistLink from '@/app/components/header/wishlist-link';
import UserAccountLink from '@/app/components/header/user';
const Navbar = () => {
	return (
		<div className="navigation-bar  bg-primary h-[75px] py-4 sticky top-0 z-10">
			<div className=" container navbar-wrapper flex justify-between items-center ">
				<div className="logo">
					<Link href="/">
						<Image
							src="/uploads/images/logos/logo.png"
							alt="logo"
							width={208}
							height={30}
							priority={true}
						/>
					</Link>
				</div>
				<div className="menu lg:block md:hidden sm:hidden hidden">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className="text-lg hover:bg-[#faf2ec]"
								>
									<Link href="/">Home</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:cursor-pointer font-crimson font-medium text-lg leading-7">
									Shop
								</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-[#faf2ec]">
									<ul className="nested-list  py-2 w-40">
										<li>
											<Link href="/shop/bedroom">Bedroom</Link>
										</li>
										<li>
											<Link href="/shop/dining-tables">Dining Tables</Link>
										</li>
										<li>
											<Link href="/shop/sofa-sets">Sofa Sets</Link>
										</li>
										<li>
											<Link href="/shop/outdoor">Outdoor</Link>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className="text-lg hover:bg-[#faf2ec]"
								>
									<Link href="/our-values">Our Values</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className="text-lg leading-7 hover:bg-primary-foreground hover:bg-[#faf2ec]"
								>
									<Link href="/contact">Contact</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<WishlistLink />
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<CartLink />
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<UserAccountLink />
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="mobile-menu lg:hidden md:block sm:block">
					<MobileMenu />
				</div>
			</div>
		</div>
	);
};
export default Navbar;
