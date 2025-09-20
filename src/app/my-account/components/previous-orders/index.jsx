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
	const { data: orders } = useQuery({
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

	return (
		<div className="wishlist-component sm:flex block sm:justify-center overflow-x-auto">
			<div className="user-wishlist w-full">
				<div className="grid grid-col-1">
					<div className="col ">
						<div className="order-wrapper">
							<div className="orders ">
								<Table>
									<TableCaption className="pb-5 font-roboto text-vase text-primary">
										A list of your Previous Orders.
									</TableCaption>
									<TableHeader>
										<TableRow className=" border-b border-border">
											<TableHead className="text-primary text-center font-semibold font-roboto whitespace-nowrap">
												Order ID
											</TableHead>
											<TableHead className="text-primary text-center font-semibold font-roboto whitespace-nowrap">
												Total Amount
											</TableHead>
											<TableHead className="text-primary text-center font-semibold font-roboto whitespace-nowrap">
												Payment Method
											</TableHead>
											<TableHead className="text-primary text-center font-semibold font-roboto whitespace-nowrap">
												Order Date & Time
											</TableHead>
											<TableHead className="text-primary text-center font-semibold font-roboto whitespace-nowrap">
												Action
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{orders?.map((invoice) => {
											const orderDate = invoice?.order_date;
											let formattedDate = '';
											let formattedTime = '';

											if (orderDate) {
												const date = new Date(orderDate);
												formattedDate = date.toLocaleDateString();
												formattedTime = date.toLocaleTimeString();
											}

											return (
												<TableRow
													key={invoice.id}
													className=" border-b border-border odd:bg-secondary/10"
												>
													<TableCell className="text-center text-primary font-roboto">
														{invoice.id}
													</TableCell>
													<TableCell className="text-center text-primary font-roboto">
														<div className="flex items-center justify-center">
															<span>
																<IndianRupee width={14} />
															</span>
															<span>{invoice?.total}</span>
														</div>
													</TableCell>
													<TableCell className="text-center text-primary font-roboto">
														{invoice.payment_mode}
													</TableCell>
													<TableCell className="text-center text-primary font-roboto whitespace-nowrap">
														{formattedDate} {formattedTime}
													</TableCell>
													<TableCell className="text-center text-primary font-roboto">
														<Link
															href={`/previous-orders/${invoice.id}`}
															className="border border-primary bg-primary p-2 text-white hover:border-secondary text-sm hover:text-white font-roboto hover:bg-secondary rounded-md whitespace-nowrap"
														>
															View Detail
														</Link>
													</TableCell>
												</TableRow>
											);
										})}
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
