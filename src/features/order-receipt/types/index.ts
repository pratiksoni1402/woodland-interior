export interface OrderReceiptItem {
	id: number
	name: string
	image: string
	quantity: number
	total_price: number | string
}

export interface OrderReceipt {
	id: number
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
	payment_mode: string
	subtotal: number | string
	tax_cgst: number | string
	tax_sgst: number | string
	total: number | string
	order_date: string
	orderitems: OrderReceiptItem[]
}

export interface OrderReceiptResponse {
	orderReceipt: OrderReceipt | null
}
