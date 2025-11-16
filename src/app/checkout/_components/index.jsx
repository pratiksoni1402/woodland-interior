'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import PaymentMethod from '@/app/checkout/_components/payment-methods/form'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'
import BillingDetailToggleSwitch from '@/app/checkout/_components/billing-detail-toggle-switch'
import BillingDetailForm from '@/app/checkout/_components/billing-details/form'
import ShippingDetailsForm from '@/app/checkout/_components/shipping-details/form'

export default function OrderDetails() {
	const router = useRouter()
	const [showForm, setShowForm] = useState(false)
	const [animation, setAnimation] = useState(false)

	const methods = useForm()

	const handleSwitchToggle = () => {
		setShowForm(!showForm)
	}

	const onSubmit = async (data) => {
		try {
			setAnimation(true)
			const response = await axios.post('/api/place-order', data)
			router.push(`/order-receipt/${response.data.Orders.id}`)
		} catch (error) {
			console.error('Error', error)
		} finally {
			setAnimation(false)
		}
	}

	return (
		<div className="shipping-details-form">
			<div className="heading text-left pb-3 font-crimson text-primary text-2xl">
				Shipping Detail
			</div>

			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<ShippingDetailsForm />

					<BillingDetailToggleSwitch
						show={showForm}
						onToggle={handleSwitchToggle}
					/>

					{showForm && <BillingDetailForm />}

					<PaymentMethod />

					<Button
						type="submit"
						className=" w-full text-white font-roboto bg-primary hover:bg-secondary hover:text-white border hover:cursor-pointer border-primary rounded-md hover:border-secondary"
						disabled={animation}
					>
						{animation && <Loader2Icon className="animate-spin mr-1" />}
						Place Order
					</Button>
				</form>
			</FormProvider>
		</div>
	)
}
