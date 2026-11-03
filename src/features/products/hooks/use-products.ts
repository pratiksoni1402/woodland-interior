'use client'

import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { productsKeys } from '../keys/products-keys'
import type { ProductCategory, ProductListingResponse } from '../types'

export function useProducts(slug: string | null, price: string | null) {
	return useQuery({
		queryKey: productsKeys.listing(slug, price),
		queryFn: async () => {
			const params = new URLSearchParams()
			if (slug) params.set('slug', slug)
			if (price) params.set('price', price)

			const response = await apiClient.get<ProductListingResponse>(
				`/api/product-listing?${params.toString()}`
			)
			return response.data.productlist
		},
	})
}

export function useProductCategories() {
	return useQuery({
		queryKey: productsKeys.categories(),
		queryFn: async () => {
			const response = await apiClient.get<ProductCategory[]>(
				'/api/get-categories'
			)
			return response.data
		},
		staleTime: 1000 * 60 * 5,
	})
}
