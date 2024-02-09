'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Profile from "@/app/credentials/user-profile";
import Wishlist from "@/app/credentials/user-wishlist";
import History from "@/app/credentials/user-history";
import Resetpassword from "@/app/credentials/reset-password";
import { Deleteaccount } from "@/app/credentials/account-deletion";
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

export function Tabbing() {
  return (
    <div className="tabbing-actions">
      <Tabs defaultValue="account">
        <div className="flex justify-center pb-5 sm:w-3/4 w-full m-auto">

          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            autoplay={false}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              280: {
                width: 280,
                slidesPerView: 2,
              },
              576: {
                width: 576,
                slidesPerView: 3,
              },
              768: {
                width: 768,
                slidesPerView: 5,
              },
              992: {
                width: 992,
                slidesPerView: 5,
              },
              1200: {
                width: 1200,
                slidesPerView: 5,
              },
              1400: {
                width: 1400,
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <TabsList>
              </TabsList>
            </SwiperSlide>
            <SwiperSlide>
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="account" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Edit Profile
                </TabsTrigger>
              </TabsList>
            </SwiperSlide>
            <SwiperSlide>
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="wishlist" className="col-span-2 rounded-none hover:bg-white hover:text-black mx-1">
                  My Wishlist
                </TabsTrigger>
              </TabsList>

            </SwiperSlide>
            <SwiperSlide>
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="history" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Order History
                </TabsTrigger>
              </TabsList>

            </SwiperSlide>
            <SwiperSlide>
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="change-password" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Change Password
                </TabsTrigger>
              </TabsList>

            </SwiperSlide>
            <SwiperSlide>
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="account-deletion" className="col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Account Deletion
                </TabsTrigger>
              </TabsList>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="tab-content flex flex-col justify-center">
          <TabsContent value="account">
            <div>
              <Profile />
            </div>
          </TabsContent>
          <TabsContent value="wishlist">
            <div>
              <Wishlist />
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div>
              <History />
            </div>
          </TabsContent>
          <TabsContent value="change-password">
            <div>
              <Resetpassword />
            </div>
          </TabsContent>
          <TabsContent value="account-deletion">
            <div>
              <Deleteaccount />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
