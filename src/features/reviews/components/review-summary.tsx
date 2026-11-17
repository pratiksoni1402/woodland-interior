'use client'

import { useReviewSummary } from '../hooks/use-reviews'
import { StarRating } from './star-rating'

interface ReviewSummaryProps {
	productId: number
}

export function ReviewSummary({ productId }: ReviewSummaryProps) {
	const { data: summary, isLoading } = useReviewSummary(productId)

	if (isLoading) {
		return (
			<div className="animate-pulse space-y-3">
				<div className="h-8 bg-gray-200 rounded w-32" />
				<div className="space-y-2">
					{Array.from({ length: 5 }, (_, i) => (
						<div key={i} className="h-4 bg-gray-200 rounded w-full" />
					))}
				</div>
			</div>
		)
	}

	if (!summary || summary.totalCount === 0) {
		return (
			<div className="text-sm text-primary font-roboto">
				No reviews yet. Be the first to review this product!
			</div>
		)
	}

	return (
		<div className="review-summary space-y-4">
			<div className="flex items-center gap-3">
				<span className="text-4xl font-bold text-primary font-crimson">
					{summary.averageRating.toFixed(1)}
				</span>
				<div>
					<StarRating rating={Math.round(summary.averageRating)} size={20} />
					<p className="text-sm text-primary font-roboto mt-1">
						Based on {summary.totalCount} review
						{summary.totalCount !== 1 ? 's' : ''}
					</p>
				</div>
			</div>

			<div className="space-y-2">
				{[5, 4, 3, 2, 1].map((star) => {
					const count = summary.distribution[star] ?? 0
					const percentage =
						summary.totalCount > 0
							? (count / summary.totalCount) * 100
							: 0

					return (
						<div key={star} className="flex items-center gap-2">
							<span className="text-xs font-roboto text-primary w-8">
								{star} ★
							</span>
							<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-amber-500 rounded-full transition-all duration-300"
									style={{ width: `${percentage}%` }}
								/>
							</div>
							<span className="text-xs font-roboto text-primary w-8 text-right">
								{count}
							</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
