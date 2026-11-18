'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { StarRating } from './star-rating'
import { useReviewMutations } from '../hooks/use-reviews'
import {
	reviewSchema,
	type ReviewFormValues,
} from '../validations/review-schema'
import type { ReviewItem } from '../types'

interface ReviewFormProps {
	productId: number
	existingReview: ReviewItem | null
	onCancel?: () => void
}

export function ReviewForm({
	productId,
	existingReview,
	onCancel,
}: ReviewFormProps) {
	const isEditing = !!existingReview
	const { createReview, isCreating, updateReview, isUpdating } =
		useReviewMutations(productId)

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<ReviewFormValues>({
		resolver: zodResolver(reviewSchema),
		defaultValues: {
			rating: existingReview?.rating ?? 0,
			title: existingReview?.title ?? '',
			comment: existingReview?.comment ?? '',
		},
	})

	const currentRating = watch('rating')

	useEffect(() => {
		if (existingReview) {
			reset({
				rating: existingReview.rating,
				title: existingReview.title,
				comment: existingReview.comment,
			})
		}
	}, [existingReview, reset])

	const onSubmit = (data: ReviewFormValues) => {
		if (isEditing && existingReview) {
			updateReview(
				{
					id: existingReview.id,
					rating: data.rating,
					title: data.title,
					comment: data.comment,
				},
				{
					onSuccess: () => {
						onCancel?.()
					},
				}
			)
		} else {
			createReview(
				{
					productId,
					rating: data.rating,
					title: data.title,
					comment: data.comment,
				},
				{
					onSuccess: () => {
						reset({ rating: 0, title: '', comment: '' })
					},
				}
			)
		}
	}

	const isSubmitting = isCreating || isUpdating

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 border border-gray-200 rounded-md p-4"
		>
			<h3 className="text-lg font-semibold text-primary font-crimson">
				{isEditing ? 'Edit Your Review' : 'Write a Review'}
			</h3>

			<div className="space-y-1">
				<Label className="text-sm font-roboto text-primary">
					Rating <span className="text-red-500">*</span>
				</Label>
				<StarRating
					rating={currentRating}
					interactive
					size={24}
					onRatingChange={(value) =>
						setValue('rating', value, { shouldValidate: true })
					}
				/>
				{errors.rating && (
					<p className="text-xs text-red-600 font-roboto">
						{errors.rating.message}
					</p>
				)}
			</div>

			<div className="space-y-1">
				<Label
					htmlFor="review-title"
					className="text-sm font-roboto text-primary"
				>
					Title <span className="text-red-500">*</span>
				</Label>
				<Input
					id="review-title"
					placeholder="Summarize your experience"
					className="font-roboto text-sm border-gray-300 focus:border-primary"
					{...register('title')}
				/>
				{errors.title && (
					<p className="text-xs text-red-600 font-roboto">
						{errors.title.message}
					</p>
				)}
			</div>

			<div className="space-y-1">
				<Label
					htmlFor="review-comment"
					className="text-sm font-roboto text-primary"
				>
					Comment <span className="text-red-500">*</span>
				</Label>
				<Textarea
					id="review-comment"
					placeholder="Share your detailed experience with this product..."
					rows={4}
					className="font-roboto text-sm border-gray-300 focus:border-primary resize-none"
					{...register('comment')}
				/>
				{errors.comment && (
					<p className="text-xs text-red-600 font-roboto">
						{errors.comment.message}
					</p>
				)}
			</div>

			<div className="flex items-center gap-2">
				<Button
					type="submit"
					disabled={isSubmitting}
					className="text-sm font-roboto hover:cursor-pointer text-white bg-primary hover:bg-secondary border-primary hover:border-secondary rounded-md"
				>
					{isSubmitting && (
						<Loader2 className="mr-1 h-4 w-4 animate-spin" />
					)}
					{isEditing ? 'Update Review' : 'Submit Review'}
				</Button>
				{isEditing && onCancel && (
					<Button
						type="button"
						variant="outline"
						onClick={onCancel}
						className="text-sm font-roboto text-primary border-primary hover:bg-primary hover:text-white rounded-md"
					>
						Cancel
					</Button>
				)}
			</div>
		</form>
	)
}
