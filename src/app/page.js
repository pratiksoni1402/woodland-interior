import Image from "next/image";
import SwiperSlider from "@/components/swiper-slider";
import Visitshop from "./_component";

export default function Home() {
  return (
    <div className="homepage">

      {/* Banner Section */}
      <section className="banner-wrapper">
        <div className="content-wrapper relative">
          <div className="banner-title text-white z-[1] md:text-[55px] md:leading-[60px] text-xl leading-6">
            <h1>Crafted Excellence in Wood:</h1>
            <h2> Where Nature Meets Artistry</h2>
          </div>
          <div
            className="banner w-full"
            style={{
              backgroundImage: 'url("/uploads/images/homepage/kitchen.jpg")',
              width: "100%",
              height: "100vh",
              backgroundPosition: "bottom center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </section>
      {/* End */}

      {/* Timber description  section */}
      <section className="timber-furniture">
            <Visitshop />
      </section>
      {/*End*/}


      {/* Our Warehouse */}
      <section className="our-showcase bg-[#faf2ec] pt-5">
        <div className="content-wrapper">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
            <div className="content col-span-2">
              <video src="/uploads/images/homepage/warehouse.mp4" autoPlay loop></video>
            </div>
            <div className="description flex flex-col justify-center px-4 py-4">
              <div className="title text-[#54595f] text-2xl font-semibold py-3">Our Wareshouse</div>
              <div className="detail">
                <p className="text-justify text-[#54595f]">
                  Welcome to our furniture haven, where we merge artistry,
                  comfort, and functionality to create pieces that transform
                  spaces into living experiences. Discover our curated
                  collections, each a testament to the timeless elegance and
                  quality craftsmanship we stand for. Whether youre drawn to the
                  clean lines of Modern Minimalism, the rustic allure of Natural
                  Wood, or the enduring charm of Classic Elegance, our creations
                  promise to breathe life into your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* Our Experts */}
      <section className="our-showcase our-expert bg-[#faf2ec] pb-10">
        <div className="content-wrapper">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
            <div className="description flex flex-col justify-center px-4 py-4 lg:order-1 order-2">
              <div className="title text-[#54595f] text-2xl font-semibold py-3">Our Experts Team</div>
              <div className="detail">
                <p className="text-justify text-[#54595f]">
                At <span className="brand-name">Woodland Interiors</span>, we take pride in curating a team of seasoned experts who breathe life into furniture design. Our experts are not just skilled craftsmen; they are visionaries who transform spaces with their artistry. Each piece of furniture is a testament to their passion, expertise, and commitment to excellence.Our experts bring years of experience and a deep understanding of the nuances of furniture design. They approach each project with a passion that goes beyond the conventional, infusing creativity and innovation into every detail. From conceptualization to creation, our experts ensure that each piece reflects a harmonious blend of form and function.
                </p>
              </div>
            </div>
            <div className="content showcase col-span-2 lg:order-2 order-1">
              <Image src="/uploads/images/homepage/experts.jpg" alt="" width={500} height={500}/>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* Image Carousal Start */}
      <section className=" image-carousal">
        <div className="slider">
          <SwiperSlider />
        </div>
      </section>
      {/* End */}

      {/* Custom service start */}
      <section className='custom-service'>
                <div className='description'>
                    <div className='tagline md:text-[50px] md:leading-[50px] text-[24px] leading-7'>
                        <span>Tailor-made pieces for homes, places and spaces</span>
                    </div>
                    {/* <div className='visit-us'>
                        <Link href='/bespoke'>our custom-made service</Link>
                    </div> */}
                </div>
                <div className='dine-room d-block' style={{
                    height: "85vh",
                    width: "100%",
                    backgroundImage:
                        'url("/uploads/images/homepage/bg-image.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    backgroundAttachment: "fixed"

                }} >
                </div>
      </section>
      {/* End */}

    </div>
  );
}
