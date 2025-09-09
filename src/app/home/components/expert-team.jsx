import Image from 'next/image';
export default function ExpertTeam() {
	return (
		<section className="our-showcase our-expert pb-10">
			<div className="content-wrapper">
				<div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
					<div className="description flex flex-col justify-center px-4 py-4 lg:order-1 order-2">
						<div className="title text-[#3c2f27] text-3xl font-medium py-3 font-crimson">
							Our Experts Team
						</div>
						<div className="detail">
							<p className="text-justify text-[#3c2f27] font-roboto">
								At <span className="brand-name">Woodland Interiors</span>, we
								take pride in curating a team of seasoned experts who breathe
								life into furniture design. Our experts are not just skilled
								craftsmen; they are visionaries who transform spaces with their
								artistry. Each piece of furniture is a testament to their
								passion, expertise, and commitment to excellence.Our experts
								bring years of experience and a deep understanding of the
								nuances of furniture design. They approach each project with a
								passion that goes beyond the conventional, infusing creativity
								and innovation into every detail. From conceptualization to
								creation, our experts ensure that each piece reflects a
								harmonious blend of form and function.
							</p>
						</div>
					</div>
					<div className="content showcase col-span-2 lg:order-2 order-1">
						<Image
							src="/uploads/images/homepage/experts.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
