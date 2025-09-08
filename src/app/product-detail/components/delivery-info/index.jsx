'use client';
import Image from 'next/image';

export default function DeliveryInfo() {
	const today = new Date();

	// Order by = today + 1 day
	const orderBy = new Date(today);
	orderBy.setDate(orderBy.getDate() + 1);

	// Receive by = today + 6 days
	const receiveBy = new Date(today);
	receiveBy.setDate(receiveBy.getDate() + 6);

	// Format function
	const formatDate = (date) => {
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<div className="shipping-wrapper py-5">
			<div className="flex gap-5">
				<div>
					<div className="transit flex flex-col justify-center items-center">
						<span className="p-3  border-2 border-[#3c2f27] rounded-full">
							<Image
								src="/uploads/images/shipping-step/in-transit.svg"
								alt="Transit"
								className="w-8 h-8"
								width={20}
								height={32}
							/>
						</span>
						<span>
							<Image
								src="/uploads/images/shipping-step/shipping.svg"
								alt="Steps"
								className=" w-4 h-44"
								width={20}
								height={50}
							/>
						</span>
					</div>
				</div>
				<div className="information">
					<div className="heading">
						<h2 className="font-crimson text-[#3c2f27] text-base">
							FREE 3 DAY SHIPPING
						</h2>
						<span className="font-roboto text-[#3c2f27] text-sm">
							on all India Orders
						</span>
					</div>
					<div className="order mt-6">
						<h2 className="font-crimson text-[#3c2f27] text-base">ORDER BY:</h2>
						<span className="font-roboto text-[#3c2f27] text-sm">
							5PM EST {formatDate(orderBy)}
						</span>
					</div>
					<div className="order mt-7">
						<h2 className="font-crimson text-[#3c2f27] text-base">
							RECEIVE BY:
						</h2>
						<span className="font-roboto text-[#3c2f27] text-sm">
							5PM EST {formatDate(receiveBy)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
