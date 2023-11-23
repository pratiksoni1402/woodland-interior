import React from 'react'
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { UserCircle2 } from 'lucide-react';
import './style.css'
import { Button } from "@/components/ui/button"
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
export default function MobileMenu() {
    return (
        <div className='mobile-menu-wrapper'>
            <div className='inner-content-wrapper flex items-center'>
                <div className='inner-wrapper flex'>
                    <div>
                        <Link href="/home">
                            <Heart />
                        </Link>
                    </div>
                    <div>
                        <Link href="/home">
                            <ShoppingCart />
                        </Link>
                    </div>
                    <div>
                        <Link href="/home">
                            <UserCircle2 />
                        </Link>
                    </div>
                </div>
                <div className='side-menu'>
                    <Sheet className='bg-[#faf2ec]'>
                        <SheetTrigger asChild>
                            <Button variant="outline triger-button" className='px-0'><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Woodland Interiors</SheetTitle>
                            </SheetHeader>
                            <div className="sheet-body">
                                <div className='nav-list'>
                                    <div>
                                        <Link href='/'>Home</Link>
                                    </div>
                                    <div className='dropdown'>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline">Shop</Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        <User className="mr-2 h-4 w-4" />
                                                        <span>Seating</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <CreditCard className="mr-2 h-4 w-4" />
                                                        <span>Desks</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                                <DropdownMenuGroup>
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger>
                                                            <UserPlus className="mr-2 h-4 w-4" />
                                                            <span>Tables</span>
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem>
                                                                    <Mail className="mr-2 h-4 w-4" />
                                                                    <span>Lorem</span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <MessageSquare className="mr-2 h-4 w-4" />
                                                                    <span>Lorem</span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <PlusCircle className="mr-2 h-4 w-4" />
                                                                    <span>Lorem</span>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                    <DropdownMenuItem>
                                                        <Plus className="mr-2 h-4 w-4" />
                                                        <span>Beds</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <Github className="mr-2 h-4 w-4" />
                                                    <span>Kitchen</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <LifeBuoy className="mr-2 h-4 w-4" />
                                                    <span>Accessories</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem >
                                                    <Cloud className="mr-2 h-4 w-4" />
                                                    <span>All</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <div>
                                        <Link href='/'>Build Your Own</Link>
                                    </div>
                                    <div>
                                        <Link href='/'>Stories</Link>
                                    </div>
                                    <div>
                                        <Link href='/'>About Us</Link>
                                    </div>
                                    <div>
                                        <Link href='/'>Contact</Link>
                                    </div>
                                </div>
                            </div>
                            <SheetFooter>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </div>
    )
}
