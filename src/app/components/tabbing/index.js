'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import Profile from '@/app/my-account/components/user-profile';
// import Wishlist from '@/app/my-account/components/user-wishlist';
// import History from '@/app/my-account/components/previous-orders';
// import Updatepassword from '@/app/my-account/components/update-password';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

export function Tabbing() {
	SwiperCore.use([Autoplay]);
	return (
		<div className="tabbing-actions">
			<Tabs defaultValue="account">
				<div className="flex justify-center h-10 lg:w-3/4 w-full mx-auto pb-0 bg-[#3c2f27] sticky top-[75px]">
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
								slidesPerView: 3,
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
								slidesPerView: 3,
							},
						}}
					>
						<SwiperSlide>
							<TabsList></TabsList>
						</SwiperSlide>
						<SwiperSlide>
							<TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none"></TabsList>
						</SwiperSlide>
						<SwiperSlide className="edit-profile">
							<TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none p-0">
								<TabsTrigger
									value="account"
									className="edit-profile col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] "
								>
									Edit Profile
								</TabsTrigger>
							</TabsList>
						</SwiperSlide>
						<SwiperSlide className=" my-wishlist">
							<TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
								<TabsTrigger
									value="wishlist"
									className=" my-wishlist col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] mx-1"
								>
									My Wishlist
								</TabsTrigger>
							</TabsList>
						</SwiperSlide>
						<SwiperSlide className="order-history">
							<TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
								<TabsTrigger
									value="history"
									className="order-history col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] "
								>
									Previous Order
								</TabsTrigger>
							</TabsList>
						</SwiperSlide>
						<SwiperSlide className="chng-password">
							<TabsList className=" bg-[#3c2f27] text-[#faf2ec] rounded-none">
								<TabsTrigger
									value="change-password"
									className="chng-password col-span-2 rounded-none hover:bg-white hover:text-[#3c2f27] "
								>
									Update Password
								</TabsTrigger>
							</TabsList>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="tab-content flex flex-col justify-center">
					<TabsContent value="account">
						<div>{/*<Profile />*/}</div>
					</TabsContent>
					<TabsContent value="wishlist">
						<div>{/*<Wishlist />*/}</div>
					</TabsContent>
					<TabsContent value="history">
						<div>{/*<History />*/}</div>
					</TabsContent>
					<TabsContent value="change-password">
						<div>{/*<Updatepassword />*/}</div>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
