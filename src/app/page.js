export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
// export const revalidate = 0;
import Image from "next/image";
import SwiperSlider from "../app/components/swiper-slider";
import Visitshop from "./_component";
export default function Home() {
  return (
    <div className="homepage">

      {/* Banner Section */}
      <section className="banner-wrapper mt-0">
        <div className="content-wrapper relative">
          <div className="banner-title text-white z-[1] xl:text-5xl md:text-[55px] text-2xl">
            <h1 className="tracking-wide md:leading-[60px] leading-6">Crafted Excellence in Wood:</h1>
            <h2 className="tracking-wide "> Where Nature Meets Artistry</h2>
          </div>
          <div className="banner w-full" style={{
          height: "70vh",
          width: "100%",
          backgroundImage:
            'url("/uploads/images/homepage/banner.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: " center",
          
        }} >
          
          </div>
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
              <video src="/uploads/images/homepage/warehouse-detail.mp4" autoPlay loop></video>
            </div>
            <div className="description flex flex-col justify-center px-4 py-4">
              <div className="title text-[#3c2f27] text-3xl font-medium py-3 font-crimson">Our Warehouse</div>
              <div className="detail">
                <p className="text-justify text-[#3c2f27] font-roboto">
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
              <div className="title text-[#3c2f27] text-3xl font-medium py-3 font-crimson">Our Experts Team</div>
              <div className="detail">
                <p className="text-justify text-[#3c2f27] font-roboto">
                  At <span className="brand-name">Woodland Interiors</span>, we take pride in curating a team of seasoned experts who breathe life into furniture design. Our experts are not just skilled craftsmen; they are visionaries who transform spaces with their artistry. Each piece of furniture is a testament to their passion, expertise, and commitment to excellence.Our experts bring years of experience and a deep understanding of the nuances of furniture design. They approach each project with a passion that goes beyond the conventional, infusing creativity and innovation into every detail. From conceptualization to creation, our experts ensure that each piece reflects a harmonious blend of form and function.
                </p>
              </div>
            </div>
            <div className="content showcase col-span-2 lg:order-2 order-1">
              <Image src="/uploads/images/homepage/experts.jpg" alt="" width={500} height={500} />
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
            <span className="font-crimson text-[#faf2ec] px-2 md:text-4xl text-2xl">Tailor-made pieces for homes, places and spaces</span>
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
