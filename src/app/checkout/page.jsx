import OrderDetails from './_components'
import ShoppingBag from './_components/shopping-bag'

import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function Checkout() {
	const session = await getSession()

	if (!session?.user_details) {
		return redirect('/auth?redirect=/checkout')
	}

	return (
		<div className=" pb-10 border-t border-border">
			<div className="container">
				<div className="heading text-center sm:pt-5 pt-3 sm:pb-10 pb-0 font-crimson text-primary sm:text-4xl text-2xl">
					Secure Checkout
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="xl:col-span-7 lg:col-span-7 md:col-span-6 md:order-1 order-2 sm:col-span-12 col-span-12">
						<div className="left-section">
							<OrderDetails />
						</div>
					</div>
					<div className="xl:col-span-5 lg:col-span-5 md:col-span-6 md:order-2 order-1 sm:col-span-12 col-span-12">
						<div className="right-section sticky top-24">
							<ShoppingBag />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
