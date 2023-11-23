'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Home() {
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const apiKey = 'zmgUvXafLupBSQhBU9KiHZSwdonyxt5KQKAx2aPzVMjOR1GvqdzBUaGS';
        const videoId = '6827347';

        fetch(`https://api.pexels.com/videos/videos/${videoId}`, {
            headers: {
                Authorization: apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => setVideoData(data))
            .catch((error) => console.error('Error fetching video:', error));
    }, []);
    return (
        <div className='homepage'>
            <section className='banner-wrapper' >
                <div className='banner'>
                    {videoData && (
                        <video loop autoPlay>
                            <source src={videoData.video_files[0].link} type={videoData.video_files[0].file_type} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </section>
            
        </div>
    )
}
