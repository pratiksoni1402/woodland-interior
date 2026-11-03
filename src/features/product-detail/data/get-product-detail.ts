import { cache } from 'react'
import type { ProductDetail, ProductDetailResponse } from '../types'

export const getProductDetail = cache(
	async (id: string): Promise<ProductDetail | null> => {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
		if (!baseUrl) {
			throw new Error('NEXT_PUBLIC_BASE_URL is not configured.')
		}

		const url = new URL(
			`/api/product-detail/${encodeURIComponent(id)}`,
			baseUrl
		)
		const response = await fetch(url, { cache: 'no-store' })
		if (!response.ok) {
			throw new Error(`Failed to load product details (${response.status}).`)
		}

		const data: ProductDetailResponse = await response.json()
		return data.productDetail
	}
)
