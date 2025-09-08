import React from 'react';
export default function MainBanner() {
	return (
		<section className="banner-wrapper mt-0">
			<div className="content-wrapper relative">
				<div className="banner-title text-white z-1 xl:text-5xl md:text-[55px] text-2xl">
					<h1 className="tracking-wide md:leading-[60px] leading-6">
						Crafted Excellence in Wood:
					</h1>
					<h2 className="tracking-wide "> Where Nature Meets Artistry</h2>
				</div>
				<div
					className="banner w-full"
					style={{
						height: '70vh',
						width: '100%',
						backgroundImage: 'url("/uploads/images/homepage/banner.jpg")',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: ' center',
					}}
				></div>
			</div>
		</section>
	);
}
