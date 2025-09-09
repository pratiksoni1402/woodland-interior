export default function CustomService() {
	return (
		<section className="custom-service">
			<div className="description">
				<div className="tagline md:text-[50px] md:leading-[50px] text-[24px] leading-7">
					<span className="font-crimson text-[#faf2ec] px-2 md:text-4xl text-2xl">
						Tailor-made pieces for homes, places and spaces
					</span>
				</div>
			</div>
			<div
				className="dine-room d-block"
				style={{
					height: '85vh',
					width: '100%',
					backgroundImage: 'url("/uploads/images/homepage/bg-image.jpg")',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'bottom center',
					backgroundAttachment: 'fixed',
				}}
			></div>
		</section>
	);
}
