import React from 'react';
import Link from 'next/link'
import Image from "next/image";
import Logo from '../../../../public/uploads/images/logos/footer.png'
const footer = () => {
    return (
        <div className='footer-section bg-white'>
            <footer className='container'>
                <div className='upper-footer pb-10 pt-20 border-b'>
                    <div className='upper-footer-wrapper grid lg:grid-cols-4 md:grid-cols-3 gap-10 lg:justify-between md:justify-evenly'>
                        <div className='flex items-center text-[#54595f] text-sm font-roboto'>
                            <ul>
                                <li><Link href='/stories'>Stories</Link></li>
                                <li><Link href='/about-us'>About</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                                <li><Link href='/'>Home</Link></li>
                            </ul>
                        </div>
                        <div className='flex items-center text-[#54595f] text-sm font-roboto'>
                            <ul>
                                <li>Our Workshop</li>
                                <li>Sardarpura B Road</li>
                                <li>Near Goru Sweets</li>
                                <li>Pincode - 342008</li>
                            </ul>
                        </div>
                        <div className='flex items-center text-[#54595f] text-sm font-roboto'>
                            <ul>
                                <li>Timing</li>
                                <li>Monday to Friday - 9AM - 9PM</li>
                                <li>Satuday - 9AM - 1PM</li>
                                <li>Sunday Closed</li>
                            </ul>
                        </div>
                        <div className='flex lg:justify-end sm:justify-center lg:col-span-1 sm:col-span-3'>
                            <Image src={Logo} alt='Woodland Interiors' />
                        </div>
                    </div>
                </div>
                <div className='lower-footer pt-2 pb-4'>
                    <div className='lower-footer-wrapper gap-3 grid md:grid-cols-2 grid-cols-1 text-xs justify-between'>
                        <div>
                            © Copyright Woodland Interiors Pvt Ltd. All rights reserved.
                        </div>
                        <div className='flex gap-4 md:justify-end justify-start text-xs'>
                            <div>Terms & Condition</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;