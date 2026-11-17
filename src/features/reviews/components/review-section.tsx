'use client'

import { useState, useEffect } from 'react'
import { ReviewSummary } from './review-summary'
import { ReviewList } from './review-list'
import { ReviewForm } from './review-form'
import { useUserReview } from '../hooks/use-reviews'
import type { ReviewItem } from '../types'

interface ReviewSectionProps {
	productId: number
}

export function ReviewSection({ productId }: ReviewSectionProps) {
	const [userEmail, setUserEmail] = useState<string | null>(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authLoading, setAuthLoading] = useState(true)
	const [editingReview, setEditingReview] = useState<ReviewItem | null>(null)

	const userReviewQuery = useUserReview(productId)

	useEffect(() => {
		async function checkAuth() {
			try {
				const response = await fetch('/api/auth-check', { method: 'POST' })
				const data = await response.json()
				if (data.userstatus === 1) {
					setIsLoggedIn(true)
					const sessionRes = await fetch('/api/get-sessiondata')
					const sessionData = await sessionRes.json()
					setUserEmail(sessionData?.getSessionData?.user_details?.email ?? null)
				}
			} catch {
				// User is not logged in
			} finally {
				setAuthLoading(false)
			}
		}
		checkAuth()
	}, [])

	const handleEditReview = (review: ReviewItem) => {
		setEditingReview(review)
		document
			.getElementById('review-form-section')
			?.scrollIntoView({ behavior: 'smooth' })
	}

	const handleCancelEdit = () => {
		setEditingReview(null)
	}

	const hasExistingReview = !!userReviewQuery.data
	const showForm =
		isLoggedIn && (!hasExistingReview || editingReview !== null)

	return (
		<div className="review-section py-8">
			<h2 className="text-2xl font-semibold text-primary font-crimson pb-4">
				Customer Reviews
			</h2>

			<div className="grid grid-cols-12 gap-8">
				<div className="lg:col-span-4 md:col-span-5 col-span-12">
					<ReviewSummary productId={productId} />
				</div>

				<div className="lg:col-span-8 md:col-span-7 col-span-12">
					<div id="review-form-section">
						{authLoading ? (
							<div className="animate-pulse h-10 bg-gray-200 rounded w-full mb-4" />
						) : showForm ? (
							<div className="mb-6">
								<ReviewForm
									productId={productId}
									existingReview={editingReview}
									onCancel={
										editingReview ? handleCancelEdit : undefined
									}
								/>
							</div>
						) : !isLoggedIn ? (
							<div className="mb-6 p-4 border border-gray-200 rounded-md">
								<p className="text-sm text-primary font-roboto">
									Please{' '}
									<a
										href="/auth"
										className="text-secondary underline font-semibold hover:text-primary transition-colors"
									>
										sign in
									</a>{' '}
									to write a review.
								</p>
							</div>
						) : null}
					</div>

					<ReviewList
						productId={productId}
						userEmail={userEmail}
						onEditReview={handleEditReview}
					/>
				</div>
			</div>
		</div>
	)
}
