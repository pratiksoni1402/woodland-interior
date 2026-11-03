'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'
import { authKeys } from '../keys/auth-keys'
import type {
	AuthSession,
	LoginCredentials,
	PasswordResetRequest,
	PasswordResetResponse,
	SignupCredentials,
	SignupResponse,
} from '../types'

export function useAuthSession() {
	return useQuery({
		queryKey: authKeys.session,
		queryFn: async (): Promise<AuthSession> => {
			const response = await apiClient.get<{ getSessionData: AuthSession }>(
				'/api/get-sessiondata',
			)
			return response.data.getSessionData
		},
	})
}

export function useAuthMutations() {
	const queryClient = useQueryClient()

	const loginMutation = useMutation({
		mutationFn: async (credentials: LoginCredentials) => {
			await apiClient.post('/api/auth/login', credentials)
		},
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: authKeys.session }),
	})

	const signupMutation = useMutation({
		mutationFn: async (credentials: SignupCredentials) => {
			const response = await apiClient.post<SignupResponse>(
				'/api/auth/register',
				credentials,
			)
			return response.data
		},
		onSuccess: (response) => {
			if (response.successMessage) {
				return queryClient.invalidateQueries({ queryKey: authKeys.session })
			}
		},
	})

	const passwordResetMutation = useMutation({
		mutationFn: async (request: PasswordResetRequest) => {
			const response = await apiClient.post<PasswordResetResponse>(
				'/api/auth/forgot-password',
				request,
			)
			return response.data
		},
	})

	const logoutMutation = useMutation({
		mutationFn: async () => {
			await apiClient.post('/api/auth/logout')
		},
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: authKeys.session }),
	})

	return {
		login: loginMutation.mutate,
		isLoggingIn: loginMutation.isPending,
		signup: signupMutation.mutate,
		isSigningUp: signupMutation.isPending,
		requestPasswordReset: passwordResetMutation.mutate,
		isRequestingPasswordReset: passwordResetMutation.isPending,
		logout: logoutMutation.mutate,
		isLoggingOut: logoutMutation.isPending,
	}
}
