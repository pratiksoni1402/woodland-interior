'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet';

import {
	BedDouble,
	ChevronDown,
	DoorClosed,
	Menu,
	Sofa,
	TentTree,
} from 'lucide-react';

import UserAccountLink from '@/app/components/header/user';

export default function MobileMenu() {
	const [open, setOpen] = useState(false);

	return (
		<div className="mobile-menu-wrapper">
			<div className="inner-content-wrapper flex items-center">
				<div className="side-menu">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button
								variant="outline triger-button"
								className="!p-0 hover:cursor-pointer"
							>
								<Menu color="#3c2f27" />
							</Button>
						</SheetTrigger>

						<SheetContent>
							<SheetHeader className="border-b border-primary">
								<SheetTitle className="font-crimson sm:text-2xl text-lg text-primary pt-4 pb-2">
									Woodland Interiors
								</SheetTitle>
							</SheetHeader>

							<div className="sheet-body pt-2 font-crimson border-b">
								<div className="nav-list">
									{/* Home */}
									<div className="pb-2 px-4 text-lg text-primary">
										<SheetClose asChild>
											<Link
												href="/"
												className="group hover:underline transition duration-500 text-sm font-roboto"
											>
												Home
											</Link>
										</SheetClose>
									</div>

									{/* Shop Dropdown */}
									<div className="dropdown">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													variant="outline"
													className="pb-1 text-sm font-roboto text-primary bg-transparent border-0 mt-[-13px] hover:bg-transparent group hover:underline font-normal transition duration-500 shadow-none hover:cursor-pointer ml-1"
												>
													Shop
													<ChevronDown />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent className="w-48 rounded-md left-[-20px] top-[-10px] fixed">
												<DropdownMenuGroup>
													<DropdownMenuItem>
														<BedDouble
															className="mr-2 h-4 w-4"
															color="#3c2f27"
														/>
														<Link
															href="/products?category=bedroom"
															className="group text-primary text-sm font-roboto hover:underline transition duration-500"
															onClick={() => setOpen(false)}
														>
															Bedroom
														</Link>
													</DropdownMenuItem>

													<DropdownMenuItem>
														<DoorClosed
															className="mr-2 h-4 w-4"
															color="#3c2f27"
														/>
														<Link
															href="/products?category=dining-tables"
															className="group text-primary text-sm font-roboto hover:underline transition duration-500"
															onClick={() => setOpen(false)}
														>
															Dining Tables
														</Link>
													</DropdownMenuItem>

													<DropdownMenuItem>
														<Sofa className="mr-2 h-4 w-4" color="#3c2f27" />
														<Link
															href="/products?category=sofa-sets"
															className="group text-primary text-sm font-roboto hover:underline transition duration-500"
															onClick={() => setOpen(false)}
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
															className="group text-primary text-sm font-roboto hover:underline transition duration-500"
															onClick={() => setOpen(false)}
														>
															Outdoor
														</Link>
													</DropdownMenuItem>
												</DropdownMenuGroup>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>

									{/* Our Values */}
									<div className="pb-1 px-4 text-lg text-primary">
										<SheetClose asChild>
											<Link
												href="/our-values"
												className="group hover:underline text-sm font-roboto transition duration-500"
											>
												Our Values
											</Link>
										</SheetClose>
									</div>

									{/* Contact */}
									<div className="pb-2 px-4 text-lg text-primary">
										<SheetClose asChild>
											<Link
												href="/contact"
												className="group hover:underline text-sm font-roboto transition duration-500"
											>
												Contact
											</Link>
										</SheetClose>
									</div>
								</div>

								<SheetClose>
									<div className="pr-4" onClick={() => setOpen(false)}>
										<UserAccountLink />
									</div>
								</SheetClose>
							</div>

							<SheetFooter />
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
}
