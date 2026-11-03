export interface AuthSession {
	user_details?: {
		firstname?: string
		lastname?: string
		email?: string
	} | null
}

export interface LoginCredentials {
	email: string
	password: string
}

export interface SignupCredentials {
	firstname: string
	lastname: string
	email: string
	password: string
	cnfpassword: string
}

export interface SignupResponse {
	successMessage?: string
	errorMessage?: string
}

export interface PasswordResetRequest {
	email: string
}

export interface PasswordResetResponse {
	type: 'success' | 'error'
	message: string
}
