'use client'

import { useState } from 'react'
import { useReviews, useReviewMutations } from '../hooks/use-reviews'
import { ReviewCard } from './review-card'
import { Button } from '@/components/ui/button'
import type { ReviewItem } from '../types'

interface ReviewListProps {
	productId: number
	userEmail: string | null
	onEditReview: (review: ReviewItem) => void
}

export function ReviewList({
	productId,
	userEmail,
	onEditReview,
}: ReviewListProps) {
	const [page, setPage] = useState(1)
	const { data, isLoading } = useReviews(productId, page)
	const { deleteReview, isDeleting } = useReviewMutations(productId)

	if (isLoading) {
		return (
			<div className="space-y-4 animate-pulse">
				{Array.from({ length: 3 }, (_, i) => (
					<div key={i} className="flex gap-4 py-4">
						<div className="w-10 h-10 rounded-full bg-gray-200" />
						<div className="flex-1 space-y-2">
							<div className="h-4 bg-gray-200 rounded w-24" />
							<div className="h-3 bg-gray-200 rounded w-full" />
							<div className="h-3 bg-gray-200 rounded w-3/4" />
						</div>
					</div>
				))}
			</div>
		)
	}

	if (!data || data.reviews.length === 0) {
		return null
	}

	return (
		<div className="review-list">
			{data.reviews.map((review) => (
				<ReviewCard
					key={review.id}
					review={review}
					isOwner={userEmail === review.customerEmail}
					onEdit={() => onEditReview(review)}
					onDelete={() => deleteReview(review.id)}
					isDeleting={isDeleting}
				/>
			))}

			{data.totalPages > 1 && (
				<div className="flex items-center justify-center gap-2 pt-4">
					<Button
						type="button"
						variant="outline"
						onClick={() => setPage((p) => Math.max(p - 1, 1))}
						disabled={page === 1}
						className="text-xs font-roboto border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50"
					>
						Previous
					</Button>
					<span className="text-sm font-roboto text-primary px-3">
						Page {data.currentPage} of {data.totalPages}
					</span>
					<Button
						type="button"
						variant="outline"
						onClick={() =>
							setPage((p) => Math.min(p + 1, data.totalPages))
						}
						disabled={page === data.totalPages}
						className="text-xs font-roboto border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50"
					>
						Next
					</Button>
				</div>
			)}
		</div>
	)
}
