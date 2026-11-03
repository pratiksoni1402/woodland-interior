'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { showErrorToast, showSuccessToast } from '@/lib/toast'
import { accountKeys } from '../keys/account-keys'
import type {
	AccountCountriesResponse,
	AccountCountry,
	AccountProfile,
	AccountProfileResponse,
	AccountProfileValues,
	UpdatePasswordResponse,
	UpdatePasswordValues,
} from '../types'

export function useAccountCountries() {
	return useQuery({
		queryKey: accountKeys.countries(),
		queryFn: async (): Promise<AccountCountry[]> => {
			const response =
				await apiClient.get<AccountCountriesResponse>('/api/get-countries')
			return response.data.countriesList
		},
		staleTime: 1000 * 60 * 60,
	})
}

export function useAccountProfile() {
	return useQuery({
		queryKey: accountKeys.profile(),
		queryFn: async (): Promise<AccountProfile | null> => {
			const response = await apiClient.get<AccountProfileResponse>(
				'/api/get-customer-profile'
			)
			return response.data.getprofile
		},
	})
}

export function useUpdateAccountProfile() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (profile: AccountProfileValues) => {
			await apiClient.put('/api/customer-profile', profile)
		},
		onSuccess: () => {
			showSuccessToast('Profile updated successfully')
			queryClient.invalidateQueries({ queryKey: accountKeys.profile() })
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Error while updating profile')
		},
	})
}

export function useUpdateAccountPassword() {
	return useMutation({
		mutationFn: async (
			password: UpdatePasswordValues
		): Promise<UpdatePasswordResponse> => {
			const response = await apiClient.post<UpdatePasswordResponse>(
				'/api/auth/update-password',
				password
			)
			return response.data
		},
		onSuccess: (response) => {
			if (response.messageSuccess) {
				showSuccessToast(response.messageSuccess)
			} else if (response.message) {
				showErrorToast(response.message)
			} else {
				showErrorToast('Unable to update password')
			}
		},
		onError: (error: Error) => {
			showErrorToast(error.message || 'Something went wrong, try again later.')
		},
	})
}
