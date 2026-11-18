'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
	rating: number
	maxRating?: number
	size?: number
	interactive?: boolean
	onRatingChange?: (rating: number) => void
	className?: string
}

export function StarRating({
	rating,
	maxRating = 5,
	size = 18,
	interactive = false,
	onRatingChange,
	className,
}: StarRatingProps) {
	return (
		<div
			className={cn('flex items-center gap-0.5', className)}
			role={interactive ? 'radiogroup' : 'img'}
			aria-label={
				interactive
					? 'Select rating'
					: `Rated ${rating} out of ${maxRating} stars`
			}
		>
			{Array.from({ length: maxRating }, (_, index) => {
				const starValue = index + 1
				const isFilled = starValue <= rating
				const isHalf =
					!isFilled && starValue - 0.5 <= rating && rating < starValue

				return (
					<button
						key={starValue}
						type="button"
						disabled={!interactive}
						onClick={() => interactive && onRatingChange?.(starValue)}
						className={cn(
							'p-0 border-0 bg-transparent',
							interactive
								? 'cursor-pointer hover:scale-110 transition-transform'
								: 'cursor-default'
						)}
						aria-label={
							interactive
								? `Rate ${starValue} star${starValue > 1 ? 's' : ''}`
								: undefined
						}
						tabIndex={interactive ? 0 : -1}
					>
						<Star
							size={size}
							className={cn(
								isFilled || isHalf
									? 'fill-amber-500 text-amber-500'
									: 'fill-none text-gray-300'
							)}
						/>
					</button>
				)
			})}
		</div>
	)
}
