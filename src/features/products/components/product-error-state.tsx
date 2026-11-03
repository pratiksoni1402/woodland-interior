'use client'

import { Button } from '@/components/ui/button'

interface ProductErrorStateProps {
	message: string
	onRetry: () => void
}

export function ProductErrorState({
	message,
	onRetry,
}: ProductErrorStateProps) {
	return (
		<div className="py-12 text-center" role="alert">
			<p className="font-roboto text-sm text-destructive">{message}</p>
			<Button
				type="button"
				variant="outline"
				className="mt-4"
				onClick={onRetry}
			>
				Try again
			</Button>
		</div>
	)
}
