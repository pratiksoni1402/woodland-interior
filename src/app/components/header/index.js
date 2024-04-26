'use client'
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { User } from 'lucide-react';
import React, { useEffect } from "react";
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import MobileMenu from "./mobile-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"
import {
  Avatar,
  AvatarFallback,

} from "./../ui/avatar"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const Navbar = () => {

  const { isPending, data: count, error } = useQuery({
    queryKey: ['totalcount'],
    queryFn: () =>
      axios.get('/api/cart-items/get-count')
        .then((response) => {
          return response.data.productcount
        })
        .catch((error) => {
          console.log('Error in count', error)
        })

  });

  const { pending, data: wishlisttotal, iserror } = useQuery({
    queryKey: ['wishlistcount'],
    queryFn: () =>
      axios.get('/api/wishlist-items/get-count')
        .then((response) => {
          return response.data.totalcount
        })
        .catch((error) => {
          console.log('Error in count', error)
        })
  });

  const { data: status } = useQuery({
    queryKey: ['loginCheck'],
    queryFn: () =>
      axios.post('/api/auth-check')
        .then((response) => {
          console.log('This is user status in client', response.data.userstatus);
          return response.data.userstatus
        })
        .catch((error) => {
          console.log("Error occured", error)
        })
  })

  const { data: sessionData } = useQuery({
    queryKey: ['checkSession'],
    queryFn: () =>
      axios.get('/api/get-sessiondata')
        .then((response) => {
          console.log('data', response.data.getSessionData)
          return response.data.getSessionData 
        })
        .catch((error) => {
          console.log("Error occured", error)
        })
  })

  const firstNameChar = sessionData?.user_details?.firstname || null
  const lastNameChar = sessionData?.user_details?.lastname || null
  const concatenation = firstNameChar?.charAt(0) + '' + lastNameChar?.charAt(0);
  const result = concatenation.toUpperCase();
  return (
    <div className="navigation-bar bg-[#faf2ec] h-[75px] py-4 sticky top-0 z-10">

      <div className=" container navbar-wrapper flex justify-between items-center ">
        <div className="logo">
          <Link href='/'>
            <Image src="/uploads/images/logos/logo.png" alt="logo" width={208} height={30} priority={true} />
          </Link>
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
                  <ul className="nested-list bg-[#faf2ec] py-2 w-40">
                    <li><Link href='/shop/bedroom'>Bedroom</Link></li>
                    <li><Link href='/shop/dining-tables'>Dining Tables</Link></li>
                    <li><Link href='/shop/sofa-sets'>Sofa Sets</Link></li>
                    <li><Link href='/shop/outdoor'>Outdoor</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/stories" className="text-lg leading-7">
                    Stories
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-lg leading-7">
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
                  {
                    status == 1 ? (
                      <Link href="/my-account">
                        <Avatar className='text-[#3c2f27]'>
                          <AvatarFallback>{result}</AvatarFallback>
                        </Avatar>
                      </Link>
                    ) : (
                      <Link href="/auth/login">
                        <User />
                      </Link>
                    )
                  }
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