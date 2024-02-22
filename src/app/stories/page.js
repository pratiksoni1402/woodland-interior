export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import './style.css'
export default function Stories() {
  return (
    <div className='stories'>
      {/* Banner Image Section Start */}
      <section className="banner-image-wrapper">
        <div
          className="banner-image"
          style={{
            backgroundImage:
              "url('/uploads/images/stories/stories.jpg')",
            width: "100%",
            height: "85vh",
            marginTop: "-80px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className='container'>
          <div className="banner-text-wrapper">
            <div className="banner-text">
              <span>Stories</span>
            </div>
          </div>
        </div>
      </section>
      {/* End */}
      <section className='browse-by-category'>
        <div className='container'>
          <div className='inspiration'>
            Latest news, stories and inspiration from inside and outside the workshop
          </div>
          <div className='heading'>
            Browse by category
          </div>
          <div className='categories'>
            <div className='grid grid-cols-12 gap-5'>
              <div className='xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-12'>
                <div className='wrapper'>
                  <Link href='/'>Sustainability </Link>
                </div>
              </div>
              <div className='xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-12'>
                <div className='wrapper'>
                  <Link href='/'>Updates</Link>
                </div>
              </div>
              <div className='xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-12'>
                <div className='wrapper'>
                  <Link href='/'>Workshop</Link>
                </div>
              </div>
              <div className='xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-12'>
                <div className='wrapper'>
                  <Link href='/'>Advice</Link>
                </div>
              </div>
              <div className='xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-12'>
                <div className='wrapper'>
                  <Link href='/'>Journal</Link>
                </div>
              </div>
              <div className='xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-12'>
                <div className='wrapper'>
                  <Link href='/'>Case Studies</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='product-listing'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/backyard.jpg' alt='image'  width={500} height={500}  />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/dining-room.jpg' alt='image'  width={500} height={500} />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/hall.jpg' alt='image' width={500} height={500} />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/kitchen.jpg' alt='image' width={500} height={500}  />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/living-room.jpg' alt='image' width={500} height={500}  />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d,Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/office-room.jpg' alt='image' width={500} height={500}  />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/open-wardrobe.jpg' alt='image'  width={500} height={500} />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/study-table.jpg' alt='image'  width={500} height={500} />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 sm:col-span-6 col-span-12'>
              <div className='product-wrapper py-4'>
                <div className='image'>
                  <Image src='/uploads/images/stories/study-table.jpg' alt='image' width={500} height={500}  />
                  <div className='case-studies'>CASE STUDIES</div>
                </div>
                <div className='content-wrapper'>
                  <div className='description'>
                    Go Bespoke: Val-d’Isère x Dalrymple Studio
                  </div>
                  <div className='read-more'>
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section */}
      <section className='study-wooden-table'>
        <div className='hero-text d-block'>
          <h1>Our Journal</h1>
          <span>Discover the latest stories from inside the workshop.</span>
          <div className='button'>
            {/* <button type='button'>FIND OUT MORE</button> */}
          </div>
        </div>
        <div className='hero-image d-block' style={{
          height: "80vh",
          width: "100%",
          backgroundImage:
            'url("/uploads/images/stories/study-wooden-table.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundAttachment: "fixed"
        }} >
        </div>
        {/* Banner Section End */}
      </section>
      <section className='follow-us'>
        <div className='social-link'>
          Follow us @ <a href="/" target='blank'>Woodland Interiors</a>
        </div>
      </section>
      <section className='newsletter'>
        <div className='content-wrapper flex'>
          <div className='left-section'>
            <div className='image-wrapper'>
              <Image src='/uploads/images/stories/round-table.jpg' alt='image'  width={1000} height={500} />
            </div>
          </div>
          <div className='right-section'>
            <div className='wrapper'>
              <div className='heading'>
                Keep up to date
              </div>
              <div className='description'>
                Want to keep up to date with all our latest news and content? Then, why not sign-up to our newsletter.
              </div>
              <div className='subscribe'>
                <form action="">
                  <input type="text" className='d-block' />
                  <button type=''>SUBSCRIBE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
