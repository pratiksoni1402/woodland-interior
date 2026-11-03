import type { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import { AccountSideMenu } from './account-side-menu'

function getGreeting(firstName: string | undefined) {
	const now = new Date()
	const istTime = new Date(
		now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
	)
	const hour = istTime.getHours()
	const greeting =
		hour >= 4 && hour < 12
			? 'Good morning'
			: hour >= 12 && hour < 17
				? 'Good afternoon'
				: 'Good evening'

	return `${greeting}, ${firstName ?? ''}`
}

interface AccountLayoutProps {
	children: ReactNode
}

export async function AccountLayout({ children }: AccountLayoutProps) {
	const session = await getSession()
	if (!session?.user_details) {
		redirect('/auth/login')
	}

	return (
		<div className="xl:container container-fluid">
			<Toaster />
			<div className="heading text-center font-crimson text-[#3c2f27] text-3xl py-5">
				<h1 className="capitalize md:text-4xl text-2xl">
					{getGreeting(session.user_details.firstname)}
				</h1>
			</div>

			<div className="grid grid-cols-12 sm:gap-10 gap-4 mb-20">
				<div className="lg:col-span-3 col-span-12 self-start lg:order-1 order-2 !sticky bg-white top-20 bottom-0">
					<div className="font-crimson text-lg">
						<AccountSideMenu />
					</div>
				</div>
				<div className="lg:col-span-9 col-span-12 min-h-[calc(100vh-300px)] lg:order-2 order-1">
					{children}
				</div>
			</div>
		</div>
	)
}
