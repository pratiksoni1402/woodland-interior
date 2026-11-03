'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartCheckoutSummary } from '@/features/cart'
import { AddressFields } from './address-fields'
import { BillingDetailToggle } from './billing-detail-toggle'
import { PaymentMethod } from './payment-method'
import { usePlaceOrder } from '../hooks/use-checkout'
import type { CheckoutFormValues } from '../types'

export function CheckoutView() {
	const [showBilling, setShowBilling] = useState(false)
	const methods = useForm<CheckoutFormValues>({
		shouldUnregister: true,
	})
	const placeOrder = usePlaceOrder()

	const onSubmit = (data: CheckoutFormValues) => {
		placeOrder.mutate(data)
	}

	return (
		<div className="pb-10 border-t border-border">
			<div className="container">
				<div className="heading text-center sm:pt-5 pt-3 sm:pb-10 pb-0 font-crimson text-primary sm:text-4xl text-2xl">
					Secure Checkout
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="xl:col-span-7 lg:col-span-7 md:col-span-6 md:order-1 order-2 sm:col-span-12 col-span-12">
						<div className="left-section">
							<div className="heading text-left pb-3 font-crimson text-primary text-2xl">
								Shipping Detail
							</div>
							<FormProvider {...methods}>
								<form onSubmit={methods.handleSubmit(onSubmit)}>
									<AddressFields prefix="shipping" />
									<BillingDetailToggle
										showBilling={showBilling}
										onChange={setShowBilling}
									/>
									{showBilling && (
										<>
											<div className="heading text-left pb-3 mt-4 font-crimson text-2xl">
												Billing Details
											</div>
											<AddressFields prefix="billing" />
										</>
									)}
									<PaymentMethod />
									{placeOrder.isError && (
										<p className="mt-3 text-sm text-destructive" role="alert">
											{placeOrder.error instanceof Error
												? placeOrder.error.message
												: 'Unable to place your order. Please try again.'}
										</p>
									)}
									<Button
										type="submit"
										className="w-full text-white font-roboto bg-primary hover:bg-secondary hover:text-white border hover:cursor-pointer border-primary rounded-md hover:border-secondary"
										disabled={placeOrder.isPending}
									>
										{placeOrder.isPending && (
											<Loader2Icon className="animate-spin mr-1" />
										)}
										Place Order
									</Button>
								</form>
							</FormProvider>
						</div>
					</div>
					<div className="xl:col-span-5 lg:col-span-5 md:col-span-6 md:order-2 order-1 sm:col-span-12 col-span-12">
						<div className="right-section sticky top-24">
							<CartCheckoutSummary />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
