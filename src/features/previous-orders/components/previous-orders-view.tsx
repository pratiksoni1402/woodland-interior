'use client'

import Link from 'next/link'
import { IndianRupee } from 'lucide-react'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { usePreviousOrders } from '../hooks/use-previous-orders'

export function PreviousOrdersView() {
	const {
		data: orders,
		isLoading,
		isError,
		error,
		refetch,
	} = usePreviousOrders()

	if (isLoading) {
		return (
			<p className="py-12 text-center" role="status">
				Loading your previous orders...
			</p>
		)
	}

	if (isError) {
		return (
			<div className="py-12 text-center">
				<p role="alert" className="text-destructive">
					{error instanceof Error
						? error.message
						: 'Unable to load previous orders.'}
				</p>
				<button
					type="button"
					className="mt-3 underline"
					onClick={() => void refetch()}
				>
					Try again
				</button>
			</div>
		)
	}

	return (
		<div className="wishlist-component sm:flex block sm:justify-center overflow-x-auto">
			<div className="user-wishlist w-full">
				<div className="grid grid-col-1">
					<div className="col">
						<div className="order-wrapper">
							<div className="orders">
								<Table>
									<TableCaption className="pb-5 font-roboto text-vase text-primary">
										A list of your Previous Orders.
									</TableCaption>
									<TableHeader>
										<TableRow className="border-b border-border">
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
												Order Date &amp; Time
											</TableHead>
											<TableHead className="text-primary text-center font-semibold font-roboto whitespace-nowrap">
												Action
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{orders?.map((order) => {
											const date = new Date(order.order_date)
											return (
												<TableRow
													key={order.id}
													className="border-b border-border odd:bg-secondary/10"
												>
													<TableCell className="text-center text-primary font-roboto">
														{order.id}
													</TableCell>
													<TableCell className="text-center text-primary font-roboto">
														<div className="flex items-center justify-center">
															<IndianRupee width={14} />
															<span>{order.total}</span>
														</div>
													</TableCell>
													<TableCell className="text-center text-primary font-roboto">
														{order.payment_mode}
													</TableCell>
													<TableCell className="text-center text-primary font-roboto whitespace-nowrap">
														{date.toLocaleDateString()}{' '}
														{date.toLocaleTimeString()}
													</TableCell>
													<TableCell className="text-center text-primary font-roboto">
														<Link
															href={`/previous-orders/${order.id}`}
															className="border border-primary bg-primary p-2 text-white hover:border-secondary text-sm hover:text-white font-roboto hover:bg-secondary rounded-md whitespace-nowrap"
														>
															View Detail
														</Link>
													</TableCell>
												</TableRow>
											)
										})}
									</TableBody>
								</Table>
								{orders?.length === 0 && (
									<p className="py-8 text-center text-primary">
										You have no previous orders.
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
