export interface PreviousOrder {
	id: number
	payment_mode: string
	order_date: string
	total: number | string
}

export interface PreviousOrderItem {
	id: number
	name: string
	image: string
	quantity: number
	total_price: number | string
}

export interface PreviousOrderDetail extends PreviousOrder {
	shipping_first_name: string
	shipping_last_name: string
	shipping_address_one: string
	shipping_country: string
	shipping_state: string
	shipping_city: string
	shipping_pincode: number
	shipping_landmark: string
	shipping_phone_number: number
	billing_first_name: string | null
	billing_last_name: string | null
	billing_address_one: string | null
	billing_country: string | null
	billing_state: string | null
	billing_city: string | null
	billing_pincode: number | null
	billing_landmark: string | null
	billing_phone_number: number | null
	subtotal: number | string
	tax_cgst: number | string
	tax_sgst: number | string
	orderitems: PreviousOrderItem[]
}

export interface PreviousOrdersResponse {
	getOrders: PreviousOrder[]
}

export interface PreviousOrderDetailResponse {
	orderDetail: PreviousOrderDetail | null
}
