'use client'

import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { orderReceiptKeys } from '../keys/order-receipt-keys'
import type { OrderReceipt, OrderReceiptResponse } from '../types'

export function useOrderReceipt(orderId: string) {
	return useQuery({
		queryKey: orderReceiptKeys.detail(orderId),
		queryFn: async (): Promise<OrderReceipt | null> => {
			const response = await apiClient.post<OrderReceiptResponse>(
				`/api/order-receipt/${encodeURIComponent(orderId)}`
			)
			return response.data.orderReceipt
		},
		enabled: orderId.length > 0,
	})
}
