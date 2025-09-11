'use client';
import Link from 'next/link';
import React from 'react';
import SearchInput from '@/app/components/header/search-bar';
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
import Logo from '@/icons/header-logo';
const Navbar = () => {
	return (
		<div className="navigation-bar  bg-background h-14 py-1.5 sticky top-0 z-10 border-b border-border">
			<div className=" container navbar-wrapper grid lg:grid-cols-3 justify-between items-center ">
				<div className="">
					<SearchInput />
				</div>

				<div className="flex justify-center">
					<Link href="/" className="logo w-[60px] h-12 mt-[-3px]">
						<Logo width={70} height={70} />
					</Link>
				</div>

				<div>
					<div className="menu lg:block md:hidden sm:hidden hidden">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className="text-lg hover:bg-background focus:bg-background"
									>
										<Link href="/">Home</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:cursor-pointer font-crimson font-medium text-lg leading-7">
										Shop
									</NavigationMenuTrigger>
									<NavigationMenuContent className="bg-background">
										<ul className="nested-list  py-2 w-40">
											<li>
												<Link href="/products?category=bedroom">Bedroom</Link>
											</li>
											<li>
												<Link href="/products?category=dining-tables">
													Dining Tables
												</Link>
											</li>
											<li>
												<Link href="/products?category=sofa-sets">
													Sofa Sets
												</Link>
											</li>
											<li>
												<Link href="/products?category=outdoor">Outdoor</Link>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								{/*<NavigationMenuItem>*/}
								{/*	<NavigationMenuLink*/}
								{/*		asChild*/}
								{/*		className="text-lg hover:bg-background focus:bg-background"*/}
								{/*	>*/}
								{/*		<Link href="/our-values">Our Values</Link>*/}
								{/*	</NavigationMenuLink>*/}
								{/*</NavigationMenuItem>*/}
								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className="text-lg leading-7 hover:bg-background focus:bg-background"
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
		</div>
	);
};
export default Navbar;
