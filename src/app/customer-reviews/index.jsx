import Image from 'next/image';
import { REVIEW_MEDIA_URL } from '@/app/_lib/constants/images';
export default function Reviews() {
	const customerReviews = [
		{
			name: 'Rohan Patel',
			description: `I recently purchased a beautiful dining set from Woodland Interiors, and I couldn't be happier with my decision. The craftsmanship is exquisite, and it adds a
				touch of elegance to my home. Highly recommend!`,
			image: 'male-avatar.jpg',
		},
		{
			name: 'Priya Gupta',
			description: `Shopping at Woodland Interiors was a delightful
				experience from start to finish. The website is easy to
				navigate, and the variety of furniture options is
				impressive. Will definitely be returning for future
				purchases.`,
			image: 'female-avatar.jpg',
		},
		{
			name: 'Neha Reddy',
			description: `As an interior designer, I am always on the lookout for
				unique pieces for my clients. I recently ordered a
				coffee table from Woodland Interiors, and it exceeded my
				expectations in terms of both quality and style. Will
				definitely be a repeat customer!`,
			image: 'female-avatar.jpg',
		},
		{
			name: 'Neha Reddy',
			description: `As an interior designer, I am always on the lookout for
				unique pieces for my clients. I recently ordered a
				coffee table from Woodland Interiors, and it exceeded my
				expectations in terms of both quality and style. Will
				definitely be a repeat customer!`,
			image: 'female-avatar.jpg',
		},
		{
			name: 'Aarav Sharma',
			description: `I am amazed by the quality of the sofa I ordered from
				Woodland Interiors. It is comfortable, stylish, and
				exactly what I was looking for. Kudos to the team for
				providing such excellent service!`,
			image: 'male-avatar.jpg',
		},
		{
			name: 'Aryan Singh',
			description: `I have had my eye on a particular armchair for a while,
				and I finally decided to purchase it from Woodland
				Interiors. I am thrilled with the quality and comfort it
				provides. Couldn't be happier with my decision!`,
			image: 'male-avatar.jpg',
		},
		{
			name: 'Aisha Mehta',
			description: `I amm extremely satisfied with my purchase from Woodland Interiors. The dresser I ordered is not only stylish but also incredibly functional. The customer service was excellent, and I wouldn't hesitate to shop here again.`,
			image: 'female-avatar.jpg',
		},
	];
	return (
		<div className="customer-reviews">
			<div className="grid grid-cols-12">
				<div className="lg:col-span-6 md:col-span-8 sm:col-span-12 col-span-12">
					<div className="reviews-wrapper pb-12">
						{customerReviews.map((reviews, index) => (
							<div className="review py-3" key={index}>
								<div className="grid grid-cols-12 gap-5">
									<div className="col-span-2">
										<div className="image">
											<Image
												src={`${REVIEW_MEDIA_URL}/${reviews.image}`}
												alt="Avatar"
												width={100}
												height={100}
											/>
										</div>
									</div>
									<div className="col-span-10">
										<div className="heading  text-xl text-primary font-crimson font-semibold pb-1">
											{reviews.name}
										</div>
										<div className="text text-sm text-primary font-roboto text-justify">
											{reviews.description}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="lg:col-span-6 md:col-span-4 sm:col-span-12 col-span-12"></div>
			</div>
		</div>
	);
}
