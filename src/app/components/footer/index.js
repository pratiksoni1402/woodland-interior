import React from 'react';
import Link from 'next/link'
import Image from "next/image";
import Logo from '../../../../public/uploads/images/logos/footer.png'
const footer = () => {
  return (
    <div className='footer-section bg-white'>
      <footer className='container'>
        <div className='upper-footer pb-10 sm:pt-20 pt-10 border-b'>
          <div className='upper-footer-wrapper grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-10 lg:justify-around md:justify-evenly'>

            <div className='col lg:order-1 md:order-2 sm:order-2 order-2'>
              <div className=''>
                <Image src={Logo} alt='Woodland Interiors' priority={true} />
              </div>
            </div>

            <div className='col lg:order-2 md:order-1 sm:order-1 order-1'>
              <div className=' text-[#3c2f27] text-sm font-roboto '>
                <h2 className='font-roboto pb-2 font-semibold'>Site Map</h2>
                <ul>
                  <li><Link href='/' className='make-bold-props' title='Home'>Home</Link></li>
                  <li><Link href='/shop/sofa-sets' className='make-bold-props' title='Shop'>Shop</Link></li>
                  <li><Link href='/contact' className='make-bold-props' title='Contact us'>Contact us</Link></li>
                </ul>
              </div>
            </div>

            <div className='col lg:order-2 md:order-1 sm:order-1 order-1'>
              <div className=' text-[#3c2f27] text-sm font-roboto '>
                <h2 className='font-roboto pb-2 font-semibold'>Complaince</h2>
                <ul>
                  <li><Link href='/change-logs' className='make-bold-props' title='Change Logs'>Change Logs</Link></li>
                  <li><Link href='/privacy-policy' className='make-bold-props' title='Privacy Policy'>Privacy Policy</Link></li>
                  <li><Link href='/terms-conditions' className='make-bold-props' title='Terms & Condition'>Terms & Condition</Link></li>
                </ul>
              </div>
            </div>

            <div className='col lg:order-2 md:order-1 sm:order-1 order-1'>
              <div className=' text-[#3c2f27] text-sm font-roboto '>
                <h2 className='font-roboto pb-2 font-semibold'>Useful Links</h2>
                <ul>
                  <li><Link href='#' className='make-bold-props' title='Exporters'>Exporters</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Buy in Bulk'>Buy in Bulk</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Hotel Furniture'>Hotel Furniture</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Delivery Location'>Delivery Location</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Custom Furniture'>Custom Furniture</Link></li>
                </ul>
              </div>
            </div>

            <div className='col lg:order-2 md:order-1 sm:order-1 order-1'>
              <div className=' text-[#3c2f27] text-sm font-roboto '>
                <h2 className='font-roboto pb-2 font-semibold'>Partners</h2>
                <ul>
                  <li><Link href='#' className='make-bold-props' title='Design Service'>Design Service</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Design Partners'>Design Partners</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Become a Franchise'>Become a Franchise</Link></li>
                </ul>
              </div>
            </div>

            <div className='col lg:order-2 md:order-1 sm:order-1 order-1'>
              <div className=' text-[#3c2f27] text-sm font-roboto'>
                <h2 className='font-roboto pb-2 font-semibold'>Explore More</h2>
                <ul>
                  <li><Link href='#' className='make-bold-props' title='Blog'>Blog</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Visit Us'>Visit Us</Link></li>
                  <li><Link href='#' className='make-bold-props' title='Gift Cards'>Gift Cards</Link></li>
                  <li><Link href='# ' className='make-bold-props' title='Refer & Earn'>Refer & Earn</Link></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;