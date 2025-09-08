'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { IndianRupee } from 'lucide-react';
export default function OrderHistory() {
	const {
		isPending,
		data: orders,
		isError,
	} = useQuery({
		queryKey: ['totalOrders'],
		queryFn: () =>
			axios
				.get('/api/past-orders')
				.then((response) => {
					return response.data.getOrders;
				})
				.catch((error) => {
					console.log('Error Occured', error);
				}),
	});

	const orderDate = orders?.order_date;
	if (orderDate) {
		const date = new Date(orderDate);

		// Format the date
		var formattedDate = `${date.toLocaleDateString()}`;
		console.log('Local Date', formattedDate);
		var formattedTime = `${date.toLocaleTimeString()}`;
	}

	return (
		<div className="wishlist-component sm:flex block sm:justify-center overflow-x-auto">
			<div className="user-wishlist w-full">
				<div className="grid grid-col-1">
					<div className="col ">
						<div className="order-wrapper">
							<div className="orders ">
								<Table>
									<TableCaption className="pb-5 font-roboto text-vase text-[#3c2f27]">
										A list of your Previous Orders.
									</TableCaption>
									<TableHeader>
										<TableRow className=" border-b border-[#b2937e]">
											<TableHead className="text-[#3c2f27] text-center font-semibold font-roboto whitespace-nowrap">
												Order ID
											</TableHead>
											<TableHead className="text-[#3c2f27] text-center font-semibold font-roboto whitespace-nowrap">
												Total Amount
											</TableHead>
											<TableHead className="text-[#3c2f27] text-center font-semibold font-roboto whitespace-nowrap">
												Payment Method
											</TableHead>
											<TableHead className="text-[#3c2f27] text-center font-semibold font-roboto whitespace-nowrap">
												Order Date & Time
											</TableHead>
											<TableHead className="text-[#3c2f27] text-center font-semibold font-roboto whitespace-nowrap">
												Action
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody className="bg-white">
										{orders?.map((invoice) => (
											<TableRow
												key={invoice.id}
												className=" border-b border-[#b2937e]"
											>
												<TableCell className="text-center text-[#3c2f27] font-roboto">
													{invoice.id}
												</TableCell>
												<TableCell className="text-center text-[#3c2f27] font-roboto">
													<div className="flex items-center justify-center">
														<span className="">
															<IndianRupee width={14} />
														</span>
														<span>{invoice?.total}</span>
													</div>
												</TableCell>
												<TableCell className="text-center text-[#3c2f27] font-roboto">
													{invoice.payment_mode}
												</TableCell>
												<TableCell className="text-center  text-[#3c2f27] font-roboto whitespace-nowrap">
													{invoice.order_date}
												</TableCell>
												<TableCell className="text-center  text-[#3c2f27] font-roboto">
													<Link
														href={`/previous-orders/${invoice.id}`}
														className="border border-[#3c2f27] bg-[#3c2f27] p-2 text-[#faf2ec] font-crimson text-sm hover:text-[#3c2f27] hover:bg-white whitespace-nowrap"
													>
														View Detail
													</Link>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
