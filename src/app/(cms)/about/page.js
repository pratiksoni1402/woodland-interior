import React from 'react';
import Image from 'next/image';

export const metadata = {
	title: 'About Us | Woodland Interiors',
	description:
		'Learn about Woodland Interiors — our story, mission, and passion for delivering elegant furniture and home décor. Discover why customers trust us.',
	robots: {
		index: true, // allow indexing
		follow: true, // allow crawling
	},
};

export default function Aboutus() {
	return (
		<div className="about-us">
			<section className="banner-image-wrapper">
				<div className="container">
					<div className="hero-text d-block">
						<p>Jodhpur. It’s more than our home.</p>
						<p>It’s where our heart is.</p>
					</div>
				</div>
				<div
					className="hero-image d-block"
					style={{
						height: '85vh',
						width: '100%',
						marginTop: '-80px',
						backgroundImage: 'url("/uploads/images/about/banner-image.jpg")',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				></div>
				{/* Banner Section End */}
			</section>
			<section className="about-company-location">
				<div className="container">
					<div className="grid grid-cols-12">
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="content-wrapper">
								<span className="font-crimson block">
									From our home, to your home
								</span>
							</div>
						</div>
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="detail-wrapper">
								<div className="about-company">
									<p>
										Welcome to Woodland Interiors. From our workshops near the
										National Trust village of Lacock – deep in the English
										countryside – we design and make modern English country
										furniture that connects you to nature.
									</p>

									<p>
										Founded in 2015 by William Hibbert and Samuel Baker, Forest
										to Home started as two friends with a shared passion for
										making furniture that reflects the West County landscape –
										and the places – they grew up in. From ancient woodlands to
										the chalky uplands of the Wiltshire Downs, to the warm
										Cotswold stone and ancient cruck and timber frame houses,
										barns and churches that surround them, Sam and Will are
										happy to admit, their corner of Wiltshire is, quite
										literally, what fuels them.
									</p>

									<p>
										And, together, with their growing – and talented team, they
										have grown their business into one of the best-known
										countryside lifestyle brands you’ll meet. Growing the brand
										has opened up opportunities for our talented local
										craftspeople as well as offering a nurturing environment for
										younger people to hone their skills. However, some things
										remain constant. Whether we’re making beautiful country
										furniture for an eco-conscious family, or realising the
										creative vision of world’s best known residential
										architects, our passion and core values remain the same.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="banner flex">
				<div className="video ">
					<video
						src="/uploads/images/about/about-page-video.mp4"
						autoPlay
						loop
						type="video/mp4"
					></video>
				</div>
				<div className="image ">
					<Image
						src="/uploads/images/about/tractor.jpg"
						alt="image"
						width={500}
						height={500}
					/>
				</div>
			</section>
			{/*  */}
			<section className="about-company-location">
				<div className="container">
					<div className="grid grid-cols-12">
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="content-wrapper">
								<span>We come from a place of beauty</span>
							</div>
						</div>
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="detail-wrapper">
								<div className="about-company">
									<p>
										Over the fields from our workshops, just along the River
										Avon, you’ll find a Medieval tithe barn, world famous Abbey
										and hamlets dotted with quaint stone and ashlar cottages.
										Sam and Will have studied the way these buildings were made
										– the shapes and techniques that make them unique – and have
										reimagined these elements in our furniture range.
									</p>

									<p>
										Our aesthetic fits in beautifully with a laidback, pared
										back English farmhouse style. When you pair our pieces with
										natural shades and textures, muted tones and botanical
										elements, you’re adding warmth, character and heritage. Our
										pieces aren’t for people who love the regular, the sleek and
										the expected; our furniture oozes warmth, individuality and
										puts you at ease. And, of course, the beauty of using
										natural timber is that no two pieces are ever quite the
										same. At Forest to Home, we celebrate and amplify the
										individual character of every slab of timber we use. Every
										grain, every pattern is different. Every piece is individual
										– and unique to you. It tells its own story.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="work-showcase">
				<div className="container">
					<div className="grid grid-cols-12">
						<div className="col-span-12">
							<div className="video-wrapper">
								<video
									src="/uploads/images/about/about-page-video.mp4"
									autoPlay
									loop
									type="video/mp4"
								></video>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about-company-location">
				<div className="container">
					<div className="grid grid-cols-12">
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="content-wrapper">
								<span className="pb-5">Our craft doesn’t cost the earth</span>
							</div>
						</div>
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="detail-wrapper">
								<div className="about-company">
									<p>
										We think sustainability and beauty are intertwined. This is
										important to know. Because when you buy our furniture for
										your home and your family, you are making an ethical and
										responsible choice. You can be sure that every piece is
										crafted from the finest hardwood; hand-selected and sourced
										from certified, sustainable sources. We’re passionate about
										tree planting too, which is why every piece of furniture you
										buy from us, contributes to more trees being planted.
									</p>

									<p>
										Our aesthetic fits in beautifully with a laidback, pared
										back English farmhouse style. When you pair our pieces with
										natWe only buy timber from suppliers and forests that are
										licensed or certified by Grown in Britain, the Forest
										Stewardship Council (FSC) and the Programme for the
										Endorsement of Forest Certification (PEFC). We also support
										schemes to restore degraded woodlands and create productive,
										healthy and well-managed forests for the future.
									</p>
								</div>
							</div>
						</div>
						<div className="md:col-span-6 sm:col-span-4 col-span-12">
							<div className="explore-more flex justify-content-center pt-5">
								<button type="button">find out more</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="westbury">
				<div className="content-wrapper flex">
					<div className="left-section">
						<div className="fairer-hills">
							<p>
								Have you followed richer valleys? Have you rounded fairer hills?
								Have you walked in broader avenues, or higher colonnades?
								Through such forest and plantations, through such thickets and
								such glades?
							</p>
							<span>– Alfred Williams</span>
						</div>
					</div>
					<div className="right-section">
						<div className="westbury-white-horse">
							<Image
								src="/uploads/images/about/white-horse.jpg"
								alt="image"
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
