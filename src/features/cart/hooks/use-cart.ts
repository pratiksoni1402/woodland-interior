'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { cartKeys } from '../keys/cart-keys'
import { wishlistKeys } from '@/features/wishlist/keys/wishlist-keys'
import { showErrorToast, showSuccessToast } from '@/lib/toast'
import type { AddCartItemInput, CartItem } from '../types'

export function useCart() {
	return useQuery({
		queryKey: cartKeys.items(),
		queryFn: async (): Promise<CartItem[]> => {
			const response = await apiClient.get('/api/cart-items/get-data')
			return response.data?.cartdata ?? []
		},
	})
}

export function useCartCount() {
	return useQuery({
		queryKey: cartKeys.count(),
		queryFn: async (): Promise<number> => {
			const response = await apiClient.get('/api/cart-items/get-count')
			return response.data?.productcount ?? 0
		},
	})
}

export function useCartMutations() {
	const queryClient = useQueryClient()

	const invalidateCart = () => {
		queryClient.invalidateQueries({ queryKey: cartKeys.all })
		// Invalidate legacy keys for backwards compatibility during migration
		queryClient.invalidateQueries({ queryKey: ['product'] })
		queryClient.invalidateQueries({ queryKey: ['totalcount'] })
		queryClient.invalidateQueries({ queryKey: ['cart-items'] })
	}

	const deleteItemMutation = useMutation({
		mutationFn: async (id: number) => {
			await apiClient.post('/api/cart-items/delete-item', { id })
		},
		onSuccess: () => {
			invalidateCart()
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to remove item')
		},
	})

	const updateQuantityMutation = useMutation({
		mutationFn: async ({ id, quantity }: { id: number; quantity: number }) => {
			await apiClient.put('/api/cart-items/update-quantity', { id, quantity })
		},
		onSuccess: () => {
			invalidateCart()
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to update quantity')
		},
	})

	const addItemMutation = useMutation({
		mutationFn: async (item: AddCartItemInput) => {
			await apiClient.post('/api/cart-items/set-data', item)
		},
		onSuccess: () => {
			invalidateCart()
			showSuccessToast('Product added to cart')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to add product to cart')
		},
	})

	const moveToWishlistMutation = useMutation({
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
			await apiClient.post('/api/wishlist-items/from-cart', {
				productid,
				sku,
				quantity,
			})
			await apiClient.post('/api/cart-items/delete-item', { id })
		},
		onSuccess: () => {
			invalidateCart()
			queryClient.invalidateQueries({ queryKey: wishlistKeys.all })
			queryClient.invalidateQueries({ queryKey: ['wishlistcount'] })
			queryClient.invalidateQueries({ queryKey: ['productlist'] })
			showSuccessToast('Moved to wishlist')
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Failed to move to wishlist')
		},
	})

	return {
		addItem: addItemMutation.mutate,
		isAdding: addItemMutation.isPending,
		deleteItem: deleteItemMutation.mutateAsync,
		isDeleting: deleteItemMutation.isPending,
		updateQuantity: updateQuantityMutation.mutateAsync,
		isUpdating: updateQuantityMutation.isPending,
		moveToWishlist: moveToWishlistMutation.mutateAsync,
		isMoving: moveToWishlistMutation.isPending,
	}
}
