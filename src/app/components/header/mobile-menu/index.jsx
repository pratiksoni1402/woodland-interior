'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Menu } from 'lucide-react';
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { BedDouble } from 'lucide-react';
import { DoorClosed } from 'lucide-react';
import { Sofa } from 'lucide-react';
import { TentTree } from 'lucide-react';

import CartLink from '@/app/components/header/cart-link';
import WishlistLink from '@/app/components/header/wishlist-link';
import UserAccountLink from '@/app/components/header/user';
import HamburgerMenuIcon from '@/icons/hamburger-menu';
export default function MobileMenu() {
	return (
		<div className="mobile-menu-wrapper">
			<div className="inner-content-wrapper flex items-center">
				<div className="side-menu">
					<Sheet className="">
						<SheetTrigger asChild>
							<Button variant="outline triger-button" className="px-0">
								<HamburgerMenuIcon size={32} />
							</Button>
						</SheetTrigger>
						<SheetContent className="">
							<SheetHeader className="border-b border-[#3c2f27]">
								<SheetTitle className="font-crimson sm:text-2xl text-lg text-[#3c2f27] pt-4 pb-2">
									Woodland Interiors
								</SheetTitle>
							</SheetHeader>
							<div className="sheet-body pt-2 font-crimson border-b">
								<div className="nav-list">
									<div className="pb-2 px-4 text-lg text-[#3c2f27]">
										<Link
											href="/"
											className="group hover:underline transition duration-500 text-sm font-roboto"
										>
											Home
										</Link>
									</div>
									<div className="dropdown">
										<DropdownMenu className="">
											<DropdownMenuTrigger asChild>
												<Button
													variant="outline"
													className="pb-1  text-sm font-roboto text-[#3c2f27] bg-transparent border-0 mt-[-13px] hover:bg-transparent group hover:underline font-normal transition duration-500"
												>
													Shop
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent className="w-48 bg-[#faf2ec] rounded-none left-[-20px] top-[-10px] fixed">
												<DropdownMenuGroup>
													<DropdownMenuItem className=" hover:bg-transparent">
														<BedDouble
															className="mr-2 h-4 w-4"
															color="#3c2f27"
														/>
														<Link
															href="/products?category=bedroom"
															className="group text-[#3c2f27] text-sm font-roboto hover:underline transition duration-500"
														>
															Bedroom
														</Link>
													</DropdownMenuItem>
													<DropdownMenuItem className="">
														<DoorClosed
															className="mr-2 h-4 w-4"
															color="#3c2f27"
														/>
														<Link
															href="/products?category=dining-tables"
															className="group text-[#3c2f27] text-sm font-roboto hover:underline transition duration-500"
														>
															Dining Tables
														</Link>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Sofa className="mr-2 h-4 w-4" color="#3c2f27" />
														<Link
															href="/products?category=sofa-sets"
															className="group text-[#3c2f27] text-sm font-roboto hover:underline transition duration-500"
														>
															Sofa Sets
														</Link>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<TentTree
															className="mr-2 h-4 w-4"
															color="#3c2f27"
														/>
														<Link
															href="/products?category=outdoor"
															className="group text-[#3c2f27] text-sm font-roboto hover:underline transition duration-500"
														>
															Outdoor
														</Link>
													</DropdownMenuItem>
												</DropdownMenuGroup>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
									<div className="pb-1 px-4  text-lg text-[#3c2f27]">
										<Link
											href="/our-values"
											className="group hover:underline text-sm font-roboto transition duration-500"
										>
											Our Values
										</Link>
									</div>

									<div className="pb-2 px-4  text-lg text-[#3c2f27]">
										<Link
											href="/contact"
											className="group hover:underline text-sm font-roboto transition duration-500"
										>
											Contact
										</Link>
									</div>
								</div>
								<div className="pr-4">
									<UserAccountLink />
								</div>
							</div>
							<SheetFooter></SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
}
