export default function OurWarehouse() {
	return (
		<section className="our-showcase bg-[#faf2ec] pt-5">
			<div className="content-wrapper">
				<div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
					<div className="content col-span-2">
						<video
							src="/uploads/images/homepage/warehouse-detail.mp4"
							autoPlay
							loop
						></video>
					</div>
					<div className="description flex flex-col justify-center px-4 py-4">
						<div className="title text-[#3c2f27] text-3xl font-medium py-3 font-crimson">
							Our Warehouse
						</div>
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
	);
}
