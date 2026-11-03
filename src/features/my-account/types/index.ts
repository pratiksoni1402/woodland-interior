export interface AccountCountry {
	id: number
	name: string
}

export interface AccountProfile {
	id: number
	firstname: string
	lastname: string
	addresslineone: string | null
	addresslinetwo: string | null
	country: string | null
	state: string | null
	city: string | null
	phonenumber: string | null
	pincode: number | null
}

export interface AccountProfileValues {
	firstname: string
	lastname: string
	addresslineone: string
	addresslinetwo: string
	country: string
	state: string
	city: string
	pincode: string
	phonenumber: string
}

export interface AccountCountriesResponse {
	countriesList: AccountCountry[]
}

export interface AccountProfileResponse {
	getprofile: AccountProfile | null
}

export interface UpdatePasswordValues {
	oldPassword: string
	newPassword: string
	confirmPassword: string
}

export interface UpdatePasswordResponse {
	message?: string
	messageSuccess?: string
}
