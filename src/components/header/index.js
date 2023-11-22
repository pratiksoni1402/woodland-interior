'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { UserCircle2 } from 'lucide-react';
import './style.css'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const Navbar = () => {

    return (
        <div className="navigation-bar bg-[#e6ccb2] py-3">

            <div className=" container navbar-wrapper flex justify-between ">
                <div className="logo">
                    <Image src="/images/logo.png" alt="logo" width={50} height={30} />
                </div>
                <div className="menu">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/home">
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='bg-transparent hover:bg-transparent'>Shop</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="nested-list bg-white px-4 py-2 w-40">
                                        <li><Link href='#home'>Seating</Link></li>
                                        <li><Link href='#home'>Desks</Link></li>
                                        <li><Link href='#home'>Table</Link></li>
                                        <li><Link href='#home'>Beds</Link></li>
                                        <li><Link href='#home'>Kitchen</Link></li>
                                        <li><Link href='#home'>Accessories</Link></li>
                                        <li><Link href='#home'>All</Link></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink>
                                    <Link href="/home" asChild>
                                        Build Your Own
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink>
                                    <Link href="/home" asChild>
                                        Stories
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/home">
                                        About Us
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/home">
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/home">
                                        <Heart />
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/home">
                                        <ShoppingCart />
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/home">
                                        <UserCircle2 />
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
            </div>
        </div>
    )
}
export default Navbar

const ListItem = React.forwardRef <
    React.ElementRef < "a" >
    React.ComponentPropsWithoutRef < "a" >> (({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    })
// ListItem.displayName = "ListItem"