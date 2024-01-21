'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import MobileMenu from "./mobile-menu"
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from "./../ui/avatar"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const Navbar = () => {
   const { isPending, data:count, error } = useQuery({
      queryKey: ['totalcount'],
      queryFn: () =>
         axios.get('/api/cart-items/get-count')
         .then((response) =>{
            console.log(response.data.productcount)
            return response.data.productcount
         })

   });

   const {pending, data:wishlisttotal, iserror} =useQuery({
      queryKey: ['wishlistcount'],
      queryFn: () =>
         axios.get('/api/wishlist-items/get-count')
         .then((response) => {
            console.log(response.data.totalcount)
            return response.data.totalcount
         })
   })
   
   return (
      <div className="navigation-bar bg-[#faf2ec] h-[75px] py-4 sticky top-0 z-10">

         <div className=" container navbar-wrapper flex justify-between items-center ">
            <div className="logo">
               <Image src="/uploads/images/logos/logo.png" alt="logo" width={208} height={30} />
            </div>
            <div className="menu lg:block md:hidden sm:hidden hidden">
               <NavigationMenu>
                  <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link href="/" className="text-lg leading-7">
                              Home
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuTrigger className='bg-transparent hover:bg-transparent text-lg leading-7'>Shop</NavigationMenuTrigger>
                        <NavigationMenuContent>
                           <ul className="nested-list bg-[#faf2ec] px-4 py-2 w-40">
                              <li><Link href='/shop/bedroom'>Bedroom</Link></li>
                              <li><Link href='/shop/dining-tables'>Dining Tables</Link></li>
                              <li><Link href='/shop/sofa-sets'>Sofa Sets</Link></li>
                              <li><Link href='/shop/outdoor'>Outdoor</Link></li>
                           </ul>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link href="/about-us" className="text-lg leading-7">
                              About Us
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild className="text-lg leading-7">
                           <Link href="/contact">
                              Contact
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link href="/wishlist" className='relative'>
                              <Heart />
                              <div className='absolute text-[10px] text-center top-[-10px] right-[-9px] bg-[#3c2f27] text-white rounded-full w-5 h-5 p-[3px]'>{wishlisttotal}</div>
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link href="/cart" className='relative'>
                              <ShoppingCart />
                              <div className='absolute text-[10px] text-center top-[-10px] right-[-9px] bg-[#3c2f27] text-white rounded-full w-5 h-5 p-[3px]'>{count}</div>
                           </Link>
                        </NavigationMenuLink>
                     </NavigationMenuItem>
                     <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                           <Link href="/auth">
                              <Avatar>
                                 <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                 <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                           </Link>
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