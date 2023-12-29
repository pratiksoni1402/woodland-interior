import React from 'react'
import Link from 'next/link'
import './Menu.css'
export default function Menu() {
  return (
    <div className='menu-section'>
        <ul >
            <li><Link href='/'>Edit Profile</Link></li>
            <li><Link href='/'>My Wishlist</Link></li>
            <li><Link href='/'>Order History</Link></li>
            <li><Link href='/'>Change Password</Link></li>
            <li><Link href='/'>Logout</Link></li>
        </ul>
    </div>
  )
}
