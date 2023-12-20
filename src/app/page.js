"use client";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import Link from "next/link";
import SwiperSlider from "@/components/swiper-slider";

export default function Home() {
  const [category, setCategories] = useState([]);
  const [videoData, setVideoData] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const api_key = "zmgUvXafLupBSQhBU9KiHZSwdonyxt5KQKAx2aPzVMjOR1GvqdzBUaGS";
    const video_id = "6826650";

    fetch(`https://api.pexels.com/videos/videos/${video_id}`, {
      headers: {
        Authorization: api_key,
      },
    })
      .then((resp) => {
        resp.json();
      })
      .then((res) => {
        setVideo(res);
      });
  });

  useEffect(() => {
    axios
      .get("/api/get-categories")
      .then((response) => {
        setCategories(response.data.categories);
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Fetching Data", error);
      });
  }, []);

  return (
    <div className="homepage">
      {/* Banner Section */}
      <section className="banner-wrapper">
        <div className="content-wrapper relative">
          <div className="banner-title text-white text-4xl leading-10 z-[1]">
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
        <div className="product-description text-center">
          Crafted Elegance: Timber Furniture for Timeless Spaces
        </div>
        <div className="visit-store text-center">
          <Link href="/all-products">VISIT SHOP</Link>
        </div>
      </section>
      {/*End*/}

      {/* Image Carousal Start */}
      <section className=" image-carousal">
        <div className="slider">
          <SwiperSlider />
        </div>
      </section>
      {/* End */}

      {/* Our Warehouse */}
      <section className="our-showcase bg-[#faf2ec] pt-5">
        <div className="content-wrapper">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
            <div className="content col-span-2">
              <video src="/uploads/images/homepage/warehouse.mp4" autoPlay loop></video>
            </div>
            <div className="description flex flex-col justify-center px-4">
              <div className="title text-[#54595f] text-2xl font-semibold">Our Wareshouse</div>
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
            <div className="description flex flex-col justify-center px-4">
              <div className="title text-[#54595f] text-2xl font-semibold">Our Experts Team</div>
              <div className="detail">
                <p className="text-justify text-[#54595f]">
                At <span className="brand-name">Woodland Interiors</span>, we take pride in curating a team of seasoned experts who breathe life into furniture design. Our experts are not just skilled craftsmen; they are visionaries who transform spaces with their artistry. Each piece of furniture is a testament to their passion, expertise, and commitment to excellence.Our experts bring years of experience and a deep understanding of the nuances of furniture design. They approach each project with a passion that goes beyond the conventional, infusing creativity and innovation into every detail. From conceptualization to creation, our experts ensure that each piece reflects a harmonious blend of form and function.
                </p>
              </div>
            </div>
            <div className="content showcase col-span-2">
              <Image src="/uploads/images/homepage/experts.jpg" alt="" width={500} height={500}/>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* Custom service start */}
      <section className='custom-service'>
                <div className='description'>
                    <div className='tagline'>
                        <span>Tailor-made pieces for homes, places and spaces</span>
                    </div>
                    <div className='visit-us'>
                        <Link href='/bespoke'>our custom-made service</Link>
                    </div>
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

      {/* Temporary data */}
      {/* <section className="get-categories">
        {
          <ul>
            {category.map((categories) => (
              <li key={categories.id}>{categories.name}</li>
            ))}
          </ul>
        }
      </section> */}
      {/* End */}

    </div>
  );
}
