"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const apiKey = "zmgUvXafLupBSQhBU9KiHZSwdonyxt5KQKAx2aPzVMjOR1GvqdzBUaGS";
        const videoId = "6827347";

        fetch(`https://api.pexels.com/videos/videos/${videoId}`, {
            headers: {
                Authorization: apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => setVideoData(data))
            .catch((error) => console.error("Error fetching video:", error));
    }, []);

    const [video, setVideo] = useState(null);
    useEffect(() => {
        const api_key = "zmgUvXafLupBSQhBU9KiHZSwdonyxt5KQKAx2aPzVMjOR1GvqdzBUaGS";
        const video_id = "6826650";

        fetch(`https://api.pexels.com/videos/videos/${video_id}`, {
            headers: {
                Authorization: api_key,
            },
        }).then((resp) => {
            resp
                .json()

                .then((res) => {
                    setVideo(res);
                });
        });
    });
    return (
        <div className="homepage">
            <section className="banner-wrapper">
                <div className="content-wrapper relative">
                    <div className="banner-title text-white text-4xl leading-10">
                        <h1>Crafted Excellence in Wood:</h1>
                        <h2> Where Nature Meets Artistry</h2>
                    </div>
                    <div className="banner w-full">
                        {videoData && (
                            <video loop autoPlay className="w-full">
                                <source
                                    src={videoData.video_files[0].link}
                                    type={videoData.video_files[0].file_type}
                                />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            </section>
            <section className="product-category bg-[#faf2ec] py-16">
                <div className="content-wrapper px-2">
                    <div className="section-heading text-center text-4xl text-[#54595f]">
                        <p>Where Elegance Meets Every Corner</p>
                    </div>
                    <div className="categories pt-10">
                        <div className="grid grid-cols-4 gap-3">
                            <div className="">
                                <div className="product-image">
                                    <Image
                                        src="/uploads/images/homepage/desk.jpg"
                                        className="w-full"
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </div>
                                <div className="product-title">Desks</div>
                            </div>
                            <div>
                                <div className="product-image">
                                    <Image
                                        src="/uploads/images/homepage/desk.jpg"
                                        className="w-full"
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </div>
                                <div className="product-title">Desks</div>
                            </div>
                            <div>
                                <div className="product-image">
                                    <Image
                                        src="/uploads/images/homepage/desk.jpg"
                                        className="w-full"
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </div>
                                <div className="product-title">Desks</div>
                            </div>
                            <div>
                                <div className="product-image">
                                    <Image
                                        src="/uploads/images/homepage/desk.jpg"
                                        className="w-full"
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </div>
                                <div className="product-title">Desks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-showcase bg-[#faf2ec] pt-5 pb-10">
                <div className="content-wrapper">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
                        <div className="content col-span-2">
                            {video && (
                                <video loop autoPlay className="w-full">
                                    <source
                                        src={video.video_files[0].link}
                                        type={video.video_files[0].file_type}
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                        <div className="description flex flex-col justify-center px-4">
                            <div className="title">
                                Our Wareshouse
                            </div>
                            <div className="detail">
                                <p>
                                    Welcome to our furniture haven, where we merge artistry, comfort, and functionality to create pieces that transform spaces into living experiences. Discover our curated collections, each a testament to the timeless elegance and quality craftsmanship we stand for. Whether youre drawn to the clean lines of Modern Minimalism, the rustic allure of Natural Wood, or the enduring charm of Classic Elegance, our creations promise to breathe life into your home.
    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
