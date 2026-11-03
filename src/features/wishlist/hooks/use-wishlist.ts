'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { wishlistKeys } from '../keys/wishlist-keys'
import { cartKeys } from '@/features/cart/keys/cart-keys'
import { showErrorToast, showSuccessToast } from '@/lib/toast'
import type { AddWishlistItemInput, WishlistItem } from '../types'

export function useWishlist() {
	return useQuery({
		queryKey: wishlistKeys.items(),
		queryFn: async (): Promise<WishlistItem[]> => {
			const response = await apiClient.get('/api/wishlist-items/get-data')
			return response.data?.getallproduct ?? []
		},
	})
}

export function useWishlistCount() {
	return useQuery({
		queryKey: wishlistKeys.count(),
		queryFn: async (): Promise<number> => {
			const response = await apiClient.get('/api/wishlist-items/get-count')
			return response.data?.totalcount ?? 0
		},
	})
}

export function useWishlistMutations() {
	const queryClient = useQueryClient()

	const invalidateWishlist = () => {
		queryClient.invalidateQueries({ queryKey: wishlistKeys.all })
		// Invalidate legacy keys for backwards compatibility during migration
		queryClient.invalidateQueries({ queryKey: ['productlist'] })
		queryClient.invalidateQueries({ queryKey: ['wishlistcount'] })
	}

	const deleteItemMutation = useMutation({
		mutationFn: async (id: number) => {
			await apiClient.post('/api/wishlist-items/delete-item', { id })
		},
		onSuccess: () => {
			invalidateWishlist()
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to remove from wishlist')
		},
	})

	const addItemMutation = useMutation({
		mutationFn: async (item: AddWishlistItemInput) => {
			await apiClient.post('/api/wishlist-items/set-data', item)
		},
		onSuccess: () => {
			invalidateWishlist()
			showSuccessToast('Product added to wishlist')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to add product to wishlist')
		},
	})

	const moveToCartMutation = useMutation({
		mutationFn: async ({
			id,
			productid,
			sku,
			quantity,
		}: {
			id: number
			productid: number
			sku: string
			quantity: number
		}) => {
			await apiClient.post('/api/cart-items/from-wishlist', {
				productid,
				sku,
				quantity,
			})
			await apiClient.post('/api/wishlist-items/delete-item', { id })
		},
		onSuccess: () => {
			invalidateWishlist()
			queryClient.invalidateQueries({ queryKey: cartKeys.all })
			queryClient.invalidateQueries({ queryKey: ['product'] })
			queryClient.invalidateQueries({ queryKey: ['totalcount'] })
			showSuccessToast('Moved to cart')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to move to cart')
		},
	})

	return {
		addItem: addItemMutation.mutate,
		removeItem: deleteItemMutation.mutate,
		isAdding: addItemMutation.isPending,
		deleteItem: deleteItemMutation.mutateAsync,
		isDeleting: deleteItemMutation.isPending,
		moveToCart: moveToCartMutation.mutateAsync,
		isMoving: moveToCartMutation.isPending,
	}
}
