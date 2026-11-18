'use client'

import { StarRating } from './star-rating'
import type { ReviewItem } from '../types'

interface ReviewCardProps {
	review: ReviewItem
	isOwner: boolean
	onEdit: () => void
	onDelete: () => void
	isDeleting: boolean
}

function formatReviewDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-IN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

function getInitials(name: string): string {
	return name
		.split(' ')
		.map((part) => part.charAt(0))
		.join('')
		.toUpperCase()
		.slice(0, 2)
}

export function ReviewCard({
	review,
	isOwner,
	onEdit,
	onDelete,
	isDeleting,
}: ReviewCardProps) {
	return (
		<div className="review-card py-4 border-b border-gray-200 last:border-b-0">
			<div className="flex items-start gap-4">
				<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-roboto text-sm font-semibold">
					{getInitials(review.customerName)}
				</div>
				<div className="flex-1 min-w-0">
					<div className="flex items-center justify-between gap-2">
						<div>
							<h4 className="text-sm font-semibold text-primary font-crimson">
								{review.customerName}
							</h4>
							<div className="flex items-center gap-2 mt-0.5">
								<StarRating rating={review.rating} size={14} />
								<span className="text-xs text-gray-500 font-roboto">
									{formatReviewDate(review.createdAt)}
								</span>
							</div>
						</div>
						{isOwner && (
							<div className="flex items-center gap-2">
								<button
									type="button"
									onClick={onEdit}
									className="text-xs text-primary underline font-roboto hover:text-secondary transition-colors"
								>
									Edit
								</button>
								<button
									type="button"
									onClick={onDelete}
									disabled={isDeleting}
									className="text-xs text-red-600 underline font-roboto hover:text-red-800 transition-colors disabled:opacity-50"
								>
									{isDeleting ? 'Deleting...' : 'Delete'}
								</button>
							</div>
						)}
					</div>
					<h5 className="text-sm font-semibold text-primary font-roboto mt-2">
						{review.title}
					</h5>
					<p className="text-sm text-primary font-roboto mt-1 text-justify">
						{review.comment}
					</p>
				</div>
			</div>
		</div>
	)
}
