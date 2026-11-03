export interface CheckoutFormValues {
	shipping_first_name: string
	shipping_last_name: string
	shipping_address_one: string
	shipping_address_two?: string
	shipping_country: string
	shipping_state: string
	shipping_city: string
	shipping_pincode: string
	shipping_landmark: string
	shipping_phone_number: string
	billing_first_name?: string
	billing_last_name?: string
	billing_address_one?: string
	billing_address_two?: string
	billing_country?: string
	billing_state?: string
	billing_city?: string
	billing_pincode?: string
	billing_landmark?: string
	billing_phone_number?: string
	payment_mode: string
}

export interface CheckoutCountry {
	id: number
	name: string
}

export interface CountriesResponse {
	countriesList: CheckoutCountry[]
}

export interface PlaceOrderResponse {
	Orders: {
		id: number
	}
}
