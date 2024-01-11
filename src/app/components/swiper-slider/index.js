"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
SwiperCore.use([Autoplay]);

export default function SwiperSlider() {
  return (
    <div className="image-carousel">
      <container>
        <div className="carousel-heading text-center md:text-[36px] md:leading-8 text-xl leading-8">
          Whatever You Envision, We Deliver – Your Ideal Interior Awaits!
        </div>

        <div className="carousel grid grid-cols-1">
          <Swiper className="container product-swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            // slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ pauseOnMouseEnter: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            breakpoints={{
              280: {
                width: 280,
                slidesPerView: 1,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              992: {
                width: 992,
                slidesPerView: 3,
              },
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
              1400: {
                width: 1400,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img5.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Low Lounge Chair</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img2.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Hammock Jhula Swing</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img3.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Office Table</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img4.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Rest Chair</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img1.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Play Park</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img6.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Lorem Ipsum</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img7.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Swing</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img8.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Oak Table</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img9.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Long Bench</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/uploads/images/swiper-images/img10.jpg"
                alt=""
                width={300}
                height={300}
              />
              <div className="title text-center">Dining Table</div>
            </SwiperSlide>

            <SwiperSlide>
              <Image src="" alt="" className="img-fluid" />
              <div className="title text-center"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </container>
    </div>
  );
}
