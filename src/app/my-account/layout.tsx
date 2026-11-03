import type { ReactNode } from 'react'
import { AccountLayout } from '@/features/my-account'

export default function MyAccountLayout({ children }: { children: ReactNode }) {
	return <AccountLayout>{children}</AccountLayout>
}
