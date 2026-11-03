'use client'

import Image from 'next/image'
import { IndianRupee } from 'lucide-react'
import { MoonLoader } from 'react-spinners'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { BLOB_BASE_URL } from '@/lib/blob'
import { usePreviousOrderDetail } from '../hooks/use-previous-orders'
import type { PreviousOrderDetail } from '../types'

interface AddressProps {
	title: string
	name: string
	address: string
	country: string
	state: string
	city: string
	pincode: number | string
	phone: number | string
	landmark: string
}

function Address({
	title,
	name,
	address,
	country,
	state,
	city,
	pincode,
	phone,
	landmark,
}: AddressProps) {
	const details = [
		['Name:', name],
		['Address:', address],
		['Country:', country],
		['State:', state],
		['City:', city],
		['Pincode:', pincode],
		['Phone Number:', phone],
		['Nearest Landmark:', landmark],
	] as const

	return (
		<div className="pb-5">
			<div className="bg-[#3c2f27] pl-4 text-[#faf2ec] text-sm font-roboto mb-2 py-1">
				{title}
			</div>
			{details.map(([label, value]) => (
				<div key={label} className="font-roboto text-sm text-[#3c2f27] pl-4">
					<span>{label}</span>
					<span className="font-semibold pl-1">{value}</span>
				</div>
			))}
		</div>
	)
}

function OrderAddress({ order }: { order: PreviousOrderDetail }) {
	const billingName = `${order.billing_first_name ?? order.shipping_first_name} ${order.billing_last_name ?? order.shipping_last_name}`

	return (
		<div className="grid grid-cols-2 gap-5">
			<div className="sm:col-span-1 col-span-2">
				<Address
					title="Shipping Address"
					name={`${order.shipping_first_name} ${order.shipping_last_name}`}
					address={order.shipping_address_one}
					country={order.shipping_country}
					state={order.shipping_state}
					city={order.shipping_city}
					pincode={order.shipping_pincode}
					phone={order.shipping_phone_number}
					landmark={order.shipping_landmark}
				/>
			</div>
			<div className="sm:col-span-1 col-span-2">
				<Address
					title="Billing Address"
					name={billingName}
					address={order.billing_address_one ?? order.shipping_address_one}
					country={order.billing_country ?? order.shipping_country}
					state={order.billing_state ?? order.shipping_state}
					city={order.billing_city ?? order.shipping_city}
					pincode={order.billing_pincode ?? order.shipping_pincode}
					phone={order.billing_phone_number ?? order.shipping_phone_number}
					landmark={order.billing_landmark ?? order.shipping_landmark}
				/>
			</div>
			<div className="sm:col-span-1 col-span-2">
				<div className="pb-5">
					<div className="bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
						Payment Method
					</div>
					<div className="font-roboto text-sm text-[#3c2f27] pl-4 font-semibold">
						{order.payment_mode}
					</div>
				</div>
			</div>
			<div className="sm:col-span-1 col-span-2">
				<div className="pb-5">
					<div className="bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
						Order Date &amp; Time
					</div>
					<div className="font-roboto text-sm text-[#3c2f27] pl-4 font-semibold">
						<div>Date: {new Date(order.order_date).toLocaleDateString()}</div>
						<div>Time: {new Date(order.order_date).toLocaleTimeString()}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function Amount({ value }: { value: number | string }) {
	return (
		<div className="flex items-center">
			<IndianRupee width={14} />
			<span>{value}</span>
		</div>
	)
}

export function PreviousOrderDetailView({ orderId }: { orderId: string }) {
	const {
		data: order,
		isLoading,
		isError,
		error,
		refetch,
	} = usePreviousOrderDetail(orderId)

	if (isLoading) {
		return (
			<div
				className="loading h-screen w-full flex justify-center items-center"
				role="status"
			>
				<MoonLoader color="#3c2f27" />
			</div>
		)
	}

	if (isError) {
		return (
			<div className="container flex min-h-96 flex-col items-center justify-center gap-4 text-center">
				<p className="text-destructive" role="alert">
					{error instanceof Error
						? error.message
						: 'Unable to load order details.'}
				</p>
				<button
					type="button"
					className="underline"
					onClick={() => void refetch()}
				>
					Try again
				</button>
			</div>
		)
	}

	if (!order) {
		return (
			<div className="container flex min-h-96 items-center justify-center text-center">
				<p role="status">We could not find this order.</p>
			</div>
		)
	}

	const totals: [string, number | string][] = [
		['Sub-Total:', order.subtotal],
		['Central GST:', order.tax_cgst],
		['State GST:', order.tax_sgst],
		['Grand Total:', order.total],
	]

	return (
		<div className="order-receipt pb-20">
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="lg:col-span-2 col-span-12" />
					<div className="lg:col-span-8 col-span-12">
						<div className="border border-border rounded-md mt-7">
							<div className="heading py-3 text-3xl font-crimson text-[#3f2f27]">
								<h1 className="text-center">Woodland Interiors</h1>
							</div>
							<div className="order-number text-sm pl-4 font-roboto text-[#3c2f27]">
								<span>Order ID:</span>
								<span className="font-semibold pl-1">{order.id}</span>
							</div>
							<div className="pt-4">
								<OrderAddress order={order} />
							</div>
							<div className="overflow-x-auto">
								<Table>
									<TableHeader className="bg-[#3c2f27] hover:bg-[#3c2f27]">
										<TableRow className="hover:bg-[#3c2f27]">
											<TableHead className="w-[100px] text-[#faf2ec]">
												S.No
											</TableHead>
											<TableHead className="text-[#faf2ec]">Image</TableHead>
											<TableHead className="text-[#faf2ec]">Name</TableHead>
											<TableHead className="text-[#faf2ec]">Quantity</TableHead>
											<TableHead className="text-[#faf2ec]">Amount</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody className="border-b border-[#e5e5e5]">
										{order.orderitems.map((item, index) => (
											<TableRow key={item.id}>
												<TableCell className="font-medium">
													{index + 1}
												</TableCell>
												<TableCell>
													<Image
														src={`${BLOB_BASE_URL}/${item.image}`}
														alt={item.name}
														width={75}
														height={75}
													/>
												</TableCell>
												<TableCell className="font-roboto text-[#3c2f27] font-semibold text-sm whitespace-nowrap">
													{item.name}
												</TableCell>
												<TableCell className="font-roboto text-[#3c2f27] font-semibold text-sm">
													{item.quantity}
												</TableCell>
												<TableCell className="font-roboto text-[#3c2f27] font-semibold text-sm">
													<Amount value={item.total_price} />
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
							<div className="calculation px-2 pt-10 font-roboto text-sm font-semibold">
								{totals.map(([label, value], index) => (
									<div
										key={label}
										className={`flex justify-between px-2 text-[#4b4537] ${
											index === 0
												? 'pt-3'
												: index === 1
													? 'py-2'
													: index === 2
														? 'pb-3'
														: 'font-semibold pt-3 pb-5 border-t border-[#b2937e]'
										}`}
									>
										<div>{label}</div>
										<Amount value={value} />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 col-span-12" />
				</div>
			</div>
		</div>
	)
}
