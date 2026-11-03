'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api-client'
import { cartKeys } from '@/features/cart/keys/cart-keys'
import { checkoutKeys } from '../keys/checkout-keys'
import type {
	CountriesResponse,
	CheckoutCountry,
	CheckoutFormValues,
	PlaceOrderResponse,
} from '../types'

export function useCheckoutCountries() {
	return useQuery({
		queryKey: checkoutKeys.countries(),
		queryFn: async (): Promise<CheckoutCountry[]> => {
			const response =
				await apiClient.get<CountriesResponse>('/api/get-countries')
			return response.data.countriesList
		},
		staleTime: 1000 * 60 * 60,
	})
}

export function usePlaceOrder() {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (order: CheckoutFormValues) => {
			const response = await apiClient.post<PlaceOrderResponse>(
				'/api/place-order',
				order
			)
			return response.data.Orders
		},
		onSuccess: (order) => {
			queryClient.invalidateQueries({ queryKey: cartKeys.all })
			router.push(`/order-receipt/${order.id}`)
		},
	})
}
