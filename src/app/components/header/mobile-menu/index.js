import React from 'react'
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "./../../ui/button";

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
} from "../../ui/dropdown-menu"

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
} from "../../ui/sheet"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./../../../components/ui/avatar"
import { BedDouble } from 'lucide-react';
import { DoorClosed } from 'lucide-react';
import { Sofa } from 'lucide-react';
import { TentTree } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function MobileMenu() {
  const { isPending, data: count, error } = useQuery({
    queryKey: ['totalcount'],
    queryFn: () =>
      axios.get('/api/cart-items/get-count')
        .then((response) => {
          return response.data.productcount
        })

  });

  const { pending, data: wishlisttotal, iserror } = useQuery({
    queryKey: ['wishlistcount'],
    queryFn: () =>
      axios.get('/api/wishlist-items/get-count')
        .then((response) => {
          return response.data.totalcount
        })
  });

  return (
    <div className='mobile-menu-wrapper'>
      <div className='inner-content-wrapper flex items-center'>
        <div className='inner-wrapper flex'>
          <div className='pr-4'>
            <Link href="/wishlist" className='relative'>
              <Heart />
              <div className='absolute text-[10px] text-center top-[-10px] right-[-9px] bg-[#3c2f27] text-white rounded-full w-5 h-5 p-[3px]'>{wishlisttotal}</div>

            </Link>
          </div>
          <div className='pr-4'>
            <Link href="/cart" className='relative'>
              <ShoppingCart />
              <div className='absolute text-[10px] text-center top-[-10px] right-[-9px] bg-[#3c2f27] text-white rounded-full w-5 h-5 p-[3px]'>{count}</div>

            </Link>
          </div>
          <div className='pr-4'>
            <Link href="/auth">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
        <div className='side-menu'>
          <Sheet className=''>
            <SheetTrigger asChild>
              <Button variant="outline triger-button" className='px-0'><Menu /></Button>
            </SheetTrigger>
            <SheetContent className='bg-[#faf2ec]'>
              <SheetHeader className='border-b border-[#3c2f27]'>
                <SheetTitle className='font-crimson text-2xl text-[#3c2f27] pt-4 pb-2'>Woodland Interiors</SheetTitle>
              </SheetHeader>
              <div className="sheet-body pt-10 font-crimson border-b">
                <div className='nav-list'>
                  <div className='pb-2 px-4 text-lg text-[#3c2f27]'>
                    <Link href='/' className="group hover:underline transition duration-500 text-sm font-roboto">
                      Home
                    </Link>
                  </div>
                  <div className='dropdown'>
                    <DropdownMenu className=''>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='pb-1  text-sm font-roboto text-[#3c2f27] bg-transparent border-0 mt-[-13px] hover:bg-transparent group hover:underline transition duration-500'>
                          Shop
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-[#faf2ec] rounded-none left-[-20px] top-[-10px] fixed">
                        <DropdownMenuGroup>
                          <DropdownMenuItem className=' hover:bg-transparent'>
                            <BedDouble className="mr-2 h-4 w-4" />
                            <Link href='/shop/bedroom' className="group  text-sm font-roboto hover:underline transition duration-500">
                              Bedroom
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className=''>
                            <DoorClosed className="mr-2 h-4 w-4" />
                            <Link href='/shop/dining-tables' className="group text-sm font-roboto hover:underline transition duration-500">
                              Dining Tables
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Sofa className="mr-2 h-4 w-4" />
                            <Link href='/shop/sofa-sets' className="group  text-sm font-roboto hover:underline transition duration-500">
                              Sofa Sets
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TentTree className="mr-2 h-4 w-4" />
                            <Link href='/shop/outdoor' className="group text-sm font-roboto hover:underline transition duration-500">
                              Outdoor
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className='pb-1 px-4  text-lg text-[#3c2f27]'>
                    <Link href='/stories' className="group hover:underline text-sm font-roboto transition duration-500">
                      Stories
                    </Link>
                  </div>
                  <div className='pb-1 px-4  text-lg text-[#3c2f27]'>
                    <Link href='/about-us' className="group hover:underline text-sm font-roboto transition duration-500">
                      About Us
                    </Link>
                  </div>
                  <div className='pb-2 px-4  text-lg text-[#3c2f27]'>
                    <Link href='/contact' className="group hover:underline text-sm font-roboto transition duration-500">
                      Contact
                    </Link>
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
