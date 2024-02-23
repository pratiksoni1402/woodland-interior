'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Profile from "@/app/credentials/user-profile";
import Wishlist from "@/app/credentials/user-wishlist";
import History from "@/app/credentials/previous-orders";
import Updatepassword from "@/app/credentials/update-password";
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
        <div className="flex justify-center h-10 sm:w-3/4 w-full mx-auto pb-0 bg-[#3c2f27]">

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
                slidesPerView: 7,
              },
              1400: {
                width: 1400,
                slidesPerView: 7,
              },
            }}
          >
            <SwiperSlide>
              <TabsList>
              </TabsList>
            </SwiperSlide>
            <SwiperSlide>
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
              </TabsList>
            </SwiperSlide>
            <SwiperSlide className="edit-profile">
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="account" className="edit-profile col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] ">
                  Edit Profile
                </TabsTrigger>
              </TabsList>
            </SwiperSlide>
            <SwiperSlide className=" my-wishlist" >
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="wishlist" className=" my-wishlist col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] mx-1">
                  My Wishlist
                </TabsTrigger>
              </TabsList>

            </SwiperSlide>
            <SwiperSlide className="order-history">
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="history" className="order-history col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] ">
                  Previous Order
                </TabsTrigger>
              </TabsList>

            </SwiperSlide>
            {/* <SwiperSlide className="chng-password">
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="change-password" className="chng-password col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] ">
                  Change Password
                </TabsTrigger>
              </TabsList>
            </SwiperSlide> */}
            <SwiperSlide className="manage-addresses">
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="manage-addresses" className="acc-delete col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Manage Addresses
                </TabsTrigger>
              </TabsList>
            </SwiperSlide>
            <SwiperSlide className="browsing-history">
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="browsing-history" className="acc-delete col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Browsing History
                </TabsTrigger>
              </TabsList>
            </SwiperSlide>
            <SwiperSlide className="acc-delete">
              <TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
                <TabsTrigger value="account-deletion" className="acc-delete col-span-2 rounded-none hover:bg-white hover:text-black ">
                  Delete Account
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
          {/* <TabsContent value="change-password">
            <div>
              <Updatepassword />
            </div>
          </TabsContent> */}
          <TabsContent value="manage-addresses">
            <div>

            </div>
          </TabsContent>
          <TabsContent value="browsing-history">
            <div>

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
