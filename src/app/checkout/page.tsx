import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { CheckoutView } from '@/features/checkout'

export default async function CheckoutPage() {
	const session = await getSession()

	if (!session?.user_details) {
		redirect('/auth?redirect=/checkout')
	}

	return <CheckoutView />
}
