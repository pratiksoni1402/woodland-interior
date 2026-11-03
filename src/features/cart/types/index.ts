export interface CartProduct {
	id: number;
	name: string;
	price: number;
	description?: string;
	image: string;
	sku?: string;
}

export interface CartItem {
	id: number;
	session_id?: string;
	productid: number;
	sku: string;
	quantity: number;
	products: CartProduct;
}

export interface CartTotals {
	subtotal: number;
	cgst: number;
	sgst: number;
	total: number;
}

export interface AddCartItemInput {
	id: number;
	sku: string;
	quantity: number;
}
