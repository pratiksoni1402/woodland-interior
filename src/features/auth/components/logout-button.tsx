'use client'

import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { showErrorToast, showSuccessToast } from '@/lib/toast'
import { useAuthMutations, useAuthSession } from '../hooks/use-auth'

export function LogoutButton() {
	const router = useRouter()
	const { data: session } = useAuthSession()
	const { logout, isLoggingOut } = useAuthMutations()

	if (!session?.user_details) return null

	const handleLogout = () => {
		logout(undefined, {
			onSuccess: () => {
				showSuccessToast('Logged Out')
				router.push('/')
			},
			onError: (error) =>
				showErrorToast(error.message || 'Unable to log out'),
		})
	}

	return (
		<div className="lg:mt-7 mt-0 font-roboto text-base font-medium !text-primary lg:leading-7 leading-[18px] !w-full">
			<Button
				type="button"
				onClick={handleLogout}
				disabled={isLoggingOut}
				className={
					isLoggingOut
						? 'bg-secondary border-secondary text-white w-full'
						: 'bg-white w-full lg:rounded-md rounded-none px-0 border border-border lg:border-x border-x-0 shadow-none outline-none hover:cursor-pointer text-primary font-medium hover:bg-secondary hover:border-secondary hover:text-white'
				}
			>
				{isLoggingOut && <Loader2Icon className="animate-spin mr-1" />}
				Logout
			</Button>
		</div>
	)
}
