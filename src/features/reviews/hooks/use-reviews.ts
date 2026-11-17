'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { reviewKeys } from '../keys/review-keys'
import { showErrorToast, showSuccessToast } from '@/lib/toast'
import type {
	ReviewListResponse,
	ReviewSummaryResponse,
	ReviewItem,
	CreateReviewPayload,
	UpdateReviewPayload,
} from '../types'

export function useReviews(productId: number, page: number = 1) {
	return useQuery({
		queryKey: [...reviewKeys.list(productId), page],
		queryFn: async (): Promise<ReviewListResponse> => {
			const response = await apiClient.get('/api/reviews', {
				params: { productId, page, limit: 5 },
			})
			return response.data
		},
		enabled: productId > 0,
	})
}

export function useReviewSummary(productId: number) {
	return useQuery({
		queryKey: reviewKeys.summary(productId),
		queryFn: async (): Promise<ReviewSummaryResponse> => {
			const response = await apiClient.get('/api/reviews/summary', {
				params: { productId },
			})
			return response.data
		},
		enabled: productId > 0,
	})
}

export function useUserReview(productId: number) {
	return useQuery({
		queryKey: reviewKeys.user(productId),
		queryFn: async (): Promise<ReviewItem | null> => {
			const response = await apiClient.get('/api/reviews/user', {
				params: { productId },
			})
			return response.data.review
		},
		enabled: productId > 0,
		retry: false,
	})
}

export function useReviewMutations(productId: number) {
	const queryClient = useQueryClient()

	const invalidateReviews = () => {
		queryClient.invalidateQueries({ queryKey: reviewKeys.list(productId) })
		queryClient.invalidateQueries({
			queryKey: reviewKeys.summary(productId),
		})
		queryClient.invalidateQueries({ queryKey: reviewKeys.user(productId) })
	}

	const createMutation = useMutation({
		mutationFn: async (data: CreateReviewPayload) => {
			const response = await apiClient.post('/api/reviews', data)
			return response.data
		},
		onSuccess: () => {
			invalidateReviews()
			showSuccessToast('Review submitted successfully')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to submit review')
		},
	})

	const updateMutation = useMutation({
		mutationFn: async (data: UpdateReviewPayload) => {
			const response = await apiClient.put('/api/reviews', data)
			return response.data
		},
		onSuccess: () => {
			invalidateReviews()
			showSuccessToast('Review updated successfully')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to update review')
		},
	})

	const deleteMutation = useMutation({
		mutationFn: async (id: number) => {
			const response = await apiClient.delete('/api/reviews', {
				data: { id },
			})
			return response.data
		},
		onSuccess: () => {
			invalidateReviews()
			showSuccessToast('Review deleted successfully')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to delete review')
		},
	})

	return {
		createReview: createMutation.mutate,
		isCreating: createMutation.isPending,
		updateReview: updateMutation.mutate,
		isUpdating: updateMutation.isPending,
		deleteReview: deleteMutation.mutate,
		isDeleting: deleteMutation.isPending,
	}
}
