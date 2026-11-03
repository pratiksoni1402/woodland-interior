'use client'

import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { previousOrderKeys } from '../keys/previous-order-keys'
import type {
	PreviousOrder,
	PreviousOrderDetail,
	PreviousOrderDetailResponse,
	PreviousOrdersResponse,
} from '../types'

export function usePreviousOrders() {
	return useQuery({
		queryKey: previousOrderKeys.list(),
		queryFn: async (): Promise<PreviousOrder[]> => {
			const response =
				await apiClient.get<PreviousOrdersResponse>('/api/past-orders')
			return response.data.getOrders
		},
	})
}

export function usePreviousOrderDetail(orderId: string) {
	return useQuery({
		queryKey: previousOrderKeys.detail(orderId),
		queryFn: async (): Promise<PreviousOrderDetail | null> => {
			const response = await apiClient.get<PreviousOrderDetailResponse>(
				`/api/previous-orders/${encodeURIComponent(orderId)}`
			)
			return response.data.orderDetail
		},
		enabled: orderId.length > 0,
	})
}
