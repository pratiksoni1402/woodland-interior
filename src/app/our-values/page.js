export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import React from 'react';

export default function Stories() {
  return (
    <div className='stories bg-[#faf2ec]'>
      {/* Banner Image Section Start */}
      <section className="banner-image-wrapper">
        <div
          className="banner-image"
          style={{
            backgroundImage:
              "url('/uploads/images/our-values/banner.avif')",
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
              <span>good design</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='content-wrapper md:w-3/4 sm:w-full w-full mx-auto mt-10'>
            <h1 className='font-roboto text-[#3c2f27] text-xl leading-10 text-center'>Your home is nothing if not personal. At Woodland Interiors, we are here to help you create a space that reflects you and what you love. That means forward-thinking, problem-solving design that unites value, quality and responsible manufacturing. Because you should feel good about your home—and how it comes together.</h1>
          </div>
          <div className='description my-10'>
            <div className='grid grid-cols-4 md:gap-5 sm:gap-3 gap-3'>
              <div className='md:col-span-1 sm:col-span-2 col-span-2 md:border-r sm:border-b border-b border-[#3c2f27]'>

                <div className='details md:w-2/4 sm:w-full w-full  mx-auto text-[#3c2f27] text-center pb-3'>
                  <h2 className='font-crimson font-semibold text-4xl'>95%</h2>
                  <p className='text-base font-roboto'>of our products are designed in-house for style & quality you wont find anywhere else.</p>
                </div>
              </div>
              <div className='md:col-span-1 sm:col-span-2 col-span-2 md:border-r sm:border-b border-b border-[#3c2f27]'>
                <div className='details md:w-2/4 sm:w-full w-full mx-auto text-[#3c2f27] text-center pb-3'>
                  <h2 className='font-crimson font-semibold text-4xl'>60%</h2>
                  <p className='text-base font-roboto'>of our products support at least one of our sustainability initiatives.</p>
                </div>
              </div>
              <div className='md:col-span-1 sm:col-span-2 col-span-2 md:border-r sm:border-b border-b border-[#3c2f27]'>
                <div className='details md:w-2/4 sm:w-full w-full  mx-auto text-[#3c2f27] text-center pb-3'>
                  <h2 className='font-crimson font-semibold text-4xl'>52%</h2>
                  <p className='text-base font-roboto'>of our wood furniture is sustainably sourced.</p>
                </div>
              </div>
              <div className='md:col-span-1 sm:col-span-2 col-span-2 md:border-r sm:border-b border-b border-[#3c2f27]'>
                <div className='details md:w-2/4 sm:w-full w-full  mx-auto text-[#3c2f27] text-center pb-3'>
                  <h2 className='font-crimson font-semibold text-4xl'>1st</h2>
                  <p className='text-base font-roboto'>In 2017, we were the first-ever home retailer to join Fair Trade India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-image-wrapper">
        <div
          className="banner-image"
          style={{
            backgroundImage:
              "url('/uploads/images/our-values/too-good.avif')",
            width: "100%",
            height: "85vh",
            
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className='container'>
          <div className="banner-text-wrapper">
            <div className="banner-text">
              <span>good for you</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='content-wrapper md:w-3/4 sm:w-full w-full  mx-auto mt-10'>
            <h1 className='font-roboto text-[#3c2f27] text-xl leading-10 text-center'>You shouldnt have to choose from shopping at a value and shopping your values. Or between looking good and feeling good. From natural materials to nontoxic finishes, we are making it easy for you to create a healthier home.</h1>
          </div>
          <div className='description my-10'>
            <div className='grid grid-cols-3 gap-5'>

              <div className='sm:col-span-1 col-span-3 md:border-r sm:border-b border-b  border-[#3c2f27] pb-3'>
                <div className='details md:w-2/4 sm:w-full w-full mx-auto text-[#3c2f27] text-center'>
                  <h2 className='font-crimson font-semibold text-4xl'>100%</h2>
                  <p className='text-base font-roboto'>of our all-cotton bedding & bath towels is organic.</p>
                </div>
              </div>

              <div className='sm:col-span-1 col-span-3 md:border-r sm:border-b border-b  border-[#3c2f27] pb-3'>
                <div className='details md:w-2/4 sm:w-full w-full mx-auto text-[#3c2f27] text-center'>
                  <h2 className='font-crimson font-semibold text-4xl'>1.5B</h2>
                  <p className='text-base font-roboto'>liters of water saved in 2018 by sourcing organic cotton.</p>
                </div>
              </div>

              <div className='sm:col-span-1 col-span-3 md:border-r sm:border-b border-b border-[#3c2f27] pb-3'>
                <div className='details md:w-2/4 sm:w-full w-full mx-auto text-[#3c2f27] text-center'>
                  <h2 className='font-crimson font-semibold text-4xl'>10,000+</h2>
                  <p className='text-base font-roboto'>chemicals & VOCs screened for when making our GREENGUARD Gold Certified furniture.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="banner-image-wrapper">
        <div
          className="banner-image"
          style={{
            backgroundImage:
              "url('/uploads/images/our-values/good-together.avif')",
            width: "100%",
            height: "85vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className='container'>
          <div className="banner-text-wrapper">
            <div className="banner-text">
              <span>good together</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='content-wrapper md:w-3/4 sm:w-full w-full  mx-auto my-10'>
            <h1 className='font-roboto text-[#3c2f27] text-xl leading-10 text-center'>You are the company you keep. We partner with ahead-of-the-curve makers, designers and brands to bring you more of what you love and make it even easier to shop the best of modern design.</h1>
          </div>
          
        </div>
      </section>

      <section className="banner-image-wrapper">
        <div
          className="banner-image"
          style={{
            backgroundImage:
              "url('/uploads/images/our-values/our-values.avif')",
            width: "100%",
            height: "85vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className='container'>
          <div className="banner-text-wrapper">
            <div className="banner-text ">
              <span className='text-white'>our values</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='content-wrapper md:w-1/3 sm:w-full w-full mx-auto mt-10 pb-20 text-[#3c2f27] text-center'>
            <ul className='font-crimson text-3xl pb-4'>
              <li>Good For You.</li>
              <li>Good For People.</li>
              <li>Good For The Planet.</li>
            </ul>
            <p className='font-roboto text-base'>Today, 60% Of Our Products Support At Least One Of Our Sustainability Initiatives.</p>
          </div>
          
        </div>
      </section>

    </div>

  )
}
